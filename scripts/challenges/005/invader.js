import { Projectile } from './projectile.js';

export class Invader {
	constructor(p5, x, y, velocity) {
		this.x = x;
		this.y = y;
		this.r = 10;
		this.bullets = [];
		this.nextShot = p5.millis() + p5.random(8000) + 4000;
		this.isDead = false;
		this.velocity = velocity;
	}
	update(p5, ship) {
		const toRemove = [];
		for (let bullet of this.bullets) {
			if (!bullet.update()) {
				toRemove.push(bullet);
			} else {
				if (ship.intersects(p5, bullet)) {
					toRemove.push(bullet);
				}
			}
		}
		this.bullets = this.bullets.filter(b => !toRemove.includes(b));

		if (p5.millis() > this.nextShot) {
			this.shoot(p5);
		}

		this.x += this.velocity;
	}
	shiftDown() {
		this.y += 20;
		this.velocity = -this.velocity;
		this.x += this.velocity;
	}
	shoot(p5) {
		if (this.isDead) {
			return;
		}
		this.bullets.push(new Projectile(this.x, this.y + this.r, 2));
		this.nextShot = p5.millis() + p5.random(8000) + 4000;
	}
	intersects(projectile) {
		if (this.isDead) {
			return;
		}
		const d = Math.sqrt((projectile.x - this.x) * (projectile.x - this.x) +
			(projectile.y - this.y) * (projectile.y - this.y))
		this.isDead = d < this.r;
		return this.isDead;
	}
	display(p5) {
		if (!this.isDead) {
			p5.fill(153, 0, 0);
			p5.ellipse(this.x, this.y, this.r * 2, this.r * 2);
		}

		for (let bullet of this.bullets) {
			bullet.display(p5);
		}
	}
}
