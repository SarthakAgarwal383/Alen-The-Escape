var boyR,boyL,boyU,boyD;
var edges;
var bg1,bg2;
var boy,ins,inss,back,backImg,doorImg,door1img,door2img,door3img;
var gameState="ins";
var codeblock;
var bag,bag1,door,door1,door2,door3;
var blindSpot,star,block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12;
var starImg,star,star2,star3;;
var code,code2,code3,code1Img,code2Img,code3Img;
var backB,backB2,backB3;
var code1Door,doorImgcode1,code2Door,code3door;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall21,wall10,wall11,wall12,wall13,wall14;
var wall15,wall16,wall17,wall18,wall19,wall20;
var blackScreen2,balckScreen3;
var timeLeft=600;
var partition1,partition2,partition3,alien1Img,alien2Img,alien2Img;
var booth,boothImg,launcher1,launcher2,launcher3,alien1,alien2,alien3;
var gun,gunImg,launcherImg;
var wallImg,yellowImg,blockImg;
var bulletImg,bullet;
var alien1Group,alien2Group,alien3Group,bulletGroup,bullet2Group;
var score=0;
var alien4Img,alien4;
var bullet2,white1,white2;
var eg=1;
var fg=100;
var gunHealth,alienHealth;
var calculatorImg, oneImg,twoImg,threeImg,fourImg,fiveImg,sixImg,sevenImg,eightImg,nineImg;
var calculator,one,two,three,four,five,six,seven,eight,nine;
var dotImg,dot1,dot2,dot3;
var ts=0;
var tt=1;
var errorImg,error;
var ccCodeImg,ccCode;
var th=100;
var tk=100;
var Victory,VictoryImg;
var reset,resetImg;
var goImg;
var GameOverImg, GameOver;
var ins1,ins2,ins3,ins1Img,ins2Img,ins3Img;
var crossImg,cross1,cross2,cross3;
var thrustSound,ShuttleSound,TeleportingSound,GameOverSound,GameOver1Sound;
var victorySound,victorySound1;
var min;
var sec;
var t=0;
var s=0;
var u=0;
var v=0;
var i=0;
var p=0;
var StarSound,gunSound,typingSound;
var hitingSound,alienEntry;
var scoreSound,warningSound,wallHitting,boothTouching,bumpSound,doorOpen;
var maindoor,crossSound;

function preload(){
boyR=loadImage("images/abNew1.png");
boyL=loadImage("images/abLeftNew.png");
boyU=loadImage("images/adDown4.png");
boyD=loadImage("images/abUp1.png");
bg1=loadImage("images/sci.jpg");
bg2=loadImage("images/sci floor.jpg");
ins=loadImage("images/inss.png");
backImg=loadImage("images/back.png");
doorImg=loadImage("images/door.jpg")
door1img=loadImage("images/door11.jpg");
door2img=loadImage("images/door2.jpg");
door3img=loadImage("images/door3.jpg");
starImg=loadImage("images/star.png");
code1Img=loadImage("images/code.jpg");
code2Img=loadImage("images/code2.jpg");
code3Img=loadImage("images/code3.jpg");
doorImgcode1=loadImage("images/door2.jpg");
gunImg=loadImage("images/GunImg.png");
alien1Img=loadImage("images/alien1.png");
alien2Img=loadImage("images/alien2.png");
alien3Img=loadImage("images/alien3.png");
boothImg=loadImage("images/booth.png");
launcherImg=loadImage("images/launcher.png");
wallImg=loadImage("images/partition.jpg");
yellowImg=loadImage("images/yelloLine1.png");
blockImg=loadImage("images/block.jpg");
bulletImg=loadImage("images/bullet.png");
alien4Img=loadImage("images/alienEnemy.png");
calculatorImg=loadImage("images/calculator.png");
oneImg=loadImage("images/one.png");
twoImg=loadImage("images/two.png");
threeImg=loadImage("images/three.png");
fourImg=loadImage("images/four.png");
fiveImg=loadImage("images/five.png");
sixImg=loadImage("images/six.png");
sevenImg=loadImage("images/seven.png");
eightImg=loadImage("images/eight.png");
nineImg=loadImage("images/nine.png");
dotImg=loadImage("images/dot.png");
errorImg=loadImage("images/errorCode.png");
ccCodeImg=loadImage("images/correctCode.png");
VictoryImg=loadImage("images/Victory.png");
resetImg=loadImage("images/reset.png");
goImg=loadImage("images/Go.png");
GameOverImg=loadImage("images/GameOver.png");
ins1Img=loadImage("images/instruction1.png");
ins2Img=loadImage("images/instruction2.png");
ins3Img=loadImage("images/instruction3.png");
crossImg=loadImage("images/cross.png");
thrustSound=loadSound("sounds/thrustSound1111.mp3");
ShuttleSound=loadSound("sounds/ShuttleVoice1.mp3")
TeleportingSound=loadSound("sounds/teleporting.mp3");
GameOverSound=loadSound("sounds/GameOver.mp3");
GameOver1Sound=loadSound("sounds/GameOver1.mp3");
StarSound=loadSound("sounds/StarSound.mp3");
victorySound=loadSound("sounds/Victory.mp3");
victorySound1=loadSound("sounds/Victory1.mp3");
gunSound=loadSound("sounds/gunSound.mp3");
typingSound=loadSound("sounds/typingSound.mp3");
hitingSound=loadSound("sounds/hitingSound.mp3");
alienEntry=loadSound("sounds/alienEntry.wav");
scoreSound=loadSound("sounds/score.wav");
warningSound=loadSound("sounds/emergency.mp3");
wallHitting=loadSound("sounds/wallHitting.mp3");
boothTouching=loadSound("sounds/boothTouching.wav");
bumpSound=loadSound("sounds/bump.wav");
doorOpen=loadSound("sounds/doorOpen.mp3");
maindoor=loadSound("sounds/maindoor.mp3");
crossSound=loadSound("sounds/crossSound.mp3")
}


