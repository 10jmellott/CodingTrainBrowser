(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{23:function(s,t,i){"use strict";i.r(t);class a{constructor(s,t,i,a,n){this.radius=t,this.distance=i,this.angle=a,this.angularVelocity=n,this.moons=this.spawnMoons(s)}spawnMoons(s){let t=[];const i=s.random(Math.floor(this.radius/30),Math.floor(this.radius/20));for(let n=0;n<i;n++)t.push(new a(s,s.random(this.radius/2,this.radius/1.5),s.random(2*this.radius,4*this.radius),s.random(s.TWO_PI),s.random(.01,.02)));return t}update(){this.angle+=this.angularVelocity;for(let s of this.moons)s.update()}display(s){s.push(),s.rotate(this.angle),s.translate(this.distance,0),s.ellipse(0,0,2*this.radius,2*this.radius);for(let t of this.moons)t.display(s);s.pop()}}let n;function o(){this.createCanvas(700,700),this.ellipseMode(this.CENTER),this.fill(255,80),n=new a(this,70,0,0,0),this.background(30)}function h(){this.translate(this.width/2,this.height/2),n.update(),n.display(this)}i.d(t,"setup",(function(){return o})),i.d(t,"draw",(function(){return h}))}}]);