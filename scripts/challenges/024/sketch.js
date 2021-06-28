import p5 from 'p5';
import Particle from './particle';

const scale = 15;

let t = 0;
let rows, columns;

const particles = [];

export function setup() {
	this.createCanvas(600, 600);

	rows = this.height / scale;
	columns = this.width / scale;

	for (let i = 0; i < 100; i++) {
		const p = new Particle();
		p.initialize(this, this.width, this.height);
		particles.push(p);
	}

	this.background(0);
	this.strokeWeight(1);
	this.noFill();
}

export function draw() {
	// Create the Flow Field
	const flowField = [];
	let yOff = 0;
	for (let y = 0; y <= rows; y++) {
		let xOff = 0;
		for (let x = 0; x <= columns; x++) {
			const noise = this.noise(xOff, yOff, t);
			var vector = p5.Vector.fromAngle(noise * this.TWO_PI * 4);
			vector.normalize();
			flowField.push(vector);
			xOff += 0.05;
		}
		yOff += 0.05;
	}
	t += 0.0005;

	// Update the particles based on the flow field
	for (let i = 0; i < particles.length; i++) {
		// Get the position of the particle int the flow field
		let index = Math.floor(particles[i].position.x / scale) + Math.floor(particles[i].position.y / scale) * columns;
		// Accelerate the particles by the perlin noise field
		particles[i].applyVectorForce(flowField[index]);
		// Decelerate the particles by 90% every frame as if it's resisting motion
		particles[i].applyScalarForce(0.9);

		// Update the position by the velocity & wrap
		particles[i].update(this);

		// Display the particle; as easy as that
		particles[i].display(this);
	}
}
