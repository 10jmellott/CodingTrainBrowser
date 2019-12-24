export class Segment {
    constructor(p5, x1, y1, x2, y2) {
        this.p1 = p5.createVector(x1, y1);
        this.p2 = p5.createVector(x2, y2);
    }

    display(p5) {
        p5.line(this.p1.x, this.p1.y, this.p2.x, this.p2.y);
    }

    intersect(p5, ray) {
        const x1 = ray.pos.x;
        const y1 = ray.pos.y;
        const x2 = ray.pos.x + ray.dir.x * 0.0001;
        const y2 = ray.pos.y + ray.dir.y * 0.0001;
        const x3 = this.p1.x;
        const y3 = this.p1.y;
        const x4 = this.p2.x;
        const y4 = this.p2.y;

        const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

        if (den === 0) 
            return;
        
        const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;

        if (u < 0 || u > 1)
            return;

        const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;

        if (t < 0)
            return;

        return p5.createVector(x1 + t * (x2 - x1), y1 + t * (y2 - y1));
    }
}
