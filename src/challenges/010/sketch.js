import { COLS, ROWS } from './helpers.js';
import { Cell } from './cell.js';

let w;
let h;
let cells;
let toVisit;

export function setup() {
	cells = [];
	toVisit = [0];

	this.createCanvas(400, 400);
	this.frameRate(30);

	w = this.width / COLS;
	h = this.height / ROWS;

	for (let j = 0; j < COLS; j++) {
		for (let i = 0; i < ROWS; i++) {
			cells.push(new Cell(i, j));
		}
	}
}

export function draw() {
	this.background(255);

	if (toVisit.length > 0) {
		const current = cells[toVisit[toVisit.length - 1]];
		current.visited = true;
		const neighbors = current.checkNeighbors(cells);
		if (neighbors.length === 0) {
			toVisit.pop();
		}
		else if (neighbors.length > 0) {
			const randomNeighborIndex = neighbors[Math.floor(Math.random() * neighbors.length)];
			const winner = cells[randomNeighborIndex];
			winner.walkTo(current);
			current.walkTo(winner);
			toVisit.push(randomNeighborIndex);
		}
	}

	for (let cell of cells) {
		cell.display(this, w, h);
	}
}
