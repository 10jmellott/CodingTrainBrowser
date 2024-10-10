import { CelestialBody } from './celestial-body.js';

let root;

export function setup() {
	this.createCanvas(400, 400, this.WEBGL);
	this.smooth();
	this.noStroke();

	root = new CelestialBody(this, 50, 0, 0, 0);
}

export function draw() {
	this.background(30);

	root.update(this);

	this.lights();
	this.directionalLight(178, 255, 102, -1, -0.65, -0.9);
	this.ambientMaterial(170, 170, 170);
	root.display(this);
}
