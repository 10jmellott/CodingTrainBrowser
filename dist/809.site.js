"use strict";(self.webpackChunkctc_browser=self.webpackChunkctc_browser||[]).push([[809],{809:(t,s,i)=>{i.r(s),i.d(s,{draw:()=>o,setup:()=>n});class a{constructor(t,s,i,a,e,h){this.radius=s,0!==i&&(this.distance=t.createVector(t.random(t.TWO_PI),t.random(t.TWO_PI),t.random(t.TWO_PI)),this.distance.normalize(),this.distance.mult(i)),this.angle=a,this.angularVelocity=e,this.moons=this.spawnMoons(t,h),this.radius>=50?this.skin=h.sun:this.radius>=25?this.skin=h.jupiter:this.radius>=10?this.skin=h.earth:this.skin=h.pluto}spawnMoons(t,s){let i=[];const e=t.random(Math.floor(this.radius/20),Math.floor(this.radius/10));for(let h=0;h<e;h++)i.push(new a(t,t.random(this.radius/3,this.radius/1.5),t.random(3*this.radius,6*this.radius),t.random(t.TWO_PI),t.random(-.04,.04),s));return i}update(){this.angle+=this.angularVelocity;for(let t of this.moons)t.update()}display(t){if(t.push(),this.distance){const s=this.distance.cross(t.createVector(1,1,1));t.rotate(this.angle,s),t.translate(this.distance)}t.texture(this.skin),t.sphere(2*this.radius);for(let s of this.moons)s.display(t);t.pop()}}function e(t){return window.location.pathname+"assets/challenges/009/"+t}let h;function n(){this.createCanvas(700,700,this.WEBGL),this.smooth(),this.noStroke();const t={sun:this.loadImage(e("sunmap.jpg")),earth:this.loadImage(e("earthmap1k.jpg")),jupiter:this.loadImage(e("jupitermap.jpg")),pluto:this.loadImage(e("plutomap1k.jpg"))};h=new a(this,50,0,0,0,t)}function o(){this.background(30),h.update(),this.lights(),this.directionalLight(178,255,102,-1,-.65,-.9),this.ambientMaterial(170,170,170),h.display(this)}}}]);