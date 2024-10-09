import { Star } from "./star.js";

let stars;

export function setup() {
	this.createCanvas(600, 600);
	this.strokeWeight(2);
	stars = [];
	for (let i = 0; i < 400; i++) {
		stars.push(new Star(this));
	}
}

export function draw() {
	this.background(0);
	this.translate(this.width / 2, this.height / 2);
	for (let star of stars) {
		star.update(this);
		star.display(this);
	}
}
