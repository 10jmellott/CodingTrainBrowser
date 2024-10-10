import { Particle } from './particle.js';
import { Segment } from './segment.js';

let shapes = [];
let particle;

let offx = 0;
let offy = 10000;

export function setup() {
	this.createCanvas(400, 400);
	this.strokeWeight(1);

	for (let i = 0; i < 5; i++) {
		shapes.push(new Segment(
			this,
			this.random() * this.width,
			this.random() * this.height,
			this.random() * this.width,
			this.random() * this.height
		));
	}

	shapes.push(new Segment(this, 0, 0, this.width, 0));
	shapes.push(new Segment(this, this.width, 0, this.width, this.height));
	shapes.push(new Segment(this, this.width, this.height, 0, this.height));
	shapes.push(new Segment(this, 0, this.height, 0, 0));

	particle = new Particle(
		this,
		this.noise(offx) * this.width,
		this.noise(offy) * this.height
	);
}

export function draw() {
	this.background(0);

	offx += 0.003;
	offy += 0.003;
	particle.move(this.noise(offx) * this.width, this.noise(offy) * this.height);

	this.stroke(255);
	particle.intersect(this, shapes);

	this.stroke(0);
	this.fill(255);
	particle.display(this);
	for (let shape of shapes) {
		shape.display(this);
	}
}
