export default class Particle {
	constructor(renderer, color, position) {
		this.position = position;
		this.velocity = renderer.createVector(0, 0);
		this.color = color;
	}

	applyVectorForce(force) {
		this.velocity.add(force);
	}

	applyScalarForce(magnitude) {
		this.velocity.mult(magnitude);
	}

	update() {
		this.position.add(this.velocity);
	}

	display(renderer, age) {
		if (age && this.lifespan) {
			const agePercentage = age / this.lifespan;
			if (agePercentage > 0.9) {
				this.color[3] = renderer.map(agePercentage, 0.9, 1.0, 200, 0);
			} else {
				this.color[3] = 200;
			}
		} else {
			this.color[3] = 255;
		}
		renderer.stroke(this.color);
		renderer.point(this.position.x, this.position.y);
	}
}
