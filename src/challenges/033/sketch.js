import Disc from './disc';

import { height, width, rows, cols } from './constants';

let discs;
let pendingDiscs;

let grid;

export function setup() {
	this.createCanvas(width, height);

	this.colorMode(this.HSB);

	discs = [];
	pendingDiscs = [];
	grid = [];
	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			grid.push(null);
		}
	}

	const initialDisc = new Disc(this.createVector(this.width / 2, this.height / 2));
	discs.push(initialDisc);
	pendingDiscs.push(initialDisc);
	grid[initialDisc.index] = initialDisc;
}

export function draw() {
	this.background(0);

	// Update
	for (let i = 0; i < 10; i++) {
		if (pendingDiscs.length > 0) {
			let disc = pendingDiscs.shift();
			let newDisc = disc.testPosition(this, grid);
			if (newDisc) {
				pendingDiscs.unshift(disc);
				pendingDiscs.push(newDisc);
				discs.push(newDisc);
				grid[newDisc.index] = newDisc;
			}
		}
	}

	// Draw
	for (let disc of discs) {
		disc.display(this);
	}
}
