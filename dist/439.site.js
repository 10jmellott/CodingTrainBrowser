(self.webpackChunkctc_browser=self.webpackChunkctc_browser||[]).push([[439],{439:(t,e,h)=>{"use strict";h.r(e),h.d(e,{setup:()=>a,draw:()=>i});let s=0;function a(){this.createCanvas(400,400),this.strokeWeight(2),this.stroke(10,50),this.noFill()}function i(){this.background(220),this.translate(this.width/2,this.height/2),s+=.005;for(let t=1;t<3;t++)for(let e=1;e<3;e++){let h=100*Math.cos(s+t)*Math.cos(1.1*s+e)-50;for(let a=1;a<5;a++)for(let i=1;i<3;i++)for(let r=1;r<4;r++)for(let n=1;n<4;n++){let l=100*Math.sin(s+i)*Math.sin(s+r)*Math.sin(s+n)-50;this.beginShape();for(let s=0;s<this.TWO_PI;s+=.1){let c=o(s,t,e,a,i,r,n),M=c*Math.cos(s)*50+h,f=c*Math.sin(s)*50+l;this.vertex(M,f)}this.endShape(this.CLOSE)}}}function o(t,e,h,s,a,i,o){let r=Math.abs(1/e*Math.cos(s*t/4));r=Math.pow(r,i);let n=Math.abs(1/h*Math.sin(s*t/4));n=Math.pow(n,o);let l=r+n;return Math.pow(l,-1/a)}}}]);