import { Projectile } from './projectile.js';

export class Ship {
	constructor(p5) {
		this.x = p5.width / 2;
		this.bullets = [];
		this.health = 2;
		this.d = 20;
		this.lastShot = p5.millis();
	}
	move(p5, dir) {
		this.x += dir;
		if (this.x < 10) {
			this.x = 10;
		} else if (this.x > p5.width - 10) {
			this.x = p5.width - 10;
		}
	}
	shoot(p5) {
		if (p5.millis() - this.lastShot > 250) {
			this.bullets.push(new Projectile(this.x, p5.height - 25, -3));
			this.lastShot = p5.millis();
		}
	}
	update(invaders) {
		const toRemove = [];
		for (let bullet of this.bullets) {
			if (!bullet.update()) {
				toRemove.push(bullet);
			} else {
				for (let invader of invaders) {
					if (invader.intersects(bullet)) {
						toRemove.push(bullet);
					}
				}
			}
		}

		this.bullets = this.bullets.filter(b => !toRemove.includes(b));
	}
	intersects(p5, projectile) {
		const minY = p5.height - 25;
		const maxY = p5.height - 5

		const isShot = projectile.x >= (this.x - this.d / 2) && projectile.x <= (this.x + this.d / 2) &&
			projectile.y >= minY && projectile.y <= maxY;

		if (isShot) {
			this.health -= 1;
		}

		return isShot;
	}
	display(p5) {
		if (this.health > 0) {
			if (this.health > 1) {
				p5.fill(102, 255, 102); // HP = 2+ -> Green
			} else {
				p5.fill(255, 255, 102); // HP = 1 -> Yellow
			}

			p5.rect(this.x, p5.height - 15, this.d, this.d);

			for (let bullet of this.bullets) {
				bullet.display(p5);
			}
		}
	}
}
