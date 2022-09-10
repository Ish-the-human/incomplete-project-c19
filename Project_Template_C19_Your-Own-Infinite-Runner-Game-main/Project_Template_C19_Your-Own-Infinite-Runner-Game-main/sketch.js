var PlAY = 1;
var END = 0;
var gamestate = PlAY;
var boy_running
var ground, invisibleGround,groundImage
var obstacleGroup, obstacle1, obstacle2, obstacle3
var score;


function preload(){
boy_running = loadImage("boy running.png")
groundImage = loadImage("desert.png")

obstacle1 = loadImage("normal rock.png")
obstacle3 = loadImage("long amount of rocks.jpg")
obstacle3 = loadImage("tall rock.png")

}

function setup() {
  createCanvas(600,200)
  boy = createSprite(50,180,20,50)
  boy.AddImage("running",boy_running)
  ground = createSprite(200,180,400,20)
  ground.x = ground.width /2
invisibleGround = createSprite(200,190,400,10)
invisibleGround.visible = false
  

score = 0;
}

function draw() {
 drawSprites();
 
 Text("score: "+ score,500,50)

 if (ground.x < 0){
  ground.x = ground.width/2
}


if(keydown("space")&& trex.y >= 100){
   trex.velocityY = -12
}

trex.velocityY = trex.velocityY + 0.8
}
