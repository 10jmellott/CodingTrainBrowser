import { Cell } from './cell.js';

let cells = [];
let offset = 0;

export function setup() {
    this.createCanvas(600, 600);
    this.smooth();
    this.noStroke();
    this.ellipseMode(this.CENTER);
    this.fill(245, 180);
    cells.push(new Cell(this, this.createVector(this.width / 2, this.height / 2), 80));
}

export function draw() {
    this.background(57, 57, 108);
    for (let cell of cells) {
        cell.update(this, offset);
        cell.display(this);
    }
    offset += 0.008;
}

export function mousePressed() {
    for (let i = cells.length - 1; i >= 0; i--) {
        const cell = cells[i];
        if (cell.intersects(this.mouseX, this.mouseY)) {
            const newCells = cell.split(this);
            for (let newCell of newCells) {
                cells.push(newCell);
            }
            cells.splice(i, 1);
            return;
        }
    }
}
