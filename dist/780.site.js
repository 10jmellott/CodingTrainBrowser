(self.webpackChunkctc_browser=self.webpackChunkctc_browser||[]).push([[780],{780:(t,i,e)=>{"use strict";let s,n,r,h;function u(){this.createCanvas(300,300),this.textAlign(this.CENTER,this.CENTER),this.textSize(64),l()}function o(){if(h?this.background(245,10,10):this.background(0),r)for(let t of r){const i=t%3,e=(t-i)/3;this.fill(0,255,0),this.rect(100*i,100*e,100,100)}this.stroke(255),this.fill(255);for(let t=0;t<3;t++)for(let i=0;i<3;i++){const e=3*t+i;this.text(s[e],100*i+50,100*t+50)}this.line(100,0,100,300),this.line(200,0,200,300),this.line(0,100,300,100),this.line(0,200,300,200)}function f(){if(r)return;if(this.mouseX<=0||this.mouseY<=0||this.mouseX>=this.width||this.mouseY>=this.height)return;const t=(this.mouseX-this.mouseX%100)/100,i=(this.mouseY-this.mouseY%100)/100;if(t>=0&&t<3&&i>=0&&i<3){const e=3*i+t;s[e]||(s[e]=n?"O":"X",n=!n)}r=function(){for(let t=0;t<3;t++){if(c(s[3*t],s[3*t+1],s[3*t+2]))return[3*t,3*t+1,3*t+2];if(c(s[t],s[t+3],s[t+6]))return[t,t+3,t+6]}if(c(s[0],s[4],s[8]))return[0,4,8];if(c(s[2],s[4],s[6]))return[2,4,6];for(let t of s)if(!t)return;return[]}(),r&&(0==r.length&&(h=!0),setTimeout((()=>{l()}),3e3))}function c(t,i,e){return!!(t&&i&&e)&&t===i&&i===e}function l(){s=[];for(let t=0;t<9;t++)s.push("");r=null,h=!1,n=!1}e.r(i),e.d(i,{setup:()=>u,draw:()=>o,mouseClicked:()=>f})}}]);