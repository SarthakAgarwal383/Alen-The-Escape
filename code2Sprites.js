function code2Sprites(){

 partition1= createSprite(1375/2,200,1000,20);
 partition1.visible=false;
 partition1.shapeColor="blue";
 partition1.depth= blackScreen3.depth-1;
 //partition1.addImage(wallImg);


 partition2= createSprite(1375/2+500,450,20,500);
 partition2.visible=false;
 partition2.shapeColor="blue";
 partition2.depth= blackScreen3.depth-1;
 //partition2.addImage(wallImg);

 partition3= createSprite(1375/2+500,100,20,200);
 partition3.visible=false;
 partition3.shapeColor="yellow";
 partition3.depth= blackScreen3.depth-1;
 partition3.addImage(yellowImg);

 booth=createSprite(100,80,10,10);
 booth.addImage(boothImg);
 booth.visible=false;
 booth.depth=blackScreen3.depth-1;
 booth.scale=0.5;
 booth.rotation=-25;
 booth.rotateToDirection=true;

 gun=createSprite(80,400,10,10);
 gun.addImage(gunImg);
 gun.visible=false;
 gun.depth=blackScreen3.depth-1;
 gun.scale=0.7;
 gun.rotation=180;
 gun.rotateToDirection=true;
 //gun.debug=true;
 gun.setCollider("rectangle",0,0,120,80);

 launcher1=createSprite(1100,290,10,10);
 launcher1.addImage(launcherImg);
 launcher1.visible=false;
 launcher1.depth=blackScreen3.depth-1;
 launcher1.scale=0.7;

 launcher2=createSprite(1100,450,10,10);
 launcher2.addImage(launcherImg);
 launcher2.visible=false;
 launcher2.depth=blackScreen3.depth-1;
 launcher2.scale=0.7;

 launcher3=createSprite(1100,590,10,10);
 launcher3.addImage(launcherImg);
 launcher3.visible=false;
 launcher3.depth=blackScreen3.depth-1;
 launcher3.scale=0.7;

 alien4=createSprite(1000,500,10,10);
 alien4.addImage(alien4Img);
 alien4.visible=false;
 alien4.scale=0.5;

 gunHealth=createSprite(400,100,200,20);
 gunHealth.shapeColor="blue";
 gunHealth.visible=false;
 gunHealth.strokeColor="black";

 alienHealth=createSprite(1000,100,200,20);
 alienHealth.shapeColor="red";
 alienHealth.visible=false;

 white1=createSprite(1000,100,200,20);
white1 .shapeColor="white";
 white1.visible=false;

 white2=createSprite(400,100,200,20);
 white2.shapeColor="white";
  white2.visible=false;


}
function aliens(){
    if(World.frameCount%120===0){
        alien1=createSprite(1100,290,10,10);
        alien1.addImage(alien1Img);
        alien1.velocityX=-9;
        alien1.lifeTime=300;
        alien1.scale=0.2;
        alien1.lifeTime=400;
        alien1Group.add(alien1);

    }
    if(World.frameCount%200===0){
        alien2=createSprite(1100,450,10,10);
        alien2.addImage(alien2Img);
        alien2.velocityX=-9;
        alien2.lifeTime=300;
        alien2.scale=0.4;
        alien2.lifeTime=400;
        alien2Group.add(alien2);

    }
    if(World.frameCount%280===0){
        alien3=createSprite(1100,570,10,10);
        alien3.addImage(alien3Img);
        alien3.velocityX=-9;
        alien3.lifeTime=300;
        alien3.scale=0.4;
        alien3.lifeTime=400;
        alien3Group.add(alien3);
    }

}
function bullets(){
  
        bullet=createSprite(100,100,10,10);
        bullet.addImage(bulletImg);
        bullet.scale=0.1;
        bullet.velocityX=7;
        bullet.x= gun.x;
        bullet.y=gun.y;
        bullet.lifetime=400;
        bulletGroup.add(bullet);

}
function bullets2(){
    if(World.frameCount%20===0){
        bullet2=createSprite(100,100,10,10);
        bullet2.addImage(bulletImg);
        bullet2.scale=0.1;
        bullet2.velocityX=-7;
        bullet2.x=alien4.x-50;
        bullet2.y=alien4.y-50;
        bullet2.lifetime=400;
        bullet2Group.add(bullet2);
        gunSound.play();
    }
    if(alienHealth.width===0){
        gunSound.stop();
    }
}