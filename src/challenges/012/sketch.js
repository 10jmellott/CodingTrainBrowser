const MAX_POINTS = 800;

let lorenzConstants;
let nx;
let points;
let colors;

export function setup() {
	nx = 0;
	points = [];
	colors = [];

	this.createCanvas(400, 400, this.WEBGL);
	this.smooth();

	points.push(this.createVector(
		this.random(),
		this.random(),
		this.random())
	);
	lorenzConstants = this.createVector(
		this.random() * 10 + 10,
		this.random() * 15 + 15,
		this.random() * 3
	);

	this.strokeWeight(3);
	this.noFill();

	for (let i = 0; i < MAX_POINTS; i++) {
		const r = Math.floor(this.map(this.noise(i / 20), 0, 1, 100, 255));
		const g = Math.floor(this.map(this.noise(100 + i / 20), 0, 1, 100, 255));
		const b = Math.floor(this.map(this.noise(200 + i / 20), 0, 1, 100, 255));
		const a = 200 * i / MAX_POINTS;
		colors.push(this.color(r, g, b, a));
	}
}

export function draw() {
	const pos = points[points.length - 1].copy();
	const dp = this.createVector(
		lorenzConstants.x * (pos.y - pos.x),
		pos.x * (lorenzConstants.y - pos.z) - pos.y,
		pos.x * pos.y - lorenzConstants.z * pos.z
	);
	dp.mult(0.01); // dt
	pos.add(dp);
	points.push(pos);
	nx += 0.01;

	if (points.length > MAX_POINTS) {
		points.shift();
	}

	this.rotateY(nx);
	this.scale(4);
	this.background(0);

	for (let i = 0; i < points.length - 1; i++) {
		const p1 = points[i];
		const p2 = points[i + 1];
		this.stroke(colors[i]);
		this.line(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z);
	}
}
