(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{38:function(t,i,s){"use strict";let h;function n(){this.createCanvas(400,400),this.strokeWeight(4),this.stroke(0),this.noFill(),h=this.createSlider(0,10,2,.01),h.position(400,100),h.style("width","160px")}function e(){this.background(220),this.translate(this.width/2,this.height/2);const t=h.value();if(t>0){this.beginShape();for(let i=0;i<this.TWO_PI;i+=.1){let s=180*Math.pow(Math.abs(Math.cos(i)),2/t)*Math.sign(Math.cos(i)),h=160*Math.pow(Math.abs(Math.sin(i)),2/t)*Math.sign(Math.sin(i));this.vertex(s,h)}this.endShape(this.CLOSE)}}s.r(i),s.d(i,"setup",(function(){return n})),s.d(i,"draw",(function(){return e}))}}]);