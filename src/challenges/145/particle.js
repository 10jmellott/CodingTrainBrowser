import { Vector } from 'p5';
import { Ray } from './ray.js';

export class Particle {
	constructor(p5, x, y) {
		this.pos = p5.createVector(x, y);
		this.rays = [];
		for (let a = 0; a < 360; a += 3) {
			this.rays.push(new Ray(this.pos, Vector.fromAngle(p5.radians(a))));
		}
	}
	move(x, y) {
		this.pos.set(x, y);
	}
	display(p5) {
		p5.ellipse(this.pos.x, this.pos.y, 10, 10);
	}
	intersect(p5, shapes) {
		for (let ray of this.rays) {
			let nearestDist = Infinity;
			let nearest;

			for (let shape of shapes) {
				const pt = shape.intersect(p5, ray);
				if (pt) {
					const dist = this.pos.dist(pt);
					if (dist < nearestDist) {
						nearestDist = dist;
						nearest = pt;
					}
				}
			}

			if (nearest) {
				p5.line(this.pos.x, this.pos.y, nearest.x, nearest.y);
			}
		}
	}
}
