export class Cell {
    constructor(p5, pos, r) {
        this.pos = pos;
        this.r = r;
        this.offset = p5.random(10000);
    }
    update(p5, offset) {
        var dx = p5.map(p5.noise(offset + this.offset), 0, 1, -1, 1);
        var dy = p5.map(p5.noise(offset + this.offset + 10000), 0, 1, -1, 1);
        const vel = p5.createVector(dx, dy);
        vel.mult(3);
        this.pos.add(vel);

        if (this.pos.x < this.r) {
            this.pos.x = this.r;
        } else if (this.pos.x > p5.width - this.r) {
            this.pos.x = p5.width - this.r;
        }

        if (this.pos.y < this.r) {
            this.pos.y = this.r;
        } else if (this.pos.y > p5.height - this.r) {
            this.pos.y = p5.height - this.r;
        }
    }
    intersects(mx, my) {
        if (this.r <= 1) {
            return false;
        }

        return Math.sqrt(
            (mx - this.pos.x) * (mx - this.pos.x) + 
            (my - this.pos.y) * (my - this.pos.y)) 
            < this.r;
    }
    split(p5) {
        if (this.r <= 1) {
            return;
        }
        const split = p5.createVector(p5.random(-1, 1), p5.random(-1, 1));
        split.normalize();
        split.mult(this.r / 2);
        return [
            new Cell(
                p5, 
                p5.createVector(this.pos.x - split.x, this.pos.y - split.y), 
                this.r / 1.2
            ),
            new Cell(
                p5, 
                p5.createVector(this.pos.x + split.x, this.pos.y + split.y), 
                this.r / 1.2
            )
        ]
    }
    display(p5) {
        p5.ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
    }
}
