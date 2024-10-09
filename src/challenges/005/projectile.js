export class Projectile {
	constructor(x, y, velocity) {
		this.x = x;
		this.y = y;
		this.velocity = velocity;
	}
	update() {
		this.y = this.y + this.velocity;
		if (this.y < -10) {
			return false;
		}
		return true;
	}
	display(p5) {
		if (this.velocity < 0) {
			p5.fill(127, 54, 255);
		} else {
			p5.fill(255, 54, 127);
		}
		p5.rect(this.x, this.y, 5, 10);
	}
}
