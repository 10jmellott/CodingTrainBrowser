let sentence = 'F';
let len;
let angle;

const rules = [{
	a: new RegExp('F', 'g'),
	b: 'FF[+F+F-F][-F-F-F]'
}, {
	a: new RegExp('F-F', 'g'),
	b: 'F-F[>F][<F]'
}];

export function setup() {
	this.createCanvas(600, 600);
	this.stroke(245, 40);
	this.strokeWeight(3);
	this.strokeCap(this.ROUND);

	angle = this.radians(25);
	len = this.height / 3;

	drawSentence(this);
}

export function mouseClicked() {
	len *= 0.5;
	updateSentence();
	drawSentence(this);
}

function updateSentence() {
	for (let rule of rules) {
		sentence = sentence.replace(rule.a, rule.b);
	}
}

function drawSentence(p5) {
	p5.resetMatrix();

	p5.background(10);

	p5.translate(p5.width / 2, p5.height);

	for (let i = 0; i < sentence.length; i++) {
		const current = sentence.charAt(i);

		if (current == 'F') {
			p5.line(0, 0, 0, -len);
			p5.translate(0, -len);
		} else if (current == '+') {
			p5.rotate(angle);
		} else if (current == '-') {
			p5.rotate(-angle);
		} else if (current == '[') {
			p5.push();
		} else if (current == ']') {
			p5.pop();
		} else if (current == '<') {
			p5.translate(-60, 0);
		} else if (current == '>') {
			p5.translate(60, 0);
		}
	}
}
