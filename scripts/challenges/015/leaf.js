export class Leaf {
    constructor(p5) {
        this.size = p5.random(10, 30);
        this.growthRate = p5.random(0.1, 0.8);
        this.growth = 0;
    }

    grow() {
        this.growth += this.growthRate;
    }

    display(p5) {
        let s = this.size;
        if (this.growth < 100) {
            s *= this.growth / 100;
        }
        p5.noStroke();
        p5.fill('rgba(140,60,140, 0.5)');
        p5.ellipse(0, 0, s);
    }
}
