(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{48:function(t,i,s){"use strict";s.r(i),s.d(i,"setup",(function(){return a})),s.d(i,"draw",(function(){return r}));class h{constructor(t){const i=t.height/2-60,s=t.map(t.random(),0,1,30,i),h=t.map(t.random(),0,1,2*-t.PI,2*t.PI);this.x=s*Math.cos(h)+t.width/2,this.y=s*Math.sin(h)+i}distance(t){if(t){const i=t.x-this.x,s=t.y-this.y;return Math.sqrt(i*i+s*s)}return 0}draw(t,i){i?t.fill(92,202,58,80):t.fill(230),t.noStroke();const s=i||5;t.ellipse(this.x,this.y,s,s)}}class o{constructor(t,i,s=!1){this.attraction=t,this.subcolonies=[],this.t=1,this.maxt=1,this.size=i,this.root=s,this.noOutlet=!1}update(t){if(this.t>=this.maxt&&this.subcolonies.length<this.size&&t.length>0&&this.size>1&&!this.noOutlet&&!(this.root&&this.subcolonies.length>=1)){let i,s=this.root?3e3:100;for(let h of t){let t=this.attraction.distance(h);t<s&&(i=h,s=t)}i?(this.subcolonies.push(new o(i,this.size-1)),this.t=0,this.maxt=this.attraction.distance(i),t=t.filter(t=>t!==i)):this.noOutlet=!0}for(let i=0;i<this.subcolonies.length;i++){const s=this.subcolonies[i];if(i===this.subcolonies.length-1&&this.t<this.maxt)break;t=s.update(t)}return this.t<this.maxt&&(this.t+=1),t}draw(t){this.attraction.draw(t,this.size);for(let i=0;i<this.subcolonies.length;i++){const s=this.subcolonies[i];if(i===this.subcolonies.length-1&&this.t<this.maxt){const i=this.t/this.maxt,h=(s.attraction.x-this.attraction.x)*i,o=(s.attraction.y-this.attraction.y)*i;s.draw(t),t.stroke(200,100,100,80),t.strokeWeight(this.size),t.line(this.attraction.x,this.attraction.y,this.attraction.x+h,this.attraction.y+o)}else s.draw(t),t.stroke(20,140,20,80),t.strokeWeight(this.size),t.line(this.attraction.x,this.attraction.y,s.attraction.x,s.attraction.y)}}}let n,e=[];function a(){this.createCanvas(600,600),this.ellipseMode(this.RADIUS),this.noStroke(),this.strokeWeight(4);for(let t=0;t<300;t++)e.push(new h(this));n=new o(new h(this),13,!0),n.attraction.x=this.width/2,n.attraction.y=this.height-5,n.attraction.size=1}function r(){this.background(10),e=n.update(e);for(let t of e)t.draw(this);n.draw(this)}}}]);