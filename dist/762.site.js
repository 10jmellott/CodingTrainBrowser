(self.webpackChunkctc_browser=self.webpackChunkctc_browser||[]).push([[762],{762:(t,i,s)=>{"use strict";let h,e;function a(){this.createCanvas(400,400),this.pixelDensity(1),h=[],e=[];for(let t=0;t<this.height;t++){const t=[],i=[];for(let s=0;s<this.width;s++)t.push({a:1,b:0}),i.push({a:t[s].a,b:t[s].b});h.push(t),e.push(i)}}function o(){for(let t=0;t<10;t++){for(let t=1;t<this.height-1;t++)for(let i=1;i<this.width-1;i++)e[i][t].a=r(i,t),e[i][t].b=l(i,t);b()}this.loadPixels();for(let t=0;t<this.height;t++)for(let i=0;i<this.width;i++){const s=255*(1-h[i][t].b),e=4*(i+t*this.width);this.pixels[e+0]=s,this.pixels[e+1]=s,this.pixels[e+2]=s,this.pixels[e+3]=255}this.updatePixels()}function n(){let t=Math.floor(this.mouseX),i=Math.floor(this.mouseY),s=Math.max(t-5,1),e=Math.min(t+5,this.width-1),a=Math.max(i-5,1),o=Math.min(i+5,this.height-1);for(let t=a;t<o;t++)for(let i=s;i<e;i++)h[i][t].b=1}function r(t,i){const s=h[t][i];return s.a+(1*function(t,i){let s=0;return s+=.05*h[t-1][i-1].a,s+=.2*h[t-1][i].a,s+=.05*h[t-1][i+1].a,s+=.2*h[t][i-1].a,s+=-1*h[t][i].a,s+=.2*h[t][i+1].a,s+=.05*h[t+1][i-1].a,s+=.2*h[t+1][i].a,s+=.05*h[t+1][i+1].a,s}(t,i)-s.a*s.b*s.b+.055*(1-s.a))}function l(t,i){const s=h[t][i];return s.b+(.5*function(t,i){let s=0;return s+=.05*h[t-1][i-1].b,s+=.2*h[t-1][i].b,s+=.05*h[t-1][i+1].b,s+=.2*h[t][i-1].b,s+=-1*h[t][i].b,s+=.2*h[t][i+1].b,s+=.05*h[t+1][i-1].b,s+=.2*h[t+1][i].b,s+=.05*h[t+1][i+1].b,s}(t,i)+s.a*s.b*s.b-(.062+.055)*s.b)}function b(){const t=h;h=e,e=t}s.r(i),s.d(i,{setup:()=>a,draw:()=>o,mouseClicked:()=>n})}}]);