export class Snake {
	constructor(p5, n) {
		this.body = [];
		this.body.push(p5.createVector(0, 0));
		this.N = n;
	}
	update(p5, input, food) {
		if (this.dead) {
			return;
		}

		let head;

		if (input == p5.LEFT_ARROW) {
			head = p5.createVector(this.body[0].x - 1, this.body[0].y);
		} else if (input == p5.RIGHT_ARROW) {
			head = p5.createVector(this.body[0].x + 1, this.body[0].y);
		} else if (input == p5.UP_ARROW) {
			head = p5.createVector(this.body[0].x, this.body[0].y - 1);
		} else if (input == p5.DOWN_ARROW) {
			head = p5.createVector(this.body[0].x, this.body[0].y + 1);
		}

		if (head) {
			if (
				head.x < 0 ||
				head.x >= this.N ||
				head.y < 0 ||
				head.y >= this.N
			) {
				this.dead = true;
			}

			for (let part of this.body) {
				if (part.equals(head)) {
					this.dead = true;
				}
			}

			if (!this.dead) {
				this.body.unshift(head);
				if (!head.equals(food)) {
					this.body.pop();
				} else {
					return true;
				}
			}
		}
	}
	display(p5) {
		const dx = p5.width / this.N;
		const dy = p5.height / this.N;
		p5.fill(245);
		for (let piece of this.body) {
			p5.rect(piece.x * dx + 1, piece.y * dy + 1, dx - 2, dy - 2);
		}
	}
}
