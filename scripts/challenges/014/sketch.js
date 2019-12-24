let slider;

export function setup() {
    this.createCanvas(600, 600);

    slider = this.createSlider(0, this.TWO_PI, this.PI / 5.0, this.TWO_PI / 144);
    slider.position(40, 100);
    slider.style('width', '160px');
}

function drawBranches(p5, angle, length, depth = 0) {
    if (depth >= 11) {
        return;
    }

    p5.push();
    p5.line(0, 0, 0, -length);
    p5.translate(0, -length);
    p5.push();
    p5.rotate(angle);
    drawBranches(p5, angle, length / 1.7, depth + 1);
    p5.pop();
    p5.push();
    p5.rotate(-angle);
    drawBranches(p5, angle, length / 1.7, depth + 1);
    p5.pop();
    p5.pop();
}

export function draw() {
    const angle = slider.value();

    this.background(10);
    this.stroke(245);

    this.push();
    this.translate(this.width / 2, this.height);
    drawBranches(this, angle, this.height / 2.7);
    this.pop();
}
