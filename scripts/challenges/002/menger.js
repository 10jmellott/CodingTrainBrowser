export class Menger {
    constructor(h) {
        this.h = h;
        this.h3 = this.h / 3;
    }
    subdivide() {
        if (!this.subdivisions) {
            this.subdivisions = [];
            for (let i = 0; i < 3; i++) {
                this.subdivisions.push([]);
                for (let j = 0; j < 3; j++) {
                    this.subdivisions[i].push([]);
                    for (let k = 0; k < 3; k++) {
                        this.subdivisions[i][j].push(new Menger(this.h3));
                    }
                }
            }
        } else {
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    for (let k = 0; k < 3; k++) {
                        this.subdivisions[i][j][k].subdivide();
                    }
                }
            }
        }        
    }
    display(p5) {
        if (this.subdivisions) {
            for (let i = -1; i < 2; i++) {
                for (let j = -1; j < 2; j++) {
                    for (let k = -1; k < 2; k++) {
                        p5.push();
                        p5.translate(i * this.h3, j * this.h3, k * this.h3);
                        if (
                            i == 0 && j == 0 || 
                            i == 0 && k == 0 ||
                            j == 0 && k == 0) {
                            // Do nothing
                        } else {
                            this.subdivisions[i+1][j+1][k+1].display(p5);
                        }
                        p5.pop();
                    }
                }
            }
        } else {
            // image(mengerGraphic, 0, 0, this.h, this.h);
            p5.box(this.h);
        }        
    }
}
