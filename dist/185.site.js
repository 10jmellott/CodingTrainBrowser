"use strict";(self.webpackChunkctc_browser=self.webpackChunkctc_browser||[]).push([[185],{185:(t,s,i)=>{let h,e,a;function n(){this.createCanvas(800,800),this.colorMode(this.HSB),this.background(0),e=2e3,a=null,h=this.random()-.5}function r(){const t=e*(137.5+h),s=8*Math.sqrt(e),i=s*Math.cos(this.radians(t)),n=s*Math.sin(this.radians(t));this.push(),this.translate(this.width/2,this.height/2),this.rotate(h);let r=[i,n];a=a??r,this.stroke(t%360,100,100,.1),this.line(a[0],a[1],r[0],r[1]),this.noStroke(),this.fill(t%360,100,100,.5),this.ellipse(r[0],r[1],8,8),a=r,this.pop(),e--,0===e&&(e=2e3,a=null,h=this.random()-.5,this.background(0))}i.r(s),i.d(s,{setup:()=>n,draw:()=>r})}}]);