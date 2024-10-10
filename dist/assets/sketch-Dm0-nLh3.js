class h{constructor(t,s,i){this.position=i,this.velocity=t.createVector(0,0),this.color=s}applyVectorForce(t){this.velocity.add(t)}applyScalarForce(t){this.velocity.mult(t)}update(){this.position.add(this.velocity)}display(t,s){if(s&&this.lifespan){const i=s/this.lifespan;i>.9?this.color[3]=t.map(i,.9,1,200,0):this.color[3]=200}else this.color[3]=255;t.stroke(this.color),t.point(this.position.x,this.position.y)}}class c{constructor(t){this.color=[],this.color.push(t.random()*255),this.color.push(t.random()*255),this.color.push(t.random()*255),this.color.push(255),this.gravity=t.createVector(0,.1),this.particleGravity=t.createVector(0,.03)}initialize(t){const s=t.random()*(t.width-60)+30,i=t.height,a=t.createVector(s,i);this.shell=new h(t,this.color,a),this.shell.applyVectorForce(t.createVector(0,t.random()*-3-7)),delete this.fallout,this.falloutAge=0,this.fuseAge=0,this.fuseDelay=t.random()*150}update(t){if(this.fuseAge<this.fuseDelay){this.fuseAge+=1;return}if(this.fallout)this.falloutAge+=1,this.fallout.forEach(i=>{i.applyVectorForce(this.particleGravity),i.update(t)}),this.fallout.filter(i=>this.falloutAge<i.lifespan).length||this.initialize(t);else if(this.shell.applyVectorForce(this.gravity),this.shell.update(t),this.shell.velocity.y>=-1){this.fallout=[];for(let s=0;s<75;s++){const i=new h(t,this.color,this.shell.position.copy());i.applyVectorForce(this.shell.velocity),i.applyScalarForce(.5),i.applyVectorForce(t.createVector(t.random()*4-2,t.random()*4-2)),i.lifespan=t.random()*25+40,this.fallout.push(i)}}}display(t){this.fuseAge<this.fuseDelay||(this.fallout?(t.strokeWeight(3),this.fallout.forEach(s=>s.display(t,this.falloutAge))):(t.strokeWeight(5),this.shell.display(t)))}}let l;function e(){this.createCanvas(400,400),l=[];for(let o=0;o<20;o++){const t=new c(this);t.initialize(this),l.push(t)}this.background(5),this.noFill()}function p(){this.background(0,0,0,25);for(let o=0;o<l.length;o++)l[o].update(this),l[o].display(this)}export{p as draw,e as setup};
