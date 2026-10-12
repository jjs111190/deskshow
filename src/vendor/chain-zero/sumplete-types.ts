// Copied verbatim from the owner's local project "Chain Zero"
// (src/game/types.ts → SumpleteBoard interface only) for the DESKSHOW
// web demo, with owner approval (2026-10-12).
export interface SumpleteBoard {
  size: number;
  values: number[][];
  /** Player-marked deletions (true = crossed out, does not count). */
  deleted: boolean[][];
  rowTargets: number[];
  colTargets: number[];
  seed: number;
  solved: boolean;
}
