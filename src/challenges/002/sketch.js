import { Menger } from './menger.js';

let menger;
let dirty = true;

export function setup() {
	this.createCanvas(400, 400, this.WEBGL);
	this.noStroke();
	this.ortho(-this.width / 1.6, this.width / 1.6, this.height / 1.6, -this.height / 1.6, 0, 5000);
	menger = new Menger(450);
	dirty = true;
}

export function mouseClicked() {
	if (this.mouseX <= 0 || this.mouseY <= 0 || this.mouseX >= this.width || this.mouseY >= this.height) {
		return;
	}
	menger.subdivide();
	dirty = true;
}

export function draw() {
	if (dirty) {
		dirty = false;
		this.background(200);

		this.rotateX(0.45);
		this.rotateY(this.PI / 4);
		this.lights();
		this.directionalLight(178, 255, 102, -1, -0.65, -0.9);
		this.ambientMaterial(170, 170, 170);

		menger.display(this);
	}
}
