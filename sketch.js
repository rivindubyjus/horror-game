var bob
var ground
var zombie
function preload(){
  backgroundImg = loadImage("Kitchen.png")
  bobAnimFront = loadAnimation("Bob1.png","Bob2.png","Bob3.png","Bob4.png","Bob5.png")
  bobAnimBack = loadAnimation("Bob1flip.png","Bob2flip.png","Bob3flip.png","Bob4flip.png","Bob5flip.png")
  zombieFront = loadAnimation("zombie1.png","zombie2.png","zombie3.png","zombie4.png")
  zombieBack = loadAnimation("zombie1f.png","zombie2f.png","zombie3f.png","zombie4f.png")
  bobImg = loadImage("Bob2.png")
}
 


function setup() {
  createCanvas(1000,300);
  bg = createSprite(500,150,1000,300);
  bg.addImage(backgroundImg)
  //bg.velocityX = -9
  
  bob = createSprite(100,260,50,100);
  bob.addImage(bobImg);
  bob.addAnimation("forward",bobAnimFront);
  bob.addAnimation("back",bobAnimBack);

  ground = createSprite(0,300,5000,10)
  


}


function draw() {
  background(0);  
 /* if(bg.x<0){
  bg.x = 2640
  }*/

  bob.collide(ground);
  

  if(keyWentDown("RIGHT_ARROW")){
    bob.x = bob.x + 3
    bob.changeAnimation("forward",bobAnimFront)
  }


  
  if(keyWentDown("LEFT_ARROW")){
    bob.x = bob.x - 3
    bob.changeAnimation("back",bobAnimBack)
  }

  if(keyWentUp("RIGHT_ARROW")){
    bob.changeImage(bobImg)
  }


  
  if(keyWentUp("LEFT_ARROW")){ 
    bob.changeImage(bobImg)
  }

  
  if(keyDown("RIGHT_ARROW")){
    bob.x = bob.x + 3
  
  }


  
  if(keyDown("LEFT_ARROW")){
    bob.x = bob.x - 3
  }

  createZombie();

  drawSprites();
  

}

function createZombie(){
  if(frameCount%120 === 0){
    zombie=createSprite(1000,200,50,100);
    zombie.scale = 0.75
    zombie.collide(ground)
    zombie.addAnimation("back",zombieBack);
    zombie.velocityX = -3.5
    zombie.depth = bob.depth
    bob.depth = +1
  }
}

