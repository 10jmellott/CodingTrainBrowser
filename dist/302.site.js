"use strict";(self.webpackChunkctc_browser=self.webpackChunkctc_browser||[]).push([[302],{302:(t,i,s)=>{s.r(i),s.d(i,{setup:()=>o,draw:()=>r,mouseWheel:()=>u});let h=32,e=!0,l=0,a=0,p=-2,c=2;function o(){this.createCanvas(400,400),this.pixelDensity(1),n.call(this)}function r(){n.call(this)}function u(t){l+=this.map(this.mouseX,0,this.width,p,c),a+=this.map(this.mouseY,0,this.height,p,c),t.delta>0?(p*=2,c*=2,h-=32):t.delta<0&&(p/=2,c/=2,h+=32),h=Math.max(h,32),e=!0}function n(){if(e){e=!1,this.loadPixels();for(let t=0;t<this.width;t++){let i=this.map(t,0,this.width,p+l,c+l);for(let s=0;s<this.height;s++){let e=this.map(s,0,this.height,p+a,c+a),l=i,o=e,r=0;for(;r<h;){let t=2*l*o+e;if(l=l*l-o*o+i,o=t,Math.abs(l+o)>16)break;r++}let u=Math.sqrt(this.map(r,0,h,0,8192));r===h&&(u=0);let n=4*(t+s*this.width);this.pixels[n+0]=3*u%255,this.pixels[n+1]=5*u%255,this.pixels[n+2]=7*u%255,this.pixels[n+3]=255}}this.updatePixels()}}}}]);