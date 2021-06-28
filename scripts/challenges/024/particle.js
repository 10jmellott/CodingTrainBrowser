
export default class Particle {
	constructor() {
	}

	initialize(renderer) {
		// Randomly set the initial position
		const x = renderer.random() * renderer.width;
		const y = renderer.random() * renderer.height
		this.prevPosition = renderer.createVector(x, y);
		this.position = renderer.createVector(x, y);
		this.velocity = renderer.createVector(0, 0);

		// Randomly set the particle color
		this.color = [];
		this.color.push(renderer.random() * 255);
		this.color.push(renderer.random() * 255);
		this.color.push(renderer.random() * 255);
		this.color.push(0);

		// Randomly set the particle lifetime with a duration
		this.age = 0;
		this.lifetime = renderer.random() * 1000 + 500;
	}

	applyVectorForce(force) {
		this.velocity.add(force);
	}

	applyScalarForce(magnitude) {
		this.velocity.mult(magnitude);
	}

	update(renderer) {
		this.age = this.age + 1;

		// Prevent particle 'stagnation' by resetting
		//   the particles randomly based on age
		if (this.age > this.lifetime) {
			this.initialize(renderer);
		}

		// Fade the particles on and off based on age for effect
		const agePercentage = this.age / this.lifetime;
		if (agePercentage < 0.1) {
			this.color[3] = renderer.map(agePercentage, 0, 0.1, 0, 20);
		} else if (agePercentage > 0.9) {
			this.color[3] = renderer.map(agePercentage, 0.9, 1.0, 20, 0);
		} else {
			this.color[3] = 20;
		}

		//
		this.updatePreviousPosition();
		this.position.add(this.velocity);

		// Wrap the particles around the edge of the screen
		if (this.position.x < 0) {
			this.position.x = renderer.width;
			this.updatePreviousPosition();
		}
		if (this.position.x > renderer.width) {
			this.position.x = 0;
			this.updatePreviousPosition();
		}
		if (this.position.y < 0) {
			this.position.y = renderer.height;
			this.updatePreviousPosition();
		}
		if (this.position.y > renderer.height) {
			this.position.y = 0;
			this.updatePreviousPosition();
		}
	}

	updatePreviousPosition() {
		this.prevPosition.x = this.position.x;
		this.prevPosition.y = this.position.y;
	}

	display(renderer) {
		renderer.stroke(this.color);
		renderer.line(this.position.x, this.position.y, this.prevPosition.x, this.prevPosition.y);
	}
}
