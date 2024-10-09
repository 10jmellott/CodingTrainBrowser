import Firework from './firework';

let fireworks;

export function setup() {
	this.createCanvas(600, 600);

	fireworks = [];
	for (let i = 0; i < 20; i++) {
		const f = new Firework(this);
		f.initialize(this);
		fireworks.push(f);
	}
	// Sneaky trick to make the 'residue' vanish
	this.background(5);
	this.noFill();
}

export function draw() {
	this.background(0, 0, 0, 25);

	// Update & draw the fireworks
	for (let i = 0; i < fireworks.length; i++) {
		// Update the position by the velocity & wrap
		fireworks[i].update(this);

		// Display the firework; as easy as that
		fireworks[i].display(this);
	}
}
