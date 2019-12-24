export class Star {
    constructor(p5) {
        this.x = p5.random(-p5.width / 2, p5.width / 2);
        this.y = p5.random(-p5.height / 2, p5.height / 2);
        this.z = p5.random();
        this.pz = this.z;
    }
    update(p5) {
        this.pz = this.z;
        this.z -= 0.04;
        if (this.z <= 0) {
            this.x = p5.random(-p5.width / 2, p5.width / 2);
            this.y = p5.random(-p5.height / 2, p5.height / 2);
            this.z = 1;
            this.pz = 1;
        }        
    }
    display(p5) {
        const radius = p5.map(this.z, 0, 1, 8, 0);

        // Redshifting - https://en.wikipedia.org/wiki/Redshift
        const r = p5.map(this.z, 0, 1, 0, 255);
        const b = p5.map(this.z, 0, 1, 255, 0);
        const g = p5.map(Math.abs(this.z - 0.5), 0, 0.5, 255, 0);
        
        p5.noStroke();
        p5.fill(r, g, b);
        p5.ellipse(this.x / this.z, this.y / this.z, radius, radius);

        p5.stroke(r, g, b);
        p5.line(this.x / this.z, this.y / this.z, this.x / this.pz, this.y / this.pz);
    }
}
