const POINTS = 360;
const R = 25;

let offset;
let shapes;

const rule = {
	a: new RegExp('AB', 'g'),
	b: 'ABBA'
};

export function setup() {
	this.createCanvas(600, 600);
	this.noFill();
	this.strokeWeight(3);
	this.strokeCap(this.SQUARE);

	offset = 0;
	shapes = [];

	let shape;
	let sentence = 'AB';
	for (let c = 1; c < 12; c++) {
		let r = c * R;
		let currentConfig;
		for (let i = 0; i < POINTS; i++) {
			let theta = this.map(i, 0, POINTS - 1, 0, this.TWO_PI);
			let x = r * Math.cos(theta);
			let y = r * Math.sin(theta);
			let newConfig = sentence[Math.floor(i / POINTS * sentence.length)];
			if (!currentConfig || newConfig !== currentConfig) {
				if (currentConfig) {
					shape.points.push({ x, y, key: newConfig });
					shapes.push(shape);
				}
				currentConfig = newConfig;
				shape = {
					key: newConfig,
					points: [],
					level: c
				};
			}
			shape.points.push({ x, y });
		}
		if (shape && shape.points.length) {
			shapes.push(shape);
		}
		sentence = sentence.replace(rule.a, rule.b);
	}
}

export function draw() {
	this.background(10);
	this.translate(this.width / 2, this.height / 2);

	offset += 0.02;

	for (let shape of shapes) {
		switch (shape.key) {
			case 'A':
				this.stroke(0);
				break;
			case 'B':
				this.stroke(200);
				break;
		}
		this.push();
		this.rotate(offset * (1.0 / shape.level) * (shape.level % 2 == 0 ? 1 : -1));
		this.beginShape();
		for (let point of shape.points) {
			this.vertex(point.x, point.y);
		}
		this.endShape();
		this.pop();
	}
}
