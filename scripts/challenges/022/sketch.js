let maxIterations = 256;

let isDirty;

let originX;
let originY;

let minVal;
let maxVal;

let juliaA;
let juliaB;

export function setup() {
	this.createCanvas(400, 400);
	this.pixelDensity(1);
	isDirty = true;
	originX = 0;
	originY = 0;
	minVal = -2;
	maxVal = 2;
	juliaA = -0.8;
	juliaB = 0.156;
	update.call(this);
}

export function draw() {
	update.call(this);
}

export function mouseWheel(e) {
	originX = originX + this.map(this.mouseX, 0, this.width, minVal, maxVal);
	originY = originY + this.map(this.mouseY, 0, this.height, minVal, maxVal);

	if (e.delta > 0) {
		minVal *= 2;
		maxVal *= 2;
	} else if (e.delta < 0) {
		minVal /= 2;
		maxVal /= 2;
	}

	maxIterations = Math.max(maxIterations, 32)

	isDirty = true;
}

export function mouseClicked() {
	juliaA = this.map(this.mouseX, 0, this.width, -2, 2);
	juliaB = this.map(this.mouseY, 0, this.height, -2, 2);
	isDirty = true;
}

function update() {
	if (!isDirty) {
		return;
	}
	isDirty = false;

	this.loadPixels();
	for (let x = 0; x < this.width; x++) {
		let a0 = this.map(x, 0, this.width, minVal + originX, maxVal + originX);
		for (let y = 0; y < this.height; y++) {
			let b0 = this.map(y, 0, this.height, minVal + originY, maxVal + originY);

			let a = a0;
			let b = b0;

			let n = 0;

			while (n < maxIterations) {
				let atemp = a * a - b * b + juliaA;
				b = 2 * a * b + juliaB;
				a = atemp;

				if (Math.abs(a + b) > 4) {
					break;
				}

				n++;
			}

			// Set RGBA
			let color = Math.sqrt(this.map(n, 0, maxIterations, 0, 8192));
			if (n === maxIterations) {
				color = 0;
			}
			let index = (x + y * this.width) * 4;
			this.pixels[index + 0] = (color * 3) % 255;
			this.pixels[index + 1] = (color * 5) % 255;
			this.pixels[index + 2] = (color * 7) % 255;
			this.pixels[index + 3] = 255;
		}
	}
	this.updatePixels();
}
