(self.webpackChunkctc_browser=self.webpackChunkctc_browser||[]).push([[193],{193:(t,h,s)=>{"use strict";s.r(h),s.d(h,{draw:()=>l,setup:()=>o});class i{constructor(t){this.size=t.random(10,30),this.growthRate=t.random(.1,.8),this.growth=0}grow(){this.growth+=this.growthRate}display(t){let h=this.size;this.growth<100&&(h*=this.growth/100),t.noStroke(),t.fill("rgba(140,60,140, 0.5)"),t.ellipse(0,0,h)}}class e{constructor(t,h,s){this.length=h,this.angle=s,this.growth=0,this.growthRate=t.random(.1,.8)}grow(t){this.growth+=this.growthRate,this.children&&(this.children[0].grow(t),this.children[1].grow(t)),this.leaf&&this.leaf.grow(),this.growth>100&&this.length>10&&!this.children?this.children=[new e(t,this.length/t.random(1.4,2),t.random(.2,1.5)),new e(t,this.length/t.random(1.4,2),t.random(.2,1.5))]:this.growth>100&&this.length<10&&!this.leaf&&(this.leaf=new i(t))}display(t){let h=this.length;this.growth<100&&(h*=this.growth/100),this.growth<160?t.stroke(20,Math.floor(this.growth)+60,20):t.stroke(20,225,20),t.line(0,0,0,-h),t.push(),t.translate(0,-h),this.children&&(t.push(),t.rotate(this.angle),this.children[0].display(t),t.pop(),t.push(),t.rotate(-this.angle),this.children[1].display(t),t.pop()),this.leaf&&this.leaf.display(t),t.pop()}}let r;function o(){this.createCanvas(600,600),r=new e(this,this.height/2.7,this.PI/5),this.strokeWeight(5),this.strokeCap(this.ROUND),this.ellipseMode(this.CENTER)}function l(){r.grow(this),this.background(10),this.push(),this.translate(this.width/2,this.height),r.display(this),this.pop()}}}]);