let slider;

export function setup() {
	this.createCanvas(400, 400);
	this.strokeWeight(4);
	this.stroke(0);
	this.noFill();

	slider = this.createSlider(0, 10, 2, 0.01);
	slider.position(400, 100);
	slider.style('width', '160px');
}

export function draw() {
	this.background(220);
	this.translate(this.width / 2, this.height / 2);

	const a = 180;
	const b = 160;
	const n = slider.value();

	if (n > 0) {
		this.beginShape();
		for (let theta = 0; theta < this.TWO_PI; theta += 0.1) {
			let x = Math.pow(Math.abs(Math.cos(theta)), 2 / n) * a * Math.sign(Math.cos(theta));
			let y = Math.pow(Math.abs(Math.sin(theta)), 2 / n) * b * Math.sign(Math.sin(theta));
			this.vertex(x, y);
		}
		this.endShape(this.CLOSE);
	}
}
