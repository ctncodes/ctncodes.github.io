let candy;
let x = 0;
let y = 0;
let speed = 5;
function preload() {
  // you will need to change this to the file path to your image
  candy = loadImage('assets/Candy of all sorts.png');
}
function setup() {
  createCanvas(500, 500);
  background(200);
  // Top-left corner of the img is at (0, 0)
  // Width and height are the img's original width and height
  // image(img, 0, 0);
  // If you want to scale the image to 100 x 100 pixels
  // image(img, 0, 0, 100, 100);
  // If you want to scale image by 50%
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
  // while (x < width) {
  //   fill(129, 206, 15);
  //   rect(x, 100, 10, 10);
  //   x += 20;
  //   image(img, 0, 0);
  // }
}
