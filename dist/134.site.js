"use strict";(self.webpackChunkctc_browser=self.webpackChunkctc_browser||[]).push([[134],{134:(s,t,i)=>{i.r(t),i.d(t,{draw:()=>o,setup:()=>e});class a{constructor(s,t,i,a,h){this.radius=t,this.distance=i,this.angle=a,this.angularVelocity=h,this.moons=this.spawnMoons(s)}spawnMoons(s){let t=[];const i=s.random(Math.floor(this.radius/30),Math.floor(this.radius/20));for(let h=0;h<i;h++)t.push(new a(s,s.random(this.radius/2,this.radius/1.5),s.random(2*this.radius,4*this.radius),s.random(s.TWO_PI),s.random(.01,.02)));return t}update(){this.angle+=this.angularVelocity;for(let s of this.moons)s.update()}display(s){s.push(),s.rotate(this.angle),s.translate(this.distance,0),s.ellipse(0,0,2*this.radius,2*this.radius);for(let t of this.moons)t.display(s);s.pop()}}let h;function e(){this.createCanvas(700,700),this.ellipseMode(this.CENTER),this.fill(255,80),h=new a(this,70,0,0,0),this.background(30)}function o(){this.translate(this.width/2,this.height/2),h.update(),h.display(this)}}}]);