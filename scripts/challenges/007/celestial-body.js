export class CelestialBody {
	constructor(p5, r, d, a, av) {
		this.radius = r;
		this.distance = d;
		this.angle = a;
		this.angularVelocity = av;
		this.moons = this.spawnMoons(p5);
	}

	spawnMoons(p5) {
		let moons = [];
		const moonCount = p5.random(
			Math.floor(this.radius / 30),
			Math.floor(this.radius / 20)
		);
		for (let i = 0; i < moonCount; i++) {
			moons.push(new CelestialBody(
				p5,
				p5.random(this.radius / 2, this.radius / 1.5),
				p5.random(this.radius * 2, this.radius * 4),
				p5.random(p5.TWO_PI),
				p5.random(0.01, 0.02))
			);
		}
		return moons;
	}

	update() {
		this.angle += this.angularVelocity;
		for (let moon of this.moons) {
			moon.update();
		}
	}

	display(p5) {
		p5.push();
		p5.rotate(this.angle);
		p5.translate(this.distance, 0);
		p5.ellipse(0, 0, this.radius * 2, this.radius * 2);
		for (let moon of this.moons) {
			moon.display(p5);
		}
		p5.pop();
	}
}
