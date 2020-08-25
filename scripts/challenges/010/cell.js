import { isValid, toIndex } from './helpers.js';

export class Cell {
	constructor(i, j) {
		this.i = i;
		this.j = j;
		this.hasTop = this.hasBottom = this.hasLeft = this.hasRight = true;
		this.visited = false;
	}

	checkNeighbor(i, j, cells) {
		return isValid(i, j) && !cells[toIndex(i, j)].visited;
	}

	checkNeighbors(cells) {
		let neighbors = [];

		if (this.checkNeighbor(this.i, this.j - 1, cells)) {
			neighbors.push(toIndex(this.i, this.j - 1));
		}
		if (this.checkNeighbor(this.i, this.j + 1, cells)) {
			neighbors.push(toIndex(this.i, this.j + 1));
		}
		if (this.checkNeighbor(this.i - 1, this.j, cells)) {
			neighbors.push(toIndex(this.i - 1, this.j));
		}
		if (this.checkNeighbor(this.i + 1, this.j, cells)) {
			neighbors.push(toIndex(this.i + 1, this.j));
		}

		return neighbors;
	}

	walkTo(cell) {
		if (cell.j < this.j) {
			this.hasTop = false;
		} else if (cell.j > this.j) {
			this.hasBottom = false;
		} else if (cell.i < this.i) {
			this.hasLeft = false;
		} else if (cell.i > this.i) {
			this.hasRight = false;
		}
	}

	display(p5, w, h) {
		if (this.visited) {
			p5.fill(153, 51, 255);
		} else {
			p5.fill(30);
		}

		p5.noStroke();
		p5.rect(this.i * w, this.j * h, w, h);

		p5.strokeWeight(2);
		p5.stroke(200);
		if (this.hasTop)
			p5.line(this.i * w, this.j * h, (this.i + 1) * w, this.j * h); // Top
		if (this.hasBottom)
			p5.line(this.i * w, (this.j + 1) * h, (this.i + 1) * w, (this.j + 1) * h); // Bottom
		if (this.hasLeft)
			p5.line(this.i * w, this.j * h, this.i * w, (this.j + 1) * h); // Left
		if (this.hasRight)
			p5.line((this.i + 1) * w, this.j * h, (this.i + 1) * w, (this.j + 1) * h); // Right
	}
}
