export const COLS = 20;
export const ROWS = 20;

export function isValid(i, j) {
    return i >= 0 && j >= 0 && i < COLS && j < ROWS;
}

export function toIndex(i, j) {
    return j * COLS + i;
}
