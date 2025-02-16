import { Game } from './game.js';

let game;
let lastKey;

export function setup() {
	this.createCanvas(400, 400);
	this.rectMode(this.CORNER);
	lastKey = null;
	game = new Game(this, 30);
	this.frameRate(7);
	this.stroke(100);
}

export function keyPressed() {
	lastKey = this.keyCode;
}

export function draw() {
	this.background(40);
	if (game.update(this, lastKey)) {
		lastKey = null;
	}
	game.display(this);
}
