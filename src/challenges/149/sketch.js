let board;
let oTurn;
let winningMoves;
let stalemate;

export function setup() {
	this.createCanvas(300, 300);

	this.textAlign(this.CENTER, this.CENTER);
	this.textSize(64);

	clearBoard();
}

export function draw() {
	if (stalemate) {
		this.background(245, 10, 10);
	} else {
		this.background(0);
	}

	if (winningMoves) {
		for (let winningCell of winningMoves) {
			const wx = winningCell % 3;
			const wy = (winningCell - wx) / 3;
			this.fill(0, 255, 0);
			this.rect(wx * 100, wy * 100, 100, 100);
		}
	}

	this.stroke(255);
	this.fill(255);

	for (let y = 0; y < 3; y++) {
		for (let x = 0; x < 3; x++) {
			const i = y * 3 + x;
			this.text(board[i], x * 100 + 50, y * 100 + 50);
		}
	}

	this.line(100, 0, 100, 300);
	this.line(200, 0, 200, 300);
	this.line(0, 100, 300, 100);
	this.line(0, 200, 300, 200);
}

export function mouseClicked() {
	if (winningMoves) {
		return;
	}
	if (this.mouseX <= 0 || this.mouseY <= 0 || this.mouseX >= this.width || this.mouseY >= this.height) {
		return;
	}

	const xi = (this.mouseX - (this.mouseX % 100)) / 100;
	const yi = (this.mouseY - (this.mouseY % 100)) / 100;

	if (xi >= 0 && xi < 3 && yi >= 0 && yi < 3) {
		const i = yi * 3 + xi;
		if (!board[i]) {
			board[i] = oTurn ? 'O' : 'X';
			oTurn = !oTurn;
		}
	}

	winningMoves = verifyWin();

	if (winningMoves) {
		if (winningMoves.length == 0) {
			stalemate = true;
		}

		setTimeout(() => {
			clearBoard();
		}, 3000);
	}
}

function verifySame(a, b, c) {
	if (a && b && c) {
		return a === b && b === c;
	} else {
		return false;
	}
}

function verifyWin() {
	for (let i = 0; i < 3; i++) {
		if (verifySame(board[i * 3], board[i * 3 + 1], board[i * 3 + 2])) {
			return [i * 3, i * 3 + 1, i * 3 + 2];
		}
		if (verifySame(board[i], board[i + 3], board[i + 6])) {
			return [i, i + 3, i + 6];
		}
	}

	if (verifySame(board[0], board[4], board[8])) {
		return [0, 4, 8];
	} else if (verifySame(board[2], board[4], board[6])) {
		return [2, 4, 6];
	}

	// check for stalemate
	for (let cell of board) {
		if (!!!cell) {
			return;
		}
	}
	return [];
}

function clearBoard() {
	board = [];
	for (let i = 0; i < 9; i++) {
		board.push('');
	}
	winningMoves = null;
	stalemate = false;
	oTurn = false;
}
