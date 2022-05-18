var cop, copImage;
var bg, bgImage;
var car, carImage;
var bike, bikeImage;
var thief, thiefImage;
var treasure, treasureImage1, treasureImage2, treasureImage3;

function preload()
{
    bgImage=loadImage("background3.png");
    copImage=loadImage("cop.png");
    //  thiefImage=loadImage('thief.png');
    
    treasureImage1=loadImage("coin.jpg");
    treasureImage2=loadImage("coinbag.png");
    treasureImage3=loadImage("jewels.jpg");


}
function setup() {
  createCanvas(1000, 700);
  bg  = createSprite(0,0,1000,700);
  bg.addImage(bgImage);
  bg.scale=0.4
  //creating cop chasing the thief
  cop = createSprite(30, 350, 30, 50);
  cop.addImage("cop",copImage);
  cop.scale=0.2;
  thief = createSprite(70, 350, 30, 50);
  thief.addImage("thief", thiefImage);
}

function draw() {
  background("#BDA297");
  drawSprites();
  
}