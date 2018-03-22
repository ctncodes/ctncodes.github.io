let clouds;
let x = 0;

function preload() {
  // you will need to change this to the file path to your image
  clouds = loadImage('assets/superMarioClouds_1.png');
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
  image(clouds, x, 10, clouds.width/2, clouds.height/2);
  image(clouds, x, 100, clouds.width/2, clouds.height/2);
  x++;
  }
  // while (x < width) {
  //   fill(129, 206, 15);
  //   rect(x, 100, 10, 10);
  //   x += 20;
  //   image(img, 0, 0);
  // }
}