function setup() {
  createCanvas(1375, 670);

 alien1Group=createGroup();
 alien2Group=createGroup();
 alien3Group=createGroup();
 bulletGroup=createGroup();
 bullet2Group=createGroup();

  inss=createSprite(650,340,10,10);
  inss.addImage(ins);
  inss.scale= 1;

  ins1=createSprite(1375/2,340,10,10);
  ins1.addImage(ins1Img);
  ins1.visible=false;

  ins2=createSprite(1375/2,340,10,10);
  ins2.addImage(ins2Img);
  ins2.visible=false;
  
  ins3=createSprite(1375/2,340,10,10);
  ins3.addImage(ins3Img);
  ins3.visible=false;

  cross1=createSprite(930,180,10,10);
  cross1.addImage(crossImg);
  cross1.visible=false;

  cross2=createSprite(930,180,10,10);
  cross2.addImage(crossImg);
  cross2.visible=false;

  cross3=createSprite(940,170,10,10);
  cross3.addImage(crossImg);
  cross3.visible=false;

  back=createSprite(1020,590,10,10);
  back.addImage(goImg);
  back.scale= 0.7;

   bag=createSprite(400,300,10,10);
  bag.addImage(bg1);
  bag.scale= 4;
  bag.visible= false;

 bag1=createSprite(1300,300,10,10);
  bag1.addImage(bg1);
  bag1.scale= 4;
  bag1.visible=false;

  boy=createSprite(650,350,10,10);
  boy.addImage(boyR);
  boy.scale= 0.5;
  boy.visible=false;
  //boy.debug=true;
  boy.setCollider("rectangle",0,0,200,300);
  

  door=createSprite(1300,320,10,10);
  door.addImage(doorImg);
  door.scale= 5;
  door.visible=false;
  
  door1=createSprite(30,320,10,10);
  door1.addImage(door2img);
  door1.scale= 1;
  door1.visible=false;

  door2=createSprite(650,30,10,10);
  door2.addImage(door3img);
  door2.scale= 1;
  door2.visible=false;
 
  door3=createSprite(650,640,10,10);
  door3.addImage(door1img);
  door3.scale= 1;
  door3.visible=false;

 blackScreen=createSprite(1375/2,670/2,1375,670);
 blackScreen.shapeColor="black";
 blackScreen.visible= false;

 blackScreen2=createSprite(1375/2,670/2,1375,670);
 blackScreen2.shapeColor="black";
 blackScreen2.visible= false;

 blackScreen3=createSprite(1375/2,670/2,1375,670);
 blackScreen3.shapeColor="black";
 blackScreen3.visible= false; 

 star=createSprite(1200,350,10,10);
 star.addImage(starImg);
 star.depth= blackScreen.depth-1;
 star.visible= false;

 star2=createSprite(100,200,10,10);
 star2.addImage(starImg);
 star2.depth= blackScreen.depth-1;
 star2.visible= false;

 star3=createSprite(1300,300,10,10);
 star3.addImage(starImg);
 star3.depth= blackScreen2.depth-1;
 star3.visible= false;

 code=createSprite(1375/2,670/2-50,10,10);
 code.addImage(code1Img);
code.visible=false;

code2=createSprite(1375/2,670/2-50,10,10);
code2.addImage(code2Img);
code2.visible=false;

code3=createSprite(1375/2,670/2-50,10,10);
code3.addImage(code3Img);
code3.visible=false;

backB=createSprite(930,440,10,10);
backB.addImage(backImg);
backB.visible= false;
backB.scale=0.5;

backB2=createSprite(930,400,10,10);
backB2.addImage(backImg);
backB2.visible= false;
backB2.scale=0.5;

backB3=createSprite(930,400,10,10);
backB3.addImage(backImg);
backB3.visible= false;
backB3.scale=0.5;

code1Door=createSprite(1350,670/2-70,10,10);
code1Door.addImage(doorImgcode1);
code1Door.visible=false;

code2Door=createSprite(25,670/2+100,10,10);
code2Door.addImage(doorImgcode1);
code2Door.visible=false;

code3Door=createSprite(1350,670/2+160,10,10);
code3Door.addImage(doorImgcode1);
code3Door.visible=false;

Victory=createSprite(1375/2,330,1,1);
Victory.visible=false;
Victory.addImage(VictoryImg);

GameOver=createSprite(1375/2,330,1,1);
GameOver.visible=false;
GameOver.addImage(GameOverImg);

wall21=createSprite(1375/2,665,1375,10);
wall21.visible=true;

reset=createSprite(1150,600,10,10);
reset.visible=false;
reset.addImage(resetImg);
reset.scale=0.5;

maze();
blockS();
code2Sprites();

}

