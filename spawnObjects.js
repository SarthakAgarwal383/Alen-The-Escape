function blockS(){

    block1=createSprite(300,150,10,10);
    block1.addImage(blockImg);
    block1.scale= 1.3;
    block1.visible=false;
    boy.depth=block1.depth+1;

    block2=createSprite(520,150,10,10);
    block2.addImage(blockImg);
    block2.scale= 1.3;
    block2.visible=false;
    boy.depth=block2.depth+1;
    
    block3=createSprite(740,150,10,10);
    block3.addImage(blockImg);
    block3.scale= 1.3;
    block3.visible=false;
    boy.depth=block3.depth+1;
    
    block4=createSprite(960,150,10,10);
    block4.addImage(blockImg);
    block4.scale= 1.3;
    block4.visible=false;
    boy.depth=block4.depth+1;

    block5=createSprite(300,350,10,10);
    block5.addImage(blockImg);
    block5.scale= 1.3;
    block5.visible=false;
    boy.depth=block5.depth+1;
    
    block6=createSprite(520,350,10,10);
    block6.addImage(blockImg);
    block6.scale= 1.3;
    block6.visible=false;
    boy.depth=block6.depth+1;
    
    block7=createSprite(740,350,10,10);
    block7.addImage(blockImg);
    block7.scale= 1.3;
    block7.visible=false;
    boy.depth=block7.depth+1;
    
    block8=createSprite(960,350,10,10);
    block8.addImage(blockImg);
    block8.scale= 1.3;
    block8.visible=false;
    boy.depth=block8.depth+1;
    
    block9=createSprite(300,550,10,10);
    block9.addImage(blockImg);
    block9.scale= 1.3;
    block9.visible=false;
    boy.depth=block9.depth+1;

    
    block10=createSprite(520,550,10,10);
    block10.addImage(blockImg);
    block10.scale= 1.3;
    block10.visible=false;
    boy.depth=block10.depth+1;
    
    block11=createSprite(740,550,10,10);
    block11.addImage(blockImg);
    block11.scale= 1.3;
    block11.visible=false;
    boy.depth=block11.depth+1;
    
    block12=createSprite(960,550,10,10);
    block12.addImage(blockImg);
    block12.scale= 1.3;
    block12.visible=false;
    boy.depth=block12.depth+1;

    calculator=createSprite(1375/2,300,10,10);
    calculator.addImage(calculatorImg);
    calculator.visible=false;
    calculator.scale=1.5;

    one=createSprite(590,225,1,1);
    one.addImage(oneImg);
    one.visible=false;
    one.scale=0.5;

    two=createSprite(690,225,1,1);
    two.addImage(twoImg);
    two.visible=false;
    two.scale=0.5;

    three=createSprite(790,225,1,1);
    three.addImage(threeImg);
    three.visible=false;
    three.scale=0.5;

    four=createSprite(590,325,1,1);
    four.addImage(fourImg);
    four.visible=false;
    four.scale=0.5;

    five=createSprite(690,325,1,1);
    five.addImage(fiveImg);
    five.visible=false;
    five.scale=0.5;

    six=createSprite(790,325,1,1);
    six.addImage(sixImg);
    six.visible=false;
    six.scale=0.5;

    seven=createSprite(590,425,1,1);
    seven.addImage(sevenImg);
    seven.visible=false;
    seven.scale=0.5;

    eight=createSprite(690,425,1,1);
    eight.addImage(eightImg);
    eight.visible=false;
    eight.scale=0.5;

    nine=createSprite(790,425,1,1);
    nine.addImage(nineImg);
    nine.visible=false;
    nine.scale=0.5;

    dot1=createSprite(590,130,10,10);
    dot1.addImage(dotImg);
    dot1.visible=false;

    dot2=createSprite(650,130,10,10);
    dot2.addImage(dotImg);
    dot2.visible=false;

    dot3=createSprite(710,130,10,10);
    dot3.addImage(dotImg);
    dot3.visible=false;

    error=createSprite(1375/2,120,1,1);
    error.addImage(errorImg);
    error.visible=false;
    error.scale=1.5;

    ccCode=createSprite(1375/2,110,350,80);
    //ccCode.addImage(ccCodeImg);
   ccCode.shapeColor="chartreuse";

    ccCode.visible=false;
   // ccCode.scale=0.35;
dot1.depth=ccCode.depth+1;
dot2.depth=ccCode.depth+1;
dot3.depth=ccCode.depth+1;
}