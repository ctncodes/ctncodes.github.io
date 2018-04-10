let candy;
let x = 0;
let y = 0;
let speed = 5;
function preload() {
  candy = loadImage('assets/Candy of all sorts.png');
}
function setup() {
  createCanvas(500, 500); 
  background(200);
}
function draw() {
  background(200);
  image(candy, 0, y, candy.width, candy.height);
  image(candy, candy.width, y, candy.width, candy.height);
  image(candy, candy.width, y + candy.height, candy.width, candy.height);
  image(candy, 0, y + candy.height, candy.width, candy.height);
  move();
}
function move() {
  y += speed;
  if (y >= width || y < -225) {
    speed = -speed;
  }
}
