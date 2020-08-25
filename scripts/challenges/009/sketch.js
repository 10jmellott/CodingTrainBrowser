import { CelestialBody } from './celestial-body.js';

let root;

export function setup() {
	this.createCanvas(700, 700, this.WEBGL);
	this.smooth();
	this.noStroke();

	const textures = {
		sun: this.loadImage('/CodingTrainBrowser/assets/sunmap.jpg'),
		earth: this.loadImage('/CodingTrainBrowser/assets/earthmap1k.jpg'),
		jupiter: this.loadImage('/CodingTrainBrowser/assets/jupitermap.jpg'),
		pluto: this.loadImage('/CodingTrainBrowser/assets/plutomap1k.jpg')
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
