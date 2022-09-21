var player,edges
var gamestate
var cube,cubegroup
var lives

function preload(){ } 

function setup() { 
  createCanvas(1000,1000); 
  edges=createEdgeSprites();
  player=createSprite(500,900,50,50)
  gamestate="play"
  lives = 5

  cubegroup=new Group()

} 

function draw() { 
  background("Black"); 
  
  textSize(30)
  text("LIVES "+lives, 850,50)
  
  if(gamestate==="play"){
    spawncubes();
    if(keyDown(RIGHT_ARROW)){
      player.x+=5;
      player.width+=0.5
      player.height+=0.5
    }
    if(keyDown(LEFT_ARROW)){
      player.x-=5;
      player.width-=0.5
      player.height-=0.5
    }

    player.overlap(cubegroup,function(collector,collected){
      collected.remove()
      lives=lives-1
    })
    
  
    player.bounceOff(edges)
    drawSprites(); 

    if(player.width===100 || player.width===5 || lives===0){
      gamestate="end"
    }
  }
  

  else if(gamestate==="end"){
    textSize(30)
    text("Game Over!",500,500)
  }
}


function spawncubes(){
  if(frameCount %4===0){
    var x=random(10,950)
    cube=createSprite(x,-10,10,10);
    cube.shapeColor='Red'
    cube.velocityY=12
    cubegroup.add(cube)
  }
}