var mousePressedX = 0;
var mousePressedY = 0;
var pressed = false;
var onSeesaw = [];

function setup() {
  createCanvas(screen.width, screen.height);
  background(153,245,255);
  for (var i = 0; i < 100; i++) {
    onSeesaw[i] = false;
  }
}
function worldView(xLoc, yLoc, words, bG, idx) {
  var boxWidth = 160;
  var boxHeight = 40;

  if (xLoc <= mousePressedX && mousePressedX <= (xLoc + boxWidth) &&
      (yLoc <= mousePressedY && mousePressedY <= (yLoc + boxHeight) && onSeesaw[idx] == false ||
       yLoc-300 <= mousePressedY && mousePressedY <= (yLoc-300 + boxHeight) && onSeesaw[idx] == true) &&
      pressed == true) {
    pressed = false;
    onSeesaw[idx] = !onSeesaw[idx];
  }

  if (onSeesaw[idx] == true) {
    yLoc -= 300;
  }
  var c = color(bG);
  fill(c);
  noStroke();
  rect(xLoc, yLoc, boxWidth, boxHeight);

  var c = color(255);
  fill(c);
  textSize(32);
  textAlign(CENTER);
  text(words, xLoc, yLoc, boxWidth, boxHeight);
}
function draw() {
  var c = color(153,245,255);
  fill(c);
  noStroke();
  rect(0, 0, screen.width, screen.height/2);

  var c = color('green');
  fill(c);
  noStroke();
  rect(0, screen.height/2, screen.width, screen.height/2);

  var c = color('purple');
  fill(c);
  noStroke();
  triangle(screen.width/2, screen.height/2, (screen.width/2) + 150, (screen.height)/2 + 150, (screen.width/2) - 150, (screen.height)/2 + 150);

  var c = color('violet');
  fill(c);
  noStroke();
  rect((screen.width)/2 - 400, (screen.height)/2 - 20, 800, 20);

  worldView(1080, (screen.height)/2 + 50, "optimism", 'blue', 0);
  worldView(180, (screen.height)/2 + 50, "pessimism", 'red', 1);
  worldView(1080, (screen.height)/2 + 100, "optimism", 'blue', 2);
  worldView(180, (screen.height)/2 + 100, "pessimism", 'red', 3);
  worldView(1080, (screen.height)/2 + 150, "optimism", 'blue', 4);
  worldView(180, (screen.height)/2 + 150, "pessimism", 'red', 5);
}
function mousePressed() {
  mousePressedX = mouseX;
  mousePressedY = mouseY;
  pressed = true;
}
