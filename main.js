const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;

const player = document.querySelector(".player");
const treasure = document.querySelector(".treasure");

let x = 0;
let y = 0;

function drawGrid() {
  for (let i = 50; i < 500; i = i + 50) {
    context.moveTo(i, 0);
    context.lineTo(i, 500);

    context.moveTo(0, i);
    context.lineTo(500, i);

    context.strokeStyle = "black";
    context.stroke();
    context.lineWidth = 3;
  }
}

function drawEverything() {
  drawGrid();
  drawPlayer();
  drawTreasure();
}

const drawPlayer = () => {
  playerImage = new Image();
  playerImage.src = "/images/character-down.png";
  playerImage.onload = () => {
    context.drawImage(playerImage, x, y);
  };
};

const drawTreasure = () => {
  treasureImage = new Image();
  treasureImage.src = "/images/treasure.png";
  treasureImage.onload = () => {
    context.drawImage(treasureImage, x, y);
  };
};

drawEverything();

class Character {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }
  moveUp() {
    this.row--;
  }
  moveRight() {
    this.col++;
  }
  moveDown() {
    this.row++;
  }
  moveLeft() {
    this.col--;
  }
}

class Treasure {
  constructor(col, row, imageSrc) {
    this.col = col;
    this.row = row;
    this.setRandomPosition();

    this.img = new Image();
    this.img.imageSrc = src;
  }
  setRandomPosition() {
    this.col = Math.floor(Math.random() * this.col);
    this.row = Math.floor(Math.random() * this.row);
  }
}
