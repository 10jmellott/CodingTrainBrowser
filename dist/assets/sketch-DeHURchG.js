const a=(t,i,o)=>Math.min(Math.max(t,i),o);class l{constructor(i){this.position=i.createVector(i.random(i.width),i.random(i.height)),this.velocity=i.createVector(i.random()*4-2,i.random()*4-2),this.radius=i.random()*40+20}update(i){this.position.add(this.velocity),(this.position.x<this.radius||this.position.x>i.width-this.radius)&&(this.velocity.x*=-1,this.position.x=a(this.position.x,this.radius,i.width-this.radius)),(this.position.y<this.radius||this.position.y>i.height-this.radius)&&(this.velocity.y*=-1,this.position.y=a(this.position.y,this.radius,i.height-this.radius))}display(i){i.stroke(0),i.strokeWeight(5),i.point(this.position)}}let s;function d(){this.createCanvas(400,400),this.colorMode(this.HSB),s=[];for(let t=0;t<4;t++)s.push(new l(this));s.forEach(t=>t.scaledRadius=50*t.radius)}function c(){let t=0;for(let i=0;i<s.length;i++)t+=s[i].scaledRadius/Math.sqrt(s[i].xdiff*s[i].xdiff+s[i].ydiff*s[i].ydiff);return t}function f(){this.loadPixels();for(let t=0;t<this.height;t++){s.forEach(i=>i.ydiff=t-i.position.y);for(let i=0;i<this.width;i++){s.forEach(h=>h.xdiff=i-h.position.x);let o=c();this.set(i,t,this.color(o,255,255))}}this.updatePixels(),s.forEach(t=>t.update(this))}export{f as draw,d as setup};
