import { Snake } from './snake.js';

export class Game {
	constructor(p5, n) {
		this.N = n;
		this.snake = new Snake(p5, n);
		this.setNewFood(p5);
	}
	update(p5, input) {
		if (this.snake.update(p5, input, this.food)) {
			this.setNewFood(p5);
		} else if (this.snake.dead) {
			this.snake = new Snake(p5, this.N);
			this.setNewFood(p5);
			return true;
		}
	}
	isFoodValid() {
		for (let piece of this.snake.body) {
			if (piece.equals(this.food)) {
				return false;
			}
		}
		return true;
	}
	setNewFood(p5) {
		this.food = p5.createVector(
			Math.floor(p5.random(0, this.N)),
			Math.floor(p5.random(0, this.N))
		);
		while (!this.isFoodValid()) {
			this.food = p5.createVector(
				Math.floor(p5.random(0, this.N)),
				Math.floor(p5.random(0, this.N))
			);
		}
	}
	display(p5) {
		p5.noFill();

		const dx = p5.width / this.N;
		const dy = p5.height / this.N;
		for (let i = 0; i < p5.width; i += dx) {
			for (let j = 0; j < p5.height; j += dy) {
				p5.rect(i + 2, j + 2, dx - 4, dy - 4);
			}
		}

		p5.fill(245, 108, 108);
		p5.rect(this.food.x * dx + 1, this.food.y * dy + 1, dx - 2, dy - 2);

		this.snake.display(p5);
	}
}
