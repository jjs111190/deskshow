// Hand-written minimal typing for the real Chain Zero SumpleteEngine.
// The real implementation is resolved at build/dev time via vite alias
// `@cz-engine` -> <desktop>/Chain Zero/src/game/SumpleteEngine.ts
// (read-only reference; nothing copied, original never modified).
declare module '@cz-engine' {
  export interface SumpleteBoard {
    size: number;
    values: number[][];
    deleted: boolean[][];
    rowTargets: number[];
    colTargets: number[];
    seed: number;
    solved: boolean;
  }
  export const SumpleteEngine: {
    create(size?: number, seed?: number): SumpleteBoard;
    toggle(board: SumpleteBoard, row: number, col: number): SumpleteBoard;
    rowMatches(board: SumpleteBoard, row: number): boolean;
    colMatches(board: SumpleteBoard, col: number): boolean;
    restart(board: SumpleteBoard): SumpleteBoard;
  };
}
