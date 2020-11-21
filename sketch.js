var Tower,TowerImage
var Door,DoorImage
var DoorsGroup
var ClimberGroup
var Climber,ClimberImage
var Ghost,GhostImage
var gamestate="play"
function preload(){
TowerImage=loadImage("tower.png")
DoorImage=loadImage("door.png")
ClimberImage=loadImage("climber.png")
GhostImage=loadImage("ghost-standing.png")
}
function setup(){
createCanvas(600,600)
Tower=createSprite (300,300)
Tower.addImage(TowerImage)
Tower.velocityY=2
DoorsGroup=new Group()
ClimberGroup=new Group()
Ghost=createSprite(200,200)
Ghost.addImage(GhostImage)
Ghost.scale=0.4
}
function draw(){
background("black")
if (gamestate==="play"){
if (keyDown("space")){
Ghost.velocityY=-10
}
if (keyDown("left_arrow")){
Ghost.x=Ghost.x-3
}
if (keyDown("right_arrow")){
Ghost.x=Ghost.x+3
}
Ghost.velocityY+=0.5
if (Tower.y>450){
Tower.y=300
}
spawnDoors()
if (ClimberGroup.isTouching(Ghost)||Ghost.y>600){
Ghost.destroy()
gamestate="end"
}
drawSprites()
}
if (gamestate==="end"){
textSize(30)
text("GameOver",300,300)
}
}
function spawnDoors(){
if (frameCount%200===0){
var Door=createSprite(200,-50)
Climber=createSprite(200,10)
Door.x=Math.round(random(100,400))
Climber.x=Door.x
Door.addImage(DoorImage)
Climber.addImage(ClimberImage)
Door.velocityY=1
Climber.velocityY=1
Ghost.depth=Door.depth
Ghost.depth+=1
Door.lifetime=750
Climber.lifetime=750
DoorsGroup.add(Door)
ClimberGroup.add(Climber)

}
}