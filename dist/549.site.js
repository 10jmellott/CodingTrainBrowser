(self.webpackChunkctc_browser=self.webpackChunkctc_browser||[]).push([[549],{549:(t,s,h)=>{"use strict";function e(){this.createCanvas(600,600,this.WEBGL),this.smooth(),this.fill(127),this.stroke(255)}h.r(s),h.d(s,{setup:()=>e,draw:()=>a});const i=50;function a(){this.background(0),this.orbitControl(),this.rotateX(1.1),this.rotateY(.6);let t=[];for(let s=0;s<=i;s++){let h=this.map(s,0,i,-this.HALF_PI,this.HALF_PI),e=o(h,1,1,8,60,100,30),a=[];for(let t=0;t<=i;t++){let s=this.map(t,0,i,-this.PI,this.PI),r=o(s,1,1,2,10,10,10),n=150*e*r*Math.cos(s)*Math.cos(h),c=150*e*r*Math.sin(s)*Math.cos(h),l=150*r*Math.sin(h);a.push({x:n,y:c,z:l})}t.push(a)}for(let s=0;s<i;s++){this.beginShape(this.TRIANGLE_STRIP);for(let h=0;h<=i;h++){let e=t[s][h],i=t[s+1][h];this.vertex(e.x,e.y,e.z),this.vertex(i.x,i.y,i.z)}this.endShape()}}function o(t,s,h,e,i,a,o){let r=Math.abs(1/s*Math.cos(e*t/4));r=Math.pow(r,a);let n=Math.abs(1/h*Math.sin(e*t/4));n=Math.pow(n,o);let c=r+n;return Math.pow(c,-1/i)}}}]);