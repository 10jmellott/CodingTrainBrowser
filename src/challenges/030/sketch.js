const c = 8;

let t;
let n;
let position;

export function setup() {
	this.createCanvas(400, 400);
	this.colorMode(this.HSB);
	this.background(0);
	n = 2000;
	position = null;
	t = this.random() - 0.5;
}

export function draw() {
	const phi = n * (137.5 + t);
	const r = c * Math.sqrt(n);
	const x = r * Math.cos(this.radians(phi));
	const y = r * Math.sin(this.radians(phi));

	this.push();
	this.translate(this.width / 2, this.height / 2);
	this.rotate(t);

	let newPosition = [x, y];
	position = position ?? newPosition;

	this.stroke(phi % 360, 100, 100, 0.1);
	this.line(position[0], position[1], newPosition[0], newPosition[1]);

	this.noStroke();
	this.fill(phi % 360, 100, 100, 0.5);
	this.ellipse(newPosition[0], newPosition[1], 8, 8);

	position = newPosition;

	this.pop();

	n--;
	if (n === 0) {
		n = 2000;
		position = null;
		t = this.random() - 0.5;
		this.background(0);
	}
}
