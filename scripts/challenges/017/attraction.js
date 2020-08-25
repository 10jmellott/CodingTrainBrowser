export class Attraction {
	constructor(p5) {
		// Trees are a bit more circular, so this modifies from selecting
		//   a random point to instead picking a point within a circle
		const functionalHeight = p5.height / 2 - 60;
		const r = p5.map(p5.random(), 0, 1, 30, functionalHeight);
		const theta = p5.map(p5.random(), 0, 1, 2 * -p5.PI, 2 * p5.PI);

		this.x = r * Math.cos(theta) + p5.width / 2;
		this.y = r * Math.sin(theta) + functionalHeight;
	}
	distance(other) {
		if (other) {
			const dx = other.x - this.x;
			const dy = other.y - this.y;
			return Math.sqrt(dx * dx + dy * dy);
		} else {
			return 0;
		}
	}
	draw(p5, size) {
		if (size) {
			p5.fill(92, 202, 58, 80);
		} else {
			p5.fill(230);
		}
		p5.noStroke();
		const r = size || 5;
		p5.ellipse(this.x, this.y, r, r);
	}
}
