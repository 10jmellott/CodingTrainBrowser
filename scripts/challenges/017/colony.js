export class Colony {
    constructor(attraction, size, root = false) {
        this.attraction = attraction;
        this.subcolonies = [];
        this.t = 1;
        this.maxt = 1;
        this.size = size;
        this.root = root;
        this.noOutlet = false;
    }

    update(attractions) {
        if (this.t >= this.maxt && this.subcolonies.length < this.size && 
            attractions.length > 0 && this.size > 1 && !this.noOutlet &&
            !(this.root && this.subcolonies.length >= 1)) {
            let selectedAttraction;
            let selectedDist = this.root ? 3000 : 100;

            for (let attraction of attractions) {
                let newDist = this.attraction.distance(attraction);
                if (newDist < selectedDist) {
                    selectedAttraction = attraction;
                    selectedDist = newDist;
                }
            }

            if (selectedAttraction) {
                this.subcolonies.push(new Colony(selectedAttraction, this.size - 1));
                this.t = 0;
                this.maxt = this.attraction.distance(selectedAttraction);
                attractions = attractions.filter(f => f !== selectedAttraction);
            } else {
                this.noOutlet = true;
            }
        }

        for (let i = 0; i < this.subcolonies.length; i++) {
            const colony = this.subcolonies[i];
            // If not yet finished colonizing the latest colony
            if ((i === this.subcolonies.length - 1) && this.t < this.maxt) {
                break;
            } else {
                attractions = colony.update(attractions);
            }
        }

        if (this.t < this.maxt) {
            this.t += 1;
        }

        return attractions;
    }

    draw(p5) {
        this.attraction.draw(p5, this.size);
        for (let i = 0; i < this.subcolonies.length; i++) {
            const colony = this.subcolonies[i];
            // If not yet finished colonizing the latest colony
            if (i === this.subcolonies.length - 1 && this.t < this.maxt) {
                const percentage = this.t / this.maxt;
                const dx = (colony.attraction.x - this.attraction.x) * percentage;
                const dy = (colony.attraction.y - this.attraction.y) * percentage;
                colony.draw(p5);
                p5.stroke(200, 100, 100, 80);
                p5.strokeWeight(this.size);
                p5.line(this.attraction.x, this.attraction.y, 
                    this.attraction.x + dx, this.attraction.y + dy);
            } else {
                colony.draw(p5);
                p5.stroke(20, 140, 20, 80);
                p5.strokeWeight(this.size);
                p5.line(this.attraction.x, this.attraction.y, 
                    colony.attraction.x, colony.attraction.y);
            }
        }
    }
}
