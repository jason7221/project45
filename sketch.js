var playerShip;
var astroids;
var EnemyShip;

var backgroundImg;
var playerShipImg;

function preload() {
  backgroundImg = loadImage("spacebg.jpg")
  playerShipImg = loadImage("Player.png");
}

function setup() {
  createCanvas(600, 600);
  
  background = createSprite(0, 0, 600, 600);
  background.addImage(backgroundImg);
  background.scale = 1.5;

  playerShip = createSprite(295, 550, 10, 10);
  playerShip.addImage(playerShipImg);
  playerShip.scale = 0.15;

}

function draw() {
  

  background.velocityY = 2;

  if(background.y > 600){
    background.y = background.height/2;
  }

  if(keyDown(LEFT_ARROW)){
    playerShip.x  = playerShip.x - 2;
  }

  if(keyDown(RIGHT_ARROW)){
    playerShip.x  = playerShip.x + 2;
  }



  
  drawSprites();
}
