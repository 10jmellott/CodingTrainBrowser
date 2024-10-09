const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

export default class Metaball {
	constructor(renderer) {
		this.position = renderer.createVector(
			renderer.random(renderer.width),
			renderer.random(renderer.height)
		);
		this.velocity = renderer.createVector(
			renderer.random() * 4 - 2,
			renderer.random() * 4 - 2
		);
		this.radius = renderer.random() * 40 + 20;
	}

	update(renderer) {
		this.position.add(this.velocity);
		if (this.position.x < this.radius || this.position.x > (renderer.width - this.radius)) {
			this.velocity.x *= -1;
			this.position.x = clamp(this.position.x, this.radius, renderer.width - this.radius);
		}
		if (this.position.y < this.radius || this.position.y > (renderer.height - this.radius)) {
			this.velocity.y *= -1;
			this.position.y = clamp(this.position.y, this.radius, renderer.height - this.radius);
		}
	}

	display(renderer) {
		renderer.stroke(0);
		renderer.strokeWeight(5);
		renderer.point(this.position);
	}
}
