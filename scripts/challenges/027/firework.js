import Particle from './particle';

export default class Firework {
	constructor(renderer) {
		// Randomly set the particle color
		this.color = [];
		this.color.push(renderer.random() * 255);
		this.color.push(renderer.random() * 255);
		this.color.push(renderer.random() * 255);
		this.color.push(255);

		this.gravity = renderer.createVector(0, 0.1);
		this.particleGravity = renderer.createVector(0, 0.03);
	}

	initialize(renderer) {
		// Randomly set the initial position
		const x = renderer.random() * (renderer.width - 60) + 30;
		const y = renderer.height;
		const position = renderer.createVector(x, y);

		this.shell = new Particle(renderer, this.color, position);
		this.shell.applyVectorForce(renderer.createVector(0, renderer.random() * -3 - 7));

		delete this.fallout;
		this.falloutAge = 0;

		// Imagine all of these on a timer after they're primed
		this.fuseAge = 0;
		this.fuseDelay = renderer.random() * 150;
	}

	update(renderer) {
		if (this.fuseAge < this.fuseDelay) {
			this.fuseAge += 1;
			return;
		}
		if (!this.fallout) {
			this.shell.applyVectorForce(this.gravity);
			this.shell.update(renderer);
			if (this.shell.velocity.y >= -1) {
				this.fallout = [];
				for (let i = 0; i < 75; i++) {
					const p = new Particle(renderer, this.color, this.shell.position.copy());
					p.applyVectorForce(this.shell.velocity);
					p.applyScalarForce(0.5);
					p.applyVectorForce(renderer.createVector(renderer.random() * 4 - 2, renderer.random() * 4 - 2));
					p.lifespan = renderer.random() * 25 + 40;
					this.fallout.push(p);
				}
			}
		} else {
			this.falloutAge += 1;

			this.fallout.forEach(p => {
				p.applyVectorForce(this.particleGravity);
				p.update(renderer);
			});

			const remainingFallout = this.fallout
				.filter(p => this.falloutAge < p.lifespan);
			if (!remainingFallout.length) {
				this.initialize(renderer);
			}
		}
	}

	display(renderer) {
		if (this.fuseAge < this.fuseDelay) {
			return;
		}
		if (this.fallout) {
			renderer.strokeWeight(3);
			this.fallout.forEach(p => p.display(renderer, this.falloutAge));
		} else {
			renderer.strokeWeight(5);
			this.shell.display(renderer);
		}
	}
}
