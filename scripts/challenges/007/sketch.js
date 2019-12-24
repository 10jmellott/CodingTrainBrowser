import { CelestialBody } from './celestial-body.js';

let root;

export function setup() {
    this.createCanvas(700, 700);
    this.ellipseMode(this.CENTER);
    this.fill(255, 80);

    root = new CelestialBody(this, 70, 0, 0, 0);

    this.background(30);
}

export function draw() {
    // this.background(30);
    this.translate(this.width / 2, this.height / 2);
    root.update();
    root.display(this);
}
