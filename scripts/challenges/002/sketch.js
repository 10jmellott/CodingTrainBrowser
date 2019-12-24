import { Menger } from './menger.js';

let menger;
let dirty = true;

export function setup() {
    this.createCanvas(600, 600, this.WEBGL);
    this.noStroke();
    this.ortho(-this.width / 1.6, this.width / 1.6, this.height / 1.6, -this.height / 1.6, 0, 5000);
    menger = new Menger(450);
}

export function mouseClicked() {
    menger.subdivide();
    dirty = true;
}

export function draw() {
    if (dirty) {
        dirty = false;
        this.background(200);

        this.rotateX(0.45);
        this.rotateY(this.PI / 4);
        this.lights();
        this.directionalLight(178, 255, 102, -1, -0.65, -0.9);
        this.ambientMaterial(170, 170, 170);

        menger.display(this);
    }
}
