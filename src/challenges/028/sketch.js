import Metaball from './metaball';

let metaballs;

export function setup() {
	this.createCanvas(200, 200);
	this.colorMode(this.HSB);
	metaballs = [];
	for (let i = 0; i < 4; i++) {
		metaballs.push(new Metaball(this));
	}
	metaballs.forEach(b => b.scaledRadius = 50 * b.radius);
}

function sumMetaballs() {
	let sum = 0;
	for (let i = 0; i < metaballs.length; i++) {
		sum += metaballs[i].scaledRadius / Math.sqrt((metaballs[i].xdiff * metaballs[i].xdiff) + (metaballs[i].ydiff * metaballs[i].ydiff));
	}
	return sum;
}

export function draw() {
	this.loadPixels();
	for (let y = 0; y < this.height; y++) {
		metaballs.forEach(b => b.ydiff = y - b.position.y);
		for (let x = 0; x < this.width; x++) {
			metaballs.forEach(b => b.xdiff = x - b.position.x);
			let sum = sumMetaballs();
			this.set(x, y, this.color(sum, 255, 255));
		}
	}
	this.updatePixels();

	metaballs.forEach(b => b.update(this));
}
