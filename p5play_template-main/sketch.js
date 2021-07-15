var box;

function setup() {
  createCanvas(400,400);
  box = createSprite (200,200,20,20);
  box.shapeColor = "red";
}

function draw() 
{
  background(30);
  drawSprites();

  if (keyDown("right")) {
   box.x +=5; 

  }
  if (keyDown("left"))  {
    box.x -=5;

  }
  if (keyDown("up")) {
    box.y -=5;

  }
  if (keyDown("down")) {
    box.y +=5;
    
  }
}




