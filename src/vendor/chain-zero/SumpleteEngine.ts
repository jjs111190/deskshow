/**
 * Vendored from the owner's local project "Chain Zero"
 * (src/game/SumpleteEngine.ts + random.ts) for the DESKSHOW web demo,
 * with owner approval (2026-10-12). Original is never modified;
 * this copy lets the demo build on any machine (e.g. GitHub Actions).
 * Re-sync with: cp "<desktop>/Chain Zero/src/game/{SumpleteEngine,random}.ts" src/vendor/chain-zero/
 */
import type { SumpleteBoard } from './sumplete-types';
import { mixSeed, seededRandom } from './random';

export type { SumpleteBoard } from './sumplete-types';

function grid<T>(size: number, fill: (row: number, col: number) => T): T[][] {
  return Array.from({ length: size }, (_, row) =>
    Array.from({ length: size }, (_, col) => fill(row, col)),
  );
}

function rowSum(board: SumpleteBoard, row: number): number {
  let total = 0;
  for (let col = 0; col < board.size; col += 1) {
    if (!board.deleted[row]![col]) total += board.values[row]![col]!;
  }
  return total;
}

function colSum(board: SumpleteBoard, col: number): number {
  let total = 0;
  for (let row = 0; row < board.size; row += 1) {
    if (!board.deleted[row]![col]) total += board.values[row]![col]!;
  }
  return total;
}

function checkSolved(board: SumpleteBoard): boolean {
  for (let i = 0; i < board.size; i += 1) {
    if (rowSum(board, i) !== board.rowTargets[i]) return false;
    if (colSum(board, i) !== board.colTargets[i]) return false;
  }
  return true;
}

export const SumpleteEngine = {
  /**
   * Builds a guaranteed-solvable puzzle: fill with 1–9, pick a random "keep"
   * set, and derive the row/column targets from it. The player starts with
   * nothing crossed out and deletes cells until every line hits its target.
   */
  create(size = 4, seed = Date.now()): SumpleteBoard {
    const random = seededRandom(mixSeed(seed, size) >>> 0);
    const values = grid(size, () => 1 + Math.floor(random() * 9));

    // Keep each cell with ~60% probability; ensure at least a couple deletions
    // so the untouched board is not already the answer.
    const keep = grid(size, () => random() < 0.6);
    let deletions = 0;
    for (let r = 0; r < size; r += 1) for (let c = 0; c < size; c += 1) if (!keep[r]![c]) deletions += 1;
    let guard = 0;
    while (deletions < Math.max(2, Math.floor((size * size) / 4)) && guard < size * size * 4) {
      const r = Math.floor(random() * size);
      const c = Math.floor(random() * size);
      if (keep[r]![c]) {
        keep[r]![c] = false;
        deletions += 1;
      }
      guard += 1;
    }

    const rowTargets = Array.from({ length: size }, (_, r) => {
      let total = 0;
      for (let c = 0; c < size; c += 1) if (keep[r]![c]) total += values[r]![c]!;
      return total;
    });
    const colTargets = Array.from({ length: size }, (_, c) => {
      let total = 0;
      for (let r = 0; r < size; r += 1) if (keep[r]![c]) total += values[r]![c]!;
      return total;
    });

    const board: SumpleteBoard = {
      size,
      values,
      deleted: grid(size, () => false),
      rowTargets,
      colTargets,
      seed,
      solved: false,
    };
    board.solved = checkSolved(board);
    return board;
  },

  toggle(board: SumpleteBoard, row: number, col: number): SumpleteBoard {
    if (board.solved) return board;
    const deleted = board.deleted.map((line) => [...line]);
    deleted[row]![col] = !deleted[row]![col];
    const next: SumpleteBoard = { ...board, deleted };
    next.solved = checkSolved(next);
    return next;
  },

  rowSum,
  colSum,
  rowMatches: (board: SumpleteBoard, row: number) => rowSum(board, row) === board.rowTargets[row],
  colMatches: (board: SumpleteBoard, col: number) => colSum(board, col) === board.colTargets[col],

  restart(board: SumpleteBoard): SumpleteBoard {
    return SumpleteEngine.create(board.size, Date.now());
  },
};