function draw() {
  background("white");

 edges= createEdgeSprites();
  

  if(mousePressedOver(back) && gameState==="ins"){
    inss.destroy();
    back.lifetime=1;
    gameState="community";
  }

  if(gameState==="community"){
    background("white")
    


    door.visible=true;
  door1.visible=true;
    bag1.visible=true;
    bag.visible=true;
   door2.visible=true;
   door3.visible=true; 
   boy.visible=true;

   boy.bounceOff(wall6);
boy.bounceOff(wall7);
boy.bounceOff(wall8);
boy.bounceOff(wall9);



 /*  if(boy.isTouching(edges[1]) || boy.isTouching(edges[2])|| boy.isTouching(edges[3])
   || boy.isTouching(edges[4]) ){
     boy.bounceOff(edges[1]);
     boy.bounceOff(edges[2]);
     boy.bounceOff(edges[3]);
     boy.bounceOff(edges[4]);
   }
   */
   if(keyDown(LEFT_ARROW)){
    boy.x=boy.x-20;
    boy.addImage(boyL);
    boy.scale=0.5;
    thrustSound.play();
  }
  
  if(keyDown(RIGHT_ARROW)){
    boy.x=boy.x+20;
    boy.addImage(boyR);
    boy.scale=0.5;
    thrustSound.play();
  }

    if(keyDown(UP_ARROW)){
      boy.y=boy.y-20;
      boy.x= boy.x+3;
      boy.addImage(boyD);
      boy.scale=0.3;
      thrustSound.play();
    }
  
    if(keyDown(DOWN_ARROW)){
      boy.y=boy.y+20;
      boy.x= boy.x-5;
      boy.addImage(boyU);
      boy.scale=0.3;
      thrustSound.play();
    }
    
 
    if(boy.isTouching(door1)){
      //blackScreen.visible= true;
      
      gameState="code1";
      s=s+1;
       if(s===0){
         TeleportingSound.play();
       }
    }
    if(boy.isTouching(door2)){
      gameState="code2";
      s=s+1;
      if(s===0){
        TeleportingSound.play();
      }
    }
    if(boy.isTouching(door3)){
      gameState="code3";
      s=s+1
      if(s===0){
        TeleportingSound.play();
      }
    }
    if(boy.isTouching(door)){
      maindoor.play();
    }
   }
  if(gameState==="code1"){
    s=s+1;
    if(s>5 && s<80){
      TeleportingSound.play();
    }
ins1.visible=true;
cross1.visible=true;
ins1.depth=block1.depth+1;
cross1.depth=ins1.depth+1;
cross1.scale=0.1;
    blackScreen.visible= true;
    door.visible= false;
    door1.visible= false; 
    door2.visible= false;
    door3.visible= false;

    blackScreen.velocityX=-10;
if(mousePressedOver(cross1)){
  ins1.destroy();
  cross1.destroy();
  crossSound.play();
}

    bag.visible= true;
    bag1.visible= true;

    block1.visible=true;
    block1.depth=bag.depth+1;
    block1.depth=bag1.depth+1; 

    block2.visible=true;
    block2.depth=bag.depth+1;
    block2.depth=bag1.depth+1; 

    block3.visible=true;
    block3.depth=bag.depth+1;
    block3.depth=bag1.depth+1; 
    block4.visible=true;
    block4.depth=bag.depth+1;
    block4.depth=bag1.depth+1; 
    block5.visible=true;
    block5.depth=bag.depth+1;
    block5.depth=bag1.depth+1; 
    block6.visible=true;
    block6.depth=bag.depth+1;
    block6.depth=bag1.depth+1; 
    block7.visible=true;
    block7.depth=bag.depth+1;
    block7.depth=bag1.depth+1; 
    block8.visible=true;
    block8.depth=bag.depth+1;
    block8.depth=bag1.depth+1; 
    block9.visible=true;
    block9.depth=bag.depth+1;
    block9.depth=bag1.depth+1; 
    block10.visible=true;
    block10.depth=bag.depth+1;
    block10.depth=bag1.depth+1; 
    block11.visible=true;
    block11.depth=bag.depth+1;
    block11.depth=bag1.depth+1; 
    block12.visible=true;
    block12.depth=bag.depth+1;
    block12.depth=bag1.depth+1; 

    star.visible= true;
    code1Door.visible= true;

    boy.depth=blackScreen.depth-1;

    boy.bounceOff(wall6);
boy.bounceOff(wall7);
boy.bounceOff(wall8);
boy.bounceOff(wall9);

    if(keyDown(UP_ARROW)){
      boy.y=boy.y-20;
      boy.x= boy.x+3;
      boy.addImage(boyD);
      boy.scale=0.3;
      thrustSound.play();
    }
    if(keyDown(DOWN_ARROW)){
      boy.y=boy.y+20;
      boy.addImage(boyU);
      boy.scale=0.3;
      thrustSound.play();
    }
    
    if(keyDown(LEFT_ARROW)){
      boy.x=boy.x-20;
      boy.addImage(boyL);
      boy.scale=0.5;
      thrustSound.play();
    }
    
    if(keyDown(RIGHT_ARROW)){
      boy.x=boy.x+20;
      boy.addImage(boyR);
      boy.scale=0.5;
      thrustSound.play();
    }
    
    if(boy.isTouching(block6) || boy.isTouching(block9) || boy.isTouching(block4)
    || boy.isTouching(block10))
    {
  hitingSound.play();
      block1.destroy();
      block2.destroy();
      block3.destroy();
      block4.destroy();
      block5.destroy();
      block6.destroy();
      block7.destroy();
      block8.destroy();
      block9.destroy();
      block10.destroy();
      block11.destroy();
      block12.destroy();
      gameState="End";
      GameOverSound.play();
      GameOver1Sound.play();
    }

    if(boy.isTouching(star)){

      code.visible=true;
      code.depth=block1.depth+1;
      code.depth=block2.depth+1;
      code.depth=block3.depth+1;
      code.depth=block4.depth+1;
      code.depth=block5.depth+1;
      code.depth=block6.depth+1;
      code.depth=block7.depth+1;
      code.depth=block8.depth+1;
      code.depth=block9.depth+1;
      code.depth=block10.depth+1;
      code.depth=block11.depth+1;
      code.depth=block12.depth+1;
      backB.visible=true;
      backB.depth=code.depth+1;

      StarSound.play();

    }
    if(mousePressedOver(backB)){
      code.visible=false;
      backB.visible=false;
      star.destroy();
    }
    if(boy.isTouching(code1Door)){
      gameState="community1";
    }
  }
if(gameState==="community1"){
  background("white")
    
  block1.destroy();
  block2.destroy();
  block3.destroy();
  block4.destroy();
  block5.destroy();
  block6.destroy();
  block7.destroy();
  block8.destroy();
  block9.destroy();
  block10.destroy();
  block11.destroy();
  block12.destroy();
  code1Door.destroy();


  door.visible=true;
//door1.visible=true;
  bag1.visible=true;
  bag.visible=true;
 door2.visible=true;
 door3.visible=true; 
 boy.visible=true;

 boy.bounceOff(wall6);
boy.bounceOff(wall7);
boy.bounceOff(wall8);
boy.bounceOff(wall9);

 //boy.x=200;

  if(keyDown(UP_ARROW)){
    boy.y=boy.y-20;
    boy.x= boy.x+3;
    boy.addImage(boyD);
    boy.scale=0.3;
    thrustSound.play();
  }
  if(keyDown(DOWN_ARROW)){
    boy.y=boy.y+20;
    boy.x= boy.x-5;
    boy.addImage(boyU);
    boy.scale=0.3;
    thrustSound.play();
  }
  
  if(keyDown(LEFT_ARROW)){
    boy.x=boy.x-20;
    boy.addImage(boyL);
    boy.scale=0.5;
    thrustSound.play();
  }
  
  if(keyDown(RIGHT_ARROW)){
    boy.x=boy.x+20;
    boy.addImage(boyR);
    boy.scale=0.5;
    thrustSound.play();
  }
  if(boy.isTouching(door2)){
    gameState="code2";
  }
  if(boy.isTouching(door3)){
    gameState="code3";
  }
  if(boy.isTouching(door)){
    maindoor.play();
  }
}
if(gameState==="code2"){

  u=u+1;
  if(u>5 && u<80){
    TeleportingSound.play();
  }
  boy.depth=blackScreen3.depth-1;
  blackScreen3.visible=true;
  blackScreen3.velocityX=-10;
  door.visible= false;
door1.visible= false; 
door2.visible= false;
door3.visible= false;
ins2.visible=true;
cross2.visible=true;
ins2.depth=partition1.depth+1;
cross2.depth=ins2.depth+1;
cross2.scale=0.1;
blackScreen3.depth=cross2.depth+1;

if(mousePressedOver(cross2)){
ins2.destroy();
cross2.destroy();
crossSound.play();
}
partition1.visible=true;
partition2.visible=true;
partition3.visible=true;
booth.visible=true;
star3.visible=true;
code3Door.visible=true;

if(boy.isTouching(star3)){
  code2.visible=true;
 backB3.visible=true;

 StarSound.play();
}
if(mousePressedOver(backB3)){
  code2.destroy();
  backB3.destroy();
  star3.destroy();
}
if(boy.isTouching(code3Door)){
  gameState="community2";
}




boy.bounceOff(partition1);
boy.bounceOff(partition2);
boy.bounceOff(partition3);
boy.bounceOff(wall6);
boy.bounceOff(wall7);
boy.bounceOff(wall8);
boy.bounceOff(wall9);

gun.bounceOff(booth);

if(boy.isTouching(booth)){
  gun.visible=true;
  launcher1.visible=true;
  launcher2.visible=true;
  launcher3.visible=true;
  gun.y=mouseY;
  //boothTouching.play();

  if(score<21){
  aliens();
  }
 // bullets();
 
}
if(keyDown("space")){
  bullets();
  gunSound.play();
}
if(bulletGroup.isTouching(alien1Group)){
  alien1Group.destroyEach();
 bulletGroup.destroyEach();
 score++;
 scoreSound.play();
 hitingSound.play();
}
if(bulletGroup.isTouching(alien2Group)){
  alien2Group.destroyEach();
  bulletGroup.destroyEach();
  score++;
  scoreSound.play();
  hitingSound.play();
}
if(bulletGroup.isTouching(alien3Group)){
  alien3Group.destroyEach();
  bulletGroup.destroyEach();
  score++
  scoreSound.play();
  hitingSound.play();
}
if(alien1Group.isTouching(gun)){
  gameState="End";
  alien1Group.destroyEach();
  alien2Group.destroyEach();
  alien3Group.destroyEach();
  gun.destroy();
  hitingSound.play();
  GameOverSound.play();
  GameOver1Sound.play();
}
if(alien2Group.isTouching(gun)){
  gameState="End";
  alien1Group.destroyEach();
  alien2Group.destroyEach();
  alien3Group.destroyEach();
  gun.destroy();
  hitingSound.play();
  GameOverSound.play();
  GameOver1Sound.play();
}
if(alien3Group.isTouching(gun)){
  gameState="End";
  alien1Group.destroyEach();
  alien2Group.destroyEach();
  alien3Group.destroyEach();
  gun.destroy();
  hitingSound.play();
  GameOverSound.play();
  GameOver1Sound.play();

}

alien4.bounce(partition1);


if(score>=20){

  i=i+1;
  if(i===1){
    alienEntry.play();
  }
alien4.visible=true;
gunHealth.visible=true;
alienHealth.visible=true;
white1.visible=true;
white2.visible=true;
alien4.velocityX=-5;
alienHealth.depth=white1.depth+1;
gunHealth.depth=white2.depth+1;

alien1Group.destroyEach();
alien2Group.destroyEach();
alien3Group.destroyEach();
bullets2();
//alien4.velocityY=5;

alien4.velocityX=-5;

if(World.frameCount%10===0){
alien4.y=random(300,600);
}
if(bulletGroup.isTouching(alien4)){

  alienHealth.x=alienHealth.x-5;
  alienHealth.width=alienHealth.width-10;
  bulletGroup.destroyEach();
  bumpSound.play();
}
if(bullet2Group.isTouching(gun)){

  gunHealth.x=gunHealth.x-10;
  gunHealth.width=gunHealth.width-20;
  bullet2Group.destroyEach();
  bumpSound.play();
}
if(gunHealth.width===0){
  gunHealth.x=gunHealth.x-0;
  gunHealth.width=gunHealth.width-0;
  alienHealth.x=alienHealth.x-0;
  alienHealth.width=alienHealth.width-0;
  alienHealth.destroy();
  gameState="End";
  GameOverSound.play();
  GameOver1Sound.play();
}
if(alienHealth.width===0){
  gunHealth.x=gunHealth.x-0;
  gunHealth.width=gunHealth.width-0;
  alienHealth.x=alienHealth.x-0;
  alienHealth.width=alienHealth.width-0;
  alien4.destroy();
  alienHealth.destroy();
  gunHealth.destroy();
  white1.destroy();
  white2.destroy();
  bullet.destroy();
  bullet2.destroy();
  partition3.velocityY=-10;
  partition3.lifeTime=50;
p=p+1
if(p===1){
  doorOpen.play();
}
}

}


if(alien4.x===670){
  alien4.velocityX=0;

}




  
  if(keyDown(UP_ARROW)){
    boy.y=boy.y-20;
    boy.x= boy.x+3;
    boy.addImage(boyD);
    boy.scale=0.3;
    thrustSound.play();
  }
  if(keyDown(DOWN_ARROW)){
    boy.y=boy.y+20;
    boy.x= boy.x-5;
    boy.addImage(boyU);
    boy.scale=0.3;
    thrustSound.play();
  }
  
  if(keyDown(LEFT_ARROW)){
    boy.x=boy.x-20;
    boy.addImage(boyL);
    boy.scale=0.5;
    thrustSound.play();
  }
  
  if(keyDown(RIGHT_ARROW)){
    boy.x=boy.x+20;
    boy.addImage(boyR);
    boy.scale=0.5;
    thrustSound.play();
  }



}

if(gameState==="community2"){

 booth.destroy();
 partition1.destroy();
 partition2.destroy();
 partition3.destroy();
 star3.destroy();
 launcher1.destroy();
 launcher2.destroy();
 launcher3.destroy();
 gun.destroy();
  code3Door.destroy();


  door.visible=true;
//door1.visible=true;
  bag1.visible=true;
  bag.visible=true;
 //door2.visible=true;
 door3.visible=true; 
 boy.visible=true;
 if(boy.isTouching(door3)){
   gameState="code3";
 }
 if(keyDown(UP_ARROW)){
  boy.y=boy.y-20;
  boy.x= boy.x+3;
  boy.addImage(boyD);
  boy.scale=0.3;
  thrustSound.play();
}
if(keyDown(DOWN_ARROW)){
  boy.y=boy.y+20;
  boy.x= boy.x-5;
  boy.addImage(boyU);
  boy.scale=0.3;
  thrustSound.play();
}

if(keyDown(LEFT_ARROW)){
  boy.x=boy.x-20;
  boy.addImage(boyL);
  boy.scale=0.5;
  thrustSound.play();
}

if(keyDown(RIGHT_ARROW)){
  boy.x=boy.x+20;
  boy.addImage(boyR);
  boy.scale=0.5;
  thrustSound.play();
}
if(boy.isTouching(door)){
  maindoor.play();
}
}

if(gameState==="code3"){

  blackScreen2.visible= true;
blackScreen2.velocityX= -10;
door.visible= false;
door1.visible= false; 
door2.visible= false;
door3.visible= false;

ins3.visible=true;
cross3.visible=true;

ins3.depth=wall1.depth+1;
cross3.depth=ins3.depth+1;
cross3.scale=0.1;
blackScreen2.depth=cross3.depth+1;

if(boy.x-wall1.x<=200 && wall1.x-boy.x<=200 &&
  boy.y-wall1.y<=200 && wall1.y-boy.y<=200){
wall1.visible=true;
  }
  else{
    wall1.visible= false;
  }
  if(boy.x-wall2.x<=200 && wall2.x-boy.x<=200 &&
    boy.y-wall2.y<=200 && wall2.y-boy.y<=200){
wall2.visible=true;
    }
    else{
      wall2.visible=false;
    }
if(boy.x-wall3.x<=200 && wall3.x-boy.x<=200 &&
    boy.y-wall3.y<=200 && wall3.y-boy.y<=200){
        wall3.visible=true;
      }
    else{
      wall3.visible=false;
    }
    if(boy.x-wall4.x<=200 && wall4.x-boy.x<=200 &&
      boy.y-wall4.y<=200 && wall4.y-boy.y<=200){
        wall4.visible=true;
      }
    else{
      wall4.visible=false;
    }

    if(boy.x-wall5.x<=200 && wall5.x-boy.x<=200 &&
      boy.y-wall5.y<=200 && wall5.y-boy.y<=200){
        wall5.visible=true;
      }
      else{
        wall5.visible=false;
      }
      if(boy.x-wall10.x<=200 && wall10.x-boy.x<=200 &&
        boy.y-wall10.y<=200 && wall10.y-boy.y<=200){
          wall10.visible=true;
        }
        else{
          wall10.visible=false;
        }

        if(boy.x-wall11.x<=200 && wall11.x-boy.x<=200 &&
          boy.y-wall11.y<=200 && wall11.y-boy.y<=200){
            wall11.visible=true;
          }
          else{
            wall11.visible=false;
          }
          if(boy.x-wall12.x<=200 && wall12.x-boy.x<=200 &&
            boy.y-wall12.y<=200 && wall12.y-boy.y<=200){
              wall12.visible=true;
            }
            else{
              wall12.visible=false;
            }

            if(boy.x-wall13.x<=200 && wall13.x-boy.x<=200 &&
              boy.y-wall13.y<=200 && wall13.y-boy.y<=200){
                wall13.visible=true;
              }
              else{
                wall13.visible=false;
              }
              if(boy.x-wall14.x<=200 && wall14.x-boy.x<=200 &&
                boy.y-wall14.y<=200 && wall14.y-boy.y<=200){
                  wall14.visible=true;
                }
                else{
                  wall14.visible=false;
                }
                if(boy.x-wall15.x<=200 && wall15.x-boy.x<=200 &&
                  boy.y-wall15.y<=200 && wall15.y-boy.y<=200){
                    wall15.visible=true;
                  }
                  else{
                    wall15.visible=false;
                  }
                  if(boy.x-wall16.x<=200 && wall16.x-boy.x<=200 &&
                    boy.y-wall16.y<=200 && wall16.y-boy.y<=200){
                      wall16.visible=true;
                    }
                    else{
                      wall6.visible=false;
                    }
                    if(boy.x-wall17.x<=200 && wall17.x-boy.x<=200 &&
                      boy.y-wall17.y<=200 && wall17.y-boy.y<=200){
                        wall17.visible=true;
                      }
                      else{
                        wall17.visible=false;
                      }
                      if(boy.x-wall18.x<=200 && wall18.x-boy.x<=200 &&
                        boy.y-wall18.y<=200 && wall18.y-boy.y<=200){
                          wall18.visible=true;
                        }
                        else{
                          wall18.visible=false;
                        }
                        if(boy.x-wall19.x<=200 && wall19.x-boy.x<=200 &&
                          boy.y-wall19.y<=200 && wall19.y-boy.y<=200){
                            wall19.visible=true;
                          }
                          else{
                            wall19.visible=false;
                          }

if(boy.x-wall20.x<=200 &&wall20.x-boy.x<=200 &&
  boy.y-wall20.y<=200 && wall20.y-boy.y<=200){
wall20.visible=true;
  }
  else{
    wall20.visible=false;
  }
  star2.visible=true;
  code2Door.visible=true;
  code2Door.depth=blackScreen2.depth-1;

  if(mousePressedOver(cross3)){
  timeLeft=timeLeft-1;
  cross3.destroy();
  ins3.destroy();
  crossSound.play();
  }
  if(boy.x>700 || boy.x<600){
    timeLeft=timeLeft-1;
  }

boy.bounceOff(wall1);
boy.bounceOff(wall2);
boy.bounceOff(wall3);
boy.bounceOff(wall4);
boy.bounceOff(wall5);
boy.bounceOff(wall6);
boy.bounceOff(wall7);
boy.bounceOff(wall8);
boy.bounceOff(wall9);
boy.bounceOff(wall10);
boy.bounceOff(wall11);
boy.bounceOff(wall12);
boy.bounceOff(wall13);
boy.bounceOff(wall14);
boy.bounceOff(wall15);
boy.bounceOff(wall16);
boy.bounceOff(wall17);
boy.bounceOff(wall18);
boy.bounceOff(wall19);
boy.bounceOff(wall20);


//timeLeft=timeLeft-1;
if(timeLeft<100 ){
  v=v+1;
  if(v==1){
  warningSound.play();
  }
}
if(timeLeft===0){
  gameState="End";
  warningSound.stop();
  GameOverSound.play();
  GameOver1Sound.play();
}

if(keyDown(UP_ARROW)){
  boy.y=boy.y-20;
  boy.x= boy.x+3;
  boy.addImage(boyD);
  boy.scale=0.3;
  thrustSound.play();
}
if(keyDown(DOWN_ARROW)){
  boy.y=boy.y+20;
  boy.x= boy.x-5;
  boy.addImage(boyU);
  boy.scale=0.3;
  thrustSound.play();
}

if(keyDown(LEFT_ARROW)){
  boy.x=boy.x-20;
  boy.addImage(boyL);
  boy.scale=0.5;
  thrustSound.play();
}

if(keyDown(RIGHT_ARROW)){
  boy.x=boy.x+20;
  boy.addImage(boyR);
  boy.scale=0.5;
  thrustSound.play();
}
if(boy.isTouching(star2)){
  code3.visible=true;
  backB2.visible=true;
 // timeLeft=timeLeft+0;
 StarSound.play();
}

if(mousePressedOver(backB2)){
  star2.destroy();
  code3.destroy();
  backB2.destroy();
}
if(boy.isTouching(code2Door)){
  gameState="community3";
}
boy.depth=blackScreen2.depth-1;
}
if(gameState==="community3"){

  wall1.destroy();
  wall2.destroy();
  wall3.destroy();
  wall4.destroy();
  wall5.destroy();
  wall10.destroy();
  wall11.destroy();
  wall12.destroy();
  wall13.destroy();
  wall14.destroy();
  wall15.destroy();
  wall16.destroy();
  wall17.destroy();
  wall18.destroy();
  wall19.destroy();
  wall20.destroy();
  code2Door.destroy();

  door.visible=true;
//door1.visible=true;
  bag1.visible=true;
  bag.visible=true;
 //door2.visible=true;
 //door3.visible=true; 
 boy.visible=true;
 if(keyDown(UP_ARROW)){
  boy.y=boy.y-20;
  boy.x= boy.x+3;
  boy.addImage(boyD);
  boy.scale=0.3;
  
  thrustSound.play();
}
if(keyDown(DOWN_ARROW)){
  boy.y=boy.y+20;
  boy.x= boy.x-5;
  boy.addImage(boyU);
  boy.scale=0.3;
  thrustSound.play();
}

if(keyDown(LEFT_ARROW)){
  boy.x=boy.x-20;
  boy.addImage(boyL);
  boy.scale=0.5;
  thrustSound.play();
}


if(keyDown(RIGHT_ARROW)){
  boy.x=boy.x+20;
  boy.addImage(boyR);
  boy.scale=0.5;
  thrustSound.play();
}
if(boy.isTouching(door)){
  calculator.visible=true;
  one.visible=true;
  two.visible=true;
  three.visible=true;
  four.visible=true;
  five.visible=true;
 six.visible=true;
  seven.visible=true;
  eight.visible=true;
  nine.visible=true; 

  if(mousePressedOver(one)){
   // dot1.visible=true;
    ts=ts+1;
   // typingSound.loop=false;
  
   typingSound.play();
  }
  if(mousePressedOver(two)){
    ts=ts+1;
    typingSound.play();
  }
  if(mousePressedOver(three)){
    ts=ts+1;
    typingSound.play();
  }
  if(mousePressedOver(four)){
    ts=ts+1;
    typingSound.play();
  }
  if(mousePressedOver(five)){
    ts=ts+1;
    typingSound.play();
    //ts2=1;
  }
  if(mousePressedOver(six)){
    ts=ts+1;
    typingSound.play();

  }
  if(mousePressedOver(seven)){
    ts=ts+1;
    typingSound.play();
  }
  if(mousePressedOver(eight)){
    ts=ts+1;
    typingSound.play();
  }
  if(mousePressedOver(nine)){
    ts=ts+1;
    typingSound.play();
    //ts1=1;
    tt=2;
  }
  if(ts===6){
    dot1.visible=true;
    dot1.depth=calculator.depth+1;
  }
  if(ts===12){
    dot2.visible=true;
    dot2.depth=calculator.depth+1;
  }
  if(ts===18){
    dot3.visible=true;
    dot3.depth=calculator.depth+1;
  }
if(mousePressedOver(five) && tt===2){
tt=3;
}
if(mousePressedOver(three) && tt===3){
  tt=5;
}

if(tt>4 && dot3.visible===true){
  //gameState="Victory";
  ccCode.visible=true;
  dot1.depth=ccCode.depth+1;
  dot2.depth=ccCode.depth+1;
  dot3.depth=ccCode.depth+1;
  tk=tk-5;

  /*if(mousePressedOver(bag1)|| mousePressedOver(bag)){
    calculator.destroy();
    one.destroy();
    two.destroy();
    three.destroy();
    four.destroy();
    five.destroy();
    six.destroy();
    seven.destroy();
    eight.destroy();
    nine.destroy();
    dot1.destroy();
    dot2.destroy();
    dot3.destroy();
    ccCode.destroy();
  }*/
  if(tk===0){
    gameState="Victory";
  }
}
else if(tt !=5 && dot3.visible===true){
  error.visible=true;
  th=th-5;
 
if(th===5){
  gameState="End";
  GameOverSound.play();
  GameOver1Sound.play();
}
 /* if(th===1){
    error.visible=false;
    dot1.visible=false;
    dot2.visible=false;
    dot3.visible=false;
    ts=0;
    th=99;
   // tk=tk-1;
  }
  if(th===0){
    gameState="End";
  }
  */
}


}
if(gameState==="Victory"){
  Victory.visible=true;
 // var button= createButton("Reset");
 // button.mousePressed(setup);
 // reset.visible=true;
  Victory.scale=1.2;
  calculator.destroy();
  one.destroy();
  two.destroy();
  three.destroy();
  four.destroy();
  five.destroy();
  six.destroy();
  seven.destroy();
  eight.destroy();
  nine.destroy();
  dot1.destroy();
  dot2.destroy();
  dot3.destroy();
  ccCode.destroy();
victorySound1.play();
victorySound.play();
 
}

}

if(gameState==="End"){
  GameOver.visible=true;
  GameOver.depth=alien4.depth+1;
  u=u+1;
  if(u===1){
  GameOverSound.play();
  GameOver1Sound.play();
  }
}

console.log(error.lifeTime);


  drawSprites();

  if(gameState==="community" ){
  textSize(50);
  fill("white");
  text("D",70,250);
  text("O",70,290);
  text("O",70,330);
  text("R",70,370);
  text("1",70,410);
  text("DOOR 2",570,100);
  text("DOOR 3",570,590);
  if(boy.isTouching(door)){
    textSize(30);
    fill("red");
    text("First You Need To Collect All Codes",450,150);
  }
  }
  if(gameState==="community1" ){
    textSize(50);
    fill("white");
 
    text("DOOR 2",570,100);
    text("DOOR 3",570,590);
    if(boy.isTouching(door)){
      textSize(30);
      fill("red");
      text("First You Need To Collect All Codes",450,150);
    }
    }
    if(gameState==="community2" ){
      textSize(50);
      fill("white");
   
     // text("DOOR 2",570,100);
      text("DOOR 3",570,590);
      if(boy.isTouching(door)){
        textSize(30);
        fill("red");
        text("First You Need To Collect All Codes",450,150);
      }
      }
    if(gameState==="code3" && blackScreen2.x<-400){
      textSize(25);
      fill("white");
      text("Time Left:"+timeLeft,50,50);

      if(timeLeft<100){
        textSize(25);
        fill("red");
        text("Time Left:"+timeLeft,50,50);
      }
    }
    if(gameState==="code2" ){
      textSize(25);
      fill("white");
      text("Score:"+score,1250,50);
    }
    if(gameState==="Victory"){
      textSize(25);
      fill("aqua");
      stroke("black");
      text("Press CTRL+R to restart",1000,650);
    }
    
}



