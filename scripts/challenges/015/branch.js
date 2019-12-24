import { Leaf } from './leaf.js';

export class Branch {
    constructor(p5, length, angle) {
        this.length = length;
        this.angle = angle;
        this.growth = 0;
        this.growthRate = p5.random(0.1, 0.8);
    }

    grow(p5) {
        this.growth += this.growthRate;

        if (this.children) {
            this.children[0].grow(p5);
            this.children[1].grow(p5);
        }

        if (this.leaf) {
            this.leaf.grow();
        }

        if (this.growth > 100 && this.length > 10 && !this.children) {
            this.children = [
                new Branch(
                    p5,
                    this.length / p5.random(1.4, 2),
                    p5.random(0.2, 1.5)
                ),
                new Branch(
                    p5,
                    this.length / p5.random(1.4, 2),
                    p5.random(0.2, 1.5)
                ),
            ];
        } else if (this.growth > 100 && this.length < 10 && !this.leaf) {
            this.leaf = new Leaf(p5);
        }
    }

    display(p5) {
        let l = this.length;
        if (this.growth < 100) {
            l *= this.growth / 100;
        }

        if (this.growth < 160) {
            p5.stroke(20, Math.floor(this.growth) + 60, 20);
        } else {
            p5.stroke(20, 225, 20);
        }

        p5.line(0, 0, 0, -l);
        
        p5.push();
        p5.translate(0, -l);

        if (this.children) {
            p5.push();
            p5.rotate(this.angle);
            this.children[0].display(p5);
            p5.pop();

            p5.push();
            p5.rotate(-this.angle);
            this.children[1].display(p5);
            p5.pop();            
        }

        if (this.leaf) {
            this.leaf.display(p5);
        }

        p5.pop();
    }
}
