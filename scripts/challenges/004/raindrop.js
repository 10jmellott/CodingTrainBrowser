export class Raindrop {
    constructor(p5) {
        this.reset(p5);
        // This just improves the starting behavior
        this.y = p5.random() * -p5.height;
    }
    reset(p5) {
        this.x = p5.random(p5.width);
        this.h = p5.random(20, 60);
        this.z = p5.random(0.1, 1);
        this.y = -this.h;
    }
    update(p5) {
        this.y += 6 / this.z;
        if (this.y > p5.height) {
            this.reset(p5);
        }       
    }
    display(p5, jitter) {
        p5.strokeWeight(3 / this.z);
        p5.line(this.x, this.y, this.x + jitter / this.z, this.y + this.h);
    }
}
