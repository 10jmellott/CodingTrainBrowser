const XRANGE = 30;
const YRANGE = 20;
const SCALE = 30;
const MIN_HEIGHT = -100;
const MAX_HEIGHT = 250;
const DXOFF = 0.1;
const DYOFF = 0.1;

const STRIDE = XRANGE * 2 + 1;

let distanceX;
let distanceY;
let terrain;

function toIndex(x, y) {
    x = x + XRANGE;
    y = y + YRANGE;
    return y * STRIDE + x;
}

export function setup() {
    distanceX = 0;
    distanceY = 0;
    terrain = [];

    this.createCanvas(600, 600, this.WEBGL);
    this.smooth();

    let yOff = -distanceY;
    for (let y = -YRANGE; y < YRANGE; y++) {
        let xOff = -distanceX;
        for (let x = -XRANGE; x <= XRANGE; x++) {
            terrain.push(this.map(this.noise(xOff, yOff), 0, 1, MIN_HEIGHT, MAX_HEIGHT));
            xOff += DXOFF;
        }
        yOff += DYOFF;
    }
}

export function draw() {
    // Optimization for one-directional movement
    for (let i = terrain.length; i > 0; i--) {
        terrain[i] = terrain[i - STRIDE];
    }
    let xOff = -distanceX;
    for (let j = 0; j < STRIDE; j++) {
        terrain[j] = this.map(this.noise(xOff, -distanceY), 0, 1, MIN_HEIGHT, MAX_HEIGHT);
        xOff += DXOFF;
    }
    distanceY += DYOFF;
    
    this.background(40);
    this.stroke(245);
    this.noFill();
    this.rotateX(this.PI / 3);

    for (let y = -YRANGE; y < YRANGE; y++) {
        this.beginShape(this.TRIANGLE_STRIP);        
        for (let x = -XRANGE; x <= XRANGE; x++) {
            this.vertex(x * SCALE, y * SCALE, terrain[toIndex(x, y)]);
            this.vertex(x * SCALE, (y + 1) * SCALE, terrain[toIndex(x, y + 1)]);
        }
        this.endShape();
    }
}
