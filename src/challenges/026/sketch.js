export function setup() {
	this.createCanvas(400, 400, this.WEBGL);
	this.smooth();
	this.fill(127);
	this.stroke(255);
}

const MAX_POINTS = 50;

export function draw() {
	this.background(0);
	this.orbitControl();

	this.rotateX(1.1);
	this.rotateY(0.6);

	const scale = 150;

	let arr = [];
	for (let i = 0; i <= MAX_POINTS; i++) {
		let lat = this.map(i, 0, MAX_POINTS, -this.HALF_PI, this.HALF_PI);
		let r1 = supershape(lat, 1, 1, 8, 60, 100, 30);
		let subarr = [];
		for (let j = 0; j <= MAX_POINTS; j++) {
			let lon = this.map(j, 0, MAX_POINTS, -this.PI, this.PI);
			let r2 = supershape(lon, 1, 1, 2, 10, 10, 10);
			let x = scale * r1 * r2 * Math.cos(lon) * Math.cos(lat);
			let y = scale * r1 * r2 * Math.sin(lon) * Math.cos(lat);
			let z = scale * r2 * Math.sin(lat);
			subarr.push({ x, y, z });
		}
		arr.push(subarr);
	}

	for (let i = 0; i < MAX_POINTS; i++) {
		this.beginShape(this.TRIANGLE_STRIP);
		for (let j = 0; j <= MAX_POINTS; j++) {
			let v1 = arr[i][j];
			let v2 = arr[i + 1][j];
			this.vertex(v1.x, v1.y, v1.z);
			this.vertex(v2.x, v2.y, v2.z);
		}
		this.endShape();
	}


}

function supershape(theta, a, b, m, n1, n2, n3) {
	let t1 = Math.abs((1.0 / a) * Math.cos(m * theta / 4.0));
	t1 = Math.pow(t1, n2);
	let t2 = Math.abs((1.0 / b) * Math.sin(m * theta / 4.0));
	t2 = Math.pow(t2, n3);
	let t3 = t1 + t2;
	let r = Math.pow(t3, - 1.0 / n1);
	return r;
}
