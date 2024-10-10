import { Branch } from './branch.js';

let root;

export function setup() {
	this.createCanvas(400, 400);

	root = new Branch(this, this.height / 2.7, this.PI / 5.0);

	this.strokeWeight(5);
	this.strokeCap(this.ROUND);
	this.ellipseMode(this.CENTER);
}

export function draw() {
	root.grow(this);

	this.background(10);

	this.push();
	this.translate(this.width / 2, this.height);
	root.display(this);
	this.pop();
}
