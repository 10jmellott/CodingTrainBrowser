let offset = 0;
const BOX_SIZE = 20;

export function setup() {
    this.createCanvas(400, 400, this.WEBGL);
    this.smooth();

    this.ortho(-this.width / 1.6, this.width / 1.6, this.height / 1.6, -this.height / 1.6, 0, 5000);
    this.noStroke();
}

export function draw() {
    this.background(220);
    this.rotateX(0.45);
    this.rotateY(this.PI / 4);

    this.lights();
    this.directionalLight(178, 255, 102, -1, -0.65, -0.9);
    this.ambientMaterial(170, 170, 170);

    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            const dist = (i * i + j * j) / 13;
            const h = this.map(this.sin(dist + offset), -1, 1, this.height / 4, this.height / 1.7);
            if (i == 0 & j == 0) {
                this.push();
                this.box(BOX_SIZE, h, BOX_SIZE);
                this.pop();
            } else {
                this.push();
                this.translate(i * BOX_SIZE, 0, j * BOX_SIZE);
                this.box(BOX_SIZE, h, BOX_SIZE);
                this.pop();

                this.push();
                this.translate(-i * BOX_SIZE, 0, j * BOX_SIZE);
                this.box(BOX_SIZE, h, BOX_SIZE);
                this.pop();

                this.push();
                this.translate(i * BOX_SIZE, 0, -j * BOX_SIZE);
                this.box(BOX_SIZE, h, BOX_SIZE);
                this.pop();

                this.push();
                this.translate(-i * BOX_SIZE, 0, -j * BOX_SIZE);
                this.box(BOX_SIZE, h, BOX_SIZE);
                this.pop();
            }
        }  
    }

    offset -= 0.05;
}
