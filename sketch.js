var pinko;
var divisions;






function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  pinko.display();
  divisions.display();
  drawSprites();
}