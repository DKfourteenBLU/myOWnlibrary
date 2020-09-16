var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;


  gameObject1 = createSprite(100, 100, 50, 80);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200, 100, 50, 80);
  gameObject2.shapeColor = "green";
  gameObject3= createSprite(300, 100, 50, 80);
  gameObject3.shapeColor = "green";
  gameObject4= createSprite(400, 100, 50, 80);
  gameObject4.shapeColor = "green";


  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(fixedRect,movingRect);












  
  drawSprites();
}












































































































































































