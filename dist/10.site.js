(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{46:function(i,t,h){"use strict";h.r(t),h.d(t,"setup",(function(){return a})),h.d(t,"draw",(function(){return l}));function s(i,t){return 20*t+i}class e{constructor(i,t){this.i=i,this.j=t,this.hasTop=this.hasBottom=this.hasLeft=this.hasRight=!0,this.visited=!1}checkNeighbor(i,t,h){return function(i,t){return i>=0&&t>=0&&i<20&&t<20}(i,t)&&!h[s(i,t)].visited}checkNeighbors(i){let t=[];return this.checkNeighbor(this.i,this.j-1,i)&&t.push(s(this.i,this.j-1)),this.checkNeighbor(this.i,this.j+1,i)&&t.push(s(this.i,this.j+1)),this.checkNeighbor(this.i-1,this.j,i)&&t.push(s(this.i-1,this.j)),this.checkNeighbor(this.i+1,this.j,i)&&t.push(s(this.i+1,this.j)),t}walkTo(i){i.j<this.j?this.hasTop=!1:i.j>this.j?this.hasBottom=!1:i.i<this.i?this.hasLeft=!1:i.i>this.i&&(this.hasRight=!1)}display(i,t,h){this.visited?i.fill(153,51,255):i.fill(30),i.noStroke(),i.rect(this.i*t,this.j*h,t,h),i.strokeWeight(2),i.stroke(200),this.hasTop&&i.line(this.i*t,this.j*h,(this.i+1)*t,this.j*h),this.hasBottom&&i.line(this.i*t,(this.j+1)*h,(this.i+1)*t,(this.j+1)*h),this.hasLeft&&i.line(this.i*t,this.j*h,this.i*t,(this.j+1)*h),this.hasRight&&i.line((this.i+1)*t,this.j*h,(this.i+1)*t,(this.j+1)*h)}}let o,n,r,c;function a(){r=[],c=[0],this.createCanvas(600,600),this.frameRate(30),o=this.width/20,n=this.height/20;for(let i=0;i<20;i++)for(let t=0;t<20;t++)r.push(new e(t,i))}function l(){if(this.background(255),c.length>0){const i=r[c[c.length-1]];i.visited=!0;const t=i.checkNeighbors(r);if(0===t.length)c.pop();else if(t.length>0){const h=t[Math.floor(Math.random()*t.length)],s=r[h];s.walkTo(i),i.walkTo(s),c.push(h)}}for(let i of r)i.display(this,o,n)}}}]);