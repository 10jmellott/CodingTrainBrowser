import { Ship } from './ship.js';
import { Invader } from './invader.js';

const INVADERS_PER_ROW = 3;
let ship;
let invaders = [];
let halfWayPoint = false;

export function setup() {
	this.createCanvas(640, 480);
	this.rectMode(this.CENTER);
	this.ellipseMode(this.CENTER);
	this.noStroke();
	ship = new Ship(this);
	const spacing = this.width / (INVADERS_PER_ROW + 1);
	for (let row = 0; row < 6; row++) {
		const evenRow = row % 2 === 0;
		const invadersPerColumn = evenRow ? INVADERS_PER_ROW : INVADERS_PER_ROW - 1;
		for (let col = 0; col < invadersPerColumn; col++) {
			invaders.push(new Invader(
				this,
				spacing * (col + 1) + (evenRow ? 0 : spacing / 2),
				row * 20 + 30,
				1));
		}
	}
}

export function draw() {
	const belowThresholdInvaders = invaders.filter(i =>
		!i.isDead && i.y > this.height - 50);

	// GAME OVER
	if (ship.health <= 0 || belowThresholdInvaders.length > 0) {
		this.textAlign(this.CENTER, this.CENTER);
		this.textSize(96);
		this.fill(255);
		this.text('GAME OVER', this.width / 2, this.height / 2);
		return;
	}

	// YOU WIN
	const livingInvaders = invaders.filter(i => !i.isDead);
	if (livingInvaders.length === 0) {
		this.textAlign(this.CENTER, this.CENTER);
		this.textSize(96);
		this.fill(255);
		this.text('YOU WIN!', this.width / 2, this.height / 2);
		return;
	}

	this.background(26);

	if (this.keyIsDown(this.RIGHT_ARROW)) {
		ship.move(this, 2);
	} else if (this.keyIsDown(this.LEFT_ARROW)) {
		ship.move(this, -2);
	}

	const oobInvaders = invaders.filter(i =>
		!i.isDead && (i.x < 10 || i.x > this.width - 10));
	if (oobInvaders.length > 0) {
		for (let invader of invaders) {
			invader.shiftDown();
		}
	}

	if (!halfWayPoint) {
		const speedUpInvaders = invaders.filter(i =>
			!i.isDead && (i.y > this.height / 1.9));
		if (speedUpInvaders.length > 0) {
			for (let invader of invaders) {
				invader.velocity *= 2;
			}
		}
		halfWayPoint = true;
	}

	ship.update(invaders);
	for (let invader of invaders) {
		invader.update(this, ship);
	}

	ship.display(this);
	for (let invader of invaders) {
		invader.display(this);
	}
}

export function keyPressed() {
	if (this.keyCode === this.UP_ARROW) {
		ship.shoot(this);
	}
}
