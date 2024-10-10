import { Raindrop } from './raindrop.js';

let raindrops = [];
let offset = 0;

export function setup() {
	this.createCanvas(400, 400);
	this.stroke(153, 51, 255);
	for (let i = 0; i < 200; i++) {
		raindrops.push(new Raindrop(this));
	}
}

export function draw() {
	var bg = this.map(this.noise(offset += 0.01), 0, 1, 140, 200);
	this.background(bg);
	var jitter = this.map(this.noise(offset), 0, 1, -2, 2);
	for (let raindrop of raindrops) {
		raindrop.update(this);
		raindrop.display(this, jitter);
	}
}
