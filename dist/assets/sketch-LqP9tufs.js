class n{constructor(t,s,i,o,r){this.radius=s,i!==0&&(this.distance=t.createVector(t.random(t.TWO_PI),t.random(t.TWO_PI),t.random(t.TWO_PI)),this.distance.normalize(),this.distance.mult(i)),this.angle=o,this.angularVelocity=r,this.moons=this.spawnMoons(t)}spawnMoons(t){let s=[];const i=t.random(Math.floor(this.radius/20),Math.floor(this.radius/10));for(let o=0;o<i;o++)s.push(new n(t,t.random(this.radius/3,this.radius/2),t.random(this.radius*3,this.radius*6),t.random(t.TWO_PI),t.random(-.04,.04)));return s}update(){this.angle+=this.angularVelocity;for(let t of this.moons)t.update()}display(t){if(t.push(),this.distance){const s=this.distance.cross(t.createVector(1,1,1));t.rotate(this.angle,s),t.translate(this.distance)}t.sphere(this.radius*2);for(let s of this.moons)s.display(t);t.pop()}}let a;function h(){this.createCanvas(400,400,this.WEBGL),this.smooth(),this.noStroke(),a=new n(this,50,0,0,0)}function e(){this.background(30),a.update(this),this.lights(),this.directionalLight(178,255,102,-1,-.65,-.9),this.ambientMaterial(170,170,170),a.display(this)}export{e as draw,h as setup};
