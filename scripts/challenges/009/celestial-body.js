export class CelestialBody {
	constructor(p5, r, d, a, av, textures) {
		this.radius = r;
		if (d !== 0) {
			this.distance = p5.createVector(
				p5.random(p5.TWO_PI),
				p5.random(p5.TWO_PI),
				p5.random(p5.TWO_PI)
			);
			this.distance.normalize();
			this.distance.mult(d);
		}
		this.angle = a;
		this.angularVelocity = av;
		this.moons = this.spawnMoons(p5, textures);

		if (this.radius >= 50) {
			this.skin = textures.sun;
		} else if (this.radius >= 25) {
			this.skin = textures.jupiter;
		} else if (this.radius >= 10) {
			this.skin = textures.earth;
		} else {
			this.skin = textures.pluto;
		}
	}

	spawnMoons(p5, textures) {
		let moons = [];
		const moonCount = p5.random(
			Math.floor(this.radius / 20),
			Math.floor(this.radius / 10)
		);
		for (let i = 0; i < moonCount; i++) {
			moons.push(new CelestialBody(
				p5,
				p5.random(this.radius / 3, this.radius / 1.5), // radius
				p5.random(this.radius * 3, this.radius * 6), // distance
				p5.random(p5.TWO_PI), // Starting Angle
				p5.random(-0.04, 0.04), // Angular Velocity
				textures
			));
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
		if (this.distance) {
			const p = this.distance.cross(p5.createVector(1, 1, 1));
			p5.rotate(this.angle, p);
			p5.translate(this.distance);
		}
		p5.texture(this.skin);
		p5.sphere(this.radius * 2);
		for (let moon of this.moons) {
			moon.display(p5);
		}
		p5.pop();
	}
}
