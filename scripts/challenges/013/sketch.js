const dA = 1.0;  // default 1.0
const dB = 0.5;  // default 0.5
const f = 0.055; // default .055
const k = 0.062; // default .062

let cells;
let next;

export function setup() {
    this.createCanvas(400, 400);
    this.pixelDensity(1);

    cells = [];
    next = [];
    for (let j = 0; j < this.height; j++) {
        const row = [];
        const nextRow = [];        
        for (let i = 0; i < this.width; i++) {
            row.push({
                a: 1,
                b: 0
            });
            nextRow.push({
                a: row[i].a,
                b: row[i].b
            });
        }
        cells.push(row);
        next.push(nextRow);
    }
}

export function draw() {
    for (let i = 0; i < 10; i++) {
        for (let y = 1; y < this.height - 1; y++) {
            for (let x = 1; x < this.width - 1; x++) {
                next[x][y].a = fA(x, y);
                next[x][y].b = fB(x, y);
            }
        }
        swap();
    }
    

    this.loadPixels();
    for (let y = 0; y < this.height; y++) {
        for (let x = 0; x < this.width; x++) {
            const c = (1 - cells[x][y].b) * 255;
            const index = (x + y * this.width) * 4;
            this.pixels[index + 0] = c;
            this.pixels[index + 1] = c;
            this.pixels[index + 2] = c;
            this.pixels[index + 3] = 255;
        }
    }
    this.updatePixels();
}

export function mouseClicked() {
    let x = Math.floor(this.mouseX);
    let y = Math.floor(this.mouseY);

    let minX = Math.max(x - 5, 1);
    let maxX = Math.min(x + 5, this.width - 1);

    let minY = Math.max(y - 5, 1);
    let maxY = Math.min(y + 5, this.height - 1);

    for (let y = minY; y < maxY; y++) {
        for (let x = minX; x < maxX; x++) {
            cells[x][y].b = 1;
        }
    }
}

function fA(x, y) {
    const cell = cells[x][y];
    return cell.a + (dA * laplaceA(x, y) - cell.a * cell.b * cell.b + f * (1 - cell.a));
}

function fB(x, y) {
    const cell = cells[x][y];
    return cell.b + (dB * laplaceB(x, y) + cell.a * cell.b * cell.b - (k + f) * cell.b);
}

function laplaceA(x, y) {
    let sumA = 0;
    sumA += cells[x - 1][y - 1].a * 0.05;
    sumA += cells[x - 1][y].a * 0.2;
    sumA += cells[x - 1][y + 1].a * 0.05;
    sumA += cells[x][y - 1].a * 0.2;
    sumA += cells[x][y].a * -1;
    sumA += cells[x][y + 1].a * 0.2;
    sumA += cells[x + 1][y - 1].a * 0.05;
    sumA += cells[x + 1][y].a * 0.2;
    sumA += cells[x + 1][y + 1].a * 0.05;
    return sumA;
}

function laplaceB(x, y) {
    let sumB = 0;
    sumB += cells[x - 1][y - 1].b * 0.05;
    sumB += cells[x - 1][y].b * 0.2;
    sumB += cells[x - 1][y + 1].b * 0.05;
    sumB += cells[x][y - 1].b * 0.2;
    sumB += cells[x][y].b * -1;
    sumB += cells[x][y + 1].b * 0.2;
    sumB += cells[x + 1][y - 1].b * 0.05;
    sumB += cells[x + 1][y].b * 0.2;
    sumB += cells[x + 1][y + 1].b * 0.05;
    return sumB;
}

function swap() {
    const temp = cells;
    cells = next;
    next = temp;
}
