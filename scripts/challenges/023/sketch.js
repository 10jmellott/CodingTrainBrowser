let offset = 0;

export function setup() {
	this.createCanvas(400, 400);
	this.strokeWeight(2);
	this.stroke(10, 50);
	this.noFill();
}

export function draw() {
	this.background(220);
	this.translate(this.width / 2, this.height / 2);

	offset += 0.005;

	for (let a = 1; a < 3; a++) {
		let a1 = 1.0 / a;
		for (let b = 1; b < 3; b++) {
			let b1 = 1.0 / b;
			let xOff = 100 * Math.cos(offset + a) * Math.cos(offset * 1.1 + b) - 50;
			for (let m = 1; m < 5; m++) {
				let m4 = (m / 4.0);
				for (let n1 = 1; n1 < 3; n1++) {
					for (let n2 = 1; n2 < 4; n2++) {
						for (let n3 = 1; n3 < 4; n3++) {
							let yOff = 100 * Math.sin(offset + n1) * Math.sin(offset + n2) * Math.sin(offset + n3) - 50;
							this.beginShape();
							for (let theta = 0; theta < this.TWO_PI; theta += 0.1) {
								let r = 1 / (n1 * Math.sqrt(Math.pow(Math.abs(a1 * Math.cos(m4 * theta)), n2) +
									Math.pow(Math.abs(b1 * Math.sin(m4 * theta)), n3)));
								let x = r * Math.cos(theta) * 50 + xOff;
								let y = r * Math.sin(theta) * 50 + yOff;
								this.vertex(x, y);
							}
							this.endShape(this.CLOSE);
						}
					}
				}
			}
		}
	}
}
