"use strict";(self.webpackChunkctc_browser=self.webpackChunkctc_browser||[]).push([[106],{106:(t,h,s)=>{s.r(h),s.d(h,{draw:()=>r,setup:()=>a});class i{constructor(t){this.x=t.random(-t.width/2,t.width/2),this.y=t.random(-t.height/2,t.height/2),this.z=t.random(),this.pz=this.z}update(t){this.pz=this.z,this.z-=.04,this.z<=0&&(this.x=t.random(-t.width/2,t.width/2),this.y=t.random(-t.height/2,t.height/2),this.z=1,this.pz=1)}display(t){const h=t.map(this.z,0,1,8,0),s=t.map(this.z,0,1,0,255),i=t.map(this.z,0,1,255,0),e=t.map(Math.abs(this.z-.5),0,.5,255,0);t.noStroke(),t.fill(s,e,i),t.ellipse(this.x/this.z,this.y/this.z,h,h),t.stroke(s,e,i),t.line(this.x/this.z,this.y/this.z,this.x/this.pz,this.y/this.pz)}}let e;function a(){this.createCanvas(600,600),this.strokeWeight(2),e=[];for(let t=0;t<400;t++)e.push(new i(this))}function r(){this.background(0),this.translate(this.width/2,this.height/2);for(let t of e)t.update(this),t.display(this)}}}]);