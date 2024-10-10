import { CelestialBody } from './celestial-body.js';

function getImage(src) {
	return './009/' + src;
}

let root;

export function setup() {
	this.createCanvas(400, 400, this.WEBGL);
	this.smooth();
	this.noStroke();

	const textures = {
		sun: this.loadImage(getImage('sunmap.jpg')),
		earth: this.loadImage(getImage('earthmap1k.jpg')),
		jupiter: this.loadImage(getImage('jupitermap.jpg')),
		pluto: this.loadImage(getImage('plutomap1k.jpg'))
	};

	root = new CelestialBody(this, 50, 0, 0, 0, textures);
}

export function draw() {
	this.background(30);

	root.update();

	this.lights();
	this.directionalLight(178, 255, 102, -1, -0.65, -0.9);
	this.ambientMaterial(170, 170, 170);
	root.display(this);
}
