(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{9:function(t,e,i){"use strict";i.r(e),i.d(e,"setup",(function(){return r})),i.d(e,"draw",(function(){return u}));let s,n,o;function h(t,e){return 61*(e+=20)+(t+=30)}function r(){s=0,n=0,o=[],this.createCanvas(600,600,this.WEBGL),this.smooth();let t=-n;for(let e=-20;e<20;e++){let e=-s;for(let i=-30;i<=30;i++)o.push(this.map(this.noise(e,t),0,1,-100,250)),e+=.1;t+=.1}}function u(){for(let t=o.length;t>0;t--)o[t]=o[t-61];let t=-s;for(let e=0;e<61;e++)o[e]=this.map(this.noise(t,-n),0,1,-100,250),t+=.1;n+=.1,this.background(40),this.stroke(245),this.noFill(),this.rotateX(this.PI/3);for(let t=-20;t<20;t++){this.beginShape(this.TRIANGLE_STRIP);for(let e=-30;e<=30;e++)this.vertex(30*e,30*t,o[h(e,t)]),this.vertex(30*e,30*(t+1),o[h(e,t+1)]);this.endShape()}}}}]);