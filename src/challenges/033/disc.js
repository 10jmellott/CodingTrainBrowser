import p5 from 'p5';
import { width, height, cols, k, r, w } from './constants';

var center = [width / 2, height / 2];

export default class Disc {
	constructor(position) {
		this.position = position;

		this.column = Math.floor(position.x / w);
		this.row = Math.floor(position.y / w);
		this.index = this.column + this.row * cols;
	}

	testPosition(renderer, grid) {
		let attempt = 1;
		while (attempt < k) {
			attempt++;

			const position = p5.Vector.random2D();
			position.setMag(Math.random() * r + r); // r to 2r
			position.add(this.position);

			if (position.x < 0 ||
				position.x > renderer.width ||
				position.y < 0 ||
				position.y > renderer.width) {
				continue;
			}

			const testDisc = new Disc(position);
			if (grid[testDisc.index]) {
				continue;
			}

			let success = true;
			for (let j = testDisc.row - 1; j <= testDisc.row + 1; j++) {
				for (let i = testDisc.column - 1; i <= testDisc.column + 1; i++) {
					const tIndex = i + j * cols;
					if (tIndex < 0 || tIndex > grid.length) {
						continue;
					}
					if (grid[tIndex] && grid[tIndex].position.dist(position) < r) {
						success = false;
						break;
					}
				}
				if (!success) {
					break;
				}
			}

			if (success) {
				testDisc.dist = testDisc.position.dist(renderer.createVector(center[0], center[1]));
				return testDisc;
			}
		}
		return null;
	}

	display(renderer) {
		renderer.stroke(this.dist % 360, 100, 100, 1.0);
		renderer.strokeWeight(6);
		renderer.point(this.position);
	}
}
