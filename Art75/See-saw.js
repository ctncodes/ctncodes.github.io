var mousePressedX = 0;
var mousePressedY = 0;
var pressed = false;
var onSeesaw = [];
var seesawPosition = 0;
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
       yLoc-290 <= mousePressedY && mousePressedY <= (yLoc-290 + boxHeight) && onSeesaw[idx] == true) &&
      pressed == true) {
    pressed = false;
    if ('optimism' == words) {
      if (onSeesaw[idx] == false) {
        seesawPosition++;
      } else {
        seesawPosition--;
      }
    }
    if ('pessimism' == words) {
      if (onSeesaw[idx] == false) {
        seesawPosition--;
      } else {
        seesawPosition++;
      }
    }
    onSeesaw[idx] = !onSeesaw[idx];
  }
  if (onSeesaw[idx] == true) {
    yLoc -= 290;
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
  triangle(screen.width/2, screen.height/2,
    (screen.width/2) + 150, (screen.height)/2 + 150,
    (screen.width/2) - 150, (screen.height)/2 + 150);
  var c = color('violet');
  fill(c);
  noStroke();
  if (seesawPosition > 0) {
    rotate(PI/10.0);
    var adjustX = 100;
    var adjustY = -246;
    rect((screen.width)/2 - 400 + adjustX,
     (screen.height)/2 - 20 + adjustY,
      800, 20);
    rotate(-PI/10.0);
  } else if (seesawPosition < 0) {
    rotate(-PI/10.0);
    var adjustX = -147;
    var adjustY = 199;
    rect((screen.width)/2 - 400 + adjustX,
     (screen.height)/2 - 20 + adjustY,
      800, 20);
    rotate(PI/10.0);
  } else if (seesawPosition == 0) {
    rect((screen.width)/2 - 400,
     (screen.height)/2 - 20,
      800, 20);
  }
  worldView(924, (screen.height)/2 + 150, "optimism", 'blue', 0);
  worldView(284, (screen.height)/2 + 150, "pessimism", 'red', 1);
  worldView(924, (screen.height)/2 + 190, "optimism", 'blue', 2);
  worldView(284, (screen.height)/2 + 190, "pessimism", 'red', 3);
  worldView(924, (screen.height)/2 + 230, "optimism", 'blue', 4);
  worldView(284, (screen.height)/2 + 230, "pessimism", 'red', 5);
}
function mousePressed() {
  mousePressedX = mouseX;
  mousePressedY = mouseY;
  pressed = true;
}
