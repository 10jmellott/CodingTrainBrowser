(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{20:function(t,s,i){"use strict";i.r(s);class a{constructor(t,s,i,a,n){this.radius=s,0!==i&&(this.distance=t.createVector(t.random(t.TWO_PI),t.random(t.TWO_PI),t.random(t.TWO_PI)),this.distance.normalize(),this.distance.mult(i)),this.angle=a,this.angularVelocity=n,this.moons=this.spawnMoons(t)}spawnMoons(t){let s=[];const i=t.random(Math.floor(this.radius/20),Math.floor(this.radius/10));for(let n=0;n<i;n++)s.push(new a(t,t.random(this.radius/3,this.radius/2),t.random(3*this.radius,6*this.radius),t.random(t.TWO_PI),t.random(-.04,.04)));return s}update(){this.angle+=this.angularVelocity;for(let t of this.moons)t.update()}display(t){if(t.push(),this.distance){const s=this.distance.cross(t.createVector(1,1,1));t.rotate(this.angle,s),t.translate(this.distance)}t.sphere(2*this.radius);for(let s of this.moons)s.display(t);t.pop()}}let n;function o(){this.createCanvas(700,700,this.WEBGL),this.smooth(),this.noStroke(),n=new a(this,50,0,0,0)}function r(){this.background(30),n.update(this),this.lights(),this.directionalLight(178,255,102,-1,-.65,-.9),this.ambientMaterial(170,170,170),n.display(this)}i.d(s,"setup",(function(){return o})),i.d(s,"draw",(function(){return r}))}}]);