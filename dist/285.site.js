(self.webpackChunkctc_browser=self.webpackChunkctc_browser||[]).push([[285],{285:(t,e,s)=>{"use strict";s.r(e),s.d(e,{setup:()=>n,draw:()=>l});let h,i,r;function o(t,e){return 61*(e+=20)+(t+30)}function n(){h=0,i=0,r=[],this.createCanvas(600,600,this.WEBGL),this.smooth();let t=-i;for(let e=-20;e<20;e++){let e=-h;for(let s=-30;s<=30;s++)r.push(this.map(this.noise(e,t),0,1,-100,250)),e+=.1;t+=.1}}function l(){for(let t=r.length;t>0;t--)r[t]=r[t-61];let t=-h;for(let e=0;e<61;e++)r[e]=this.map(this.noise(t,-i),0,1,-100,250),t+=.1;i+=.1,this.background(40),this.stroke(245),this.noFill(),this.rotateX(this.PI/3);for(let t=-20;t<20;t++){this.beginShape(this.TRIANGLE_STRIP);for(let e=-30;e<=30;e++)this.vertex(30*e,30*t,r[o(e,t)]),this.vertex(30*e,30*(t+1),r[o(e,t+1)]);this.endShape()}}}}]);