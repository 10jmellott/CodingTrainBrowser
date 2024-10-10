import { Attraction } from './attraction.js';
import { Colony } from './colony.js';

let attractions = [];
let homeColony;

export function setup() {
	this.createCanvas(400, 400);
	this.ellipseMode(this.RADIUS);
	this.noStroke();
	this.strokeWeight(4);

	for (let i = 0; i < 300; i++) {
		attractions.push(new Attraction(this));
	}

	homeColony = new Colony(new Attraction(this), 13, true);
	homeColony.attraction.x = this.width / 2;
	homeColony.attraction.y = this.height - 5;
	homeColony.attraction.size = 1;
}

export function draw() {
	this.background(10);

	attractions = homeColony.update(attractions);

	for (let attraction of attractions) {
		attraction.draw(this);
	}

	homeColony.draw(this);
}
