var iss, issImage;
var spacecraft, spacecraft1Image, spacecraft2Image, spaceCraft3Image, spacecraft4Image;
var spacebg, spacebgImage;
var hasDocked = false; 


function preload(){
  issImage = loadImage ("images/iss.png");
  spacebgImage = loadImage("images/spacebg.jpg");
  spacecraft1Image = loadImage("images/spacecraft1.png");
  spacecraft2Image = loadImage("images/spacecraft2.png");
  spacecraft3Image = loadImage("images/spacecraft3.png");
  spacecraft4Image = loadImage("images/spacecraft4.png");
}


function setup() {
  createCanvas(800,400);
  iss = createSprite(330, 130, 50, 50);
  iss.addAnimation("iss",issImage);
  iss.scale=0.5;

  spacecraft = createSprite(285, 240);
  spacecraft.addAnimation("spacecraft1", spacecraft1Image);
  spacecraft.addAnimation("spacecraft2", spacecraft2Image);
  spacecraft.addAnimation("spacecraft3", spacecraft3Image);
  spacecraft.addAnimation("spacecraft4", spacecraft4Image);
  spacecraft.scale=0.1;
}

function draw() {
  //background(255,255,255);  
  background(spacebgImage);

  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);
    if(keyDown(LEFT_ARROW)){
      spacecraft.changeAnimation("spacecraft3", spacecraft3Image);
      spacecraft.x = spacecraft.x-1;

    }
    if(keyDown(RIGHT_ARROW)){
      spacecraft.changeAnimation("spacecraft4", spacecraft4Image);
      spacecraft.x = spacecraft.x+1;

    }

    if(keyDown(UP_ARROW)){
      spacecraft.changeAnimation("spacecraft2", spacecraft2Image);
      spacecraft.y = spacecraft.y-1;

    }
    if(keyDown(DOWN_ARROW)){
      spacecraft.changeAnimation("spacecraft1", spacecraft1Image);
      //spacecraft.y = spacecraft.y+1;

    }
  }
  if(spacecraft.y <= (iss.y+10)&& spacecraft.x <= (iss.x-10)){
    hasDocked=true;
    textSize(20);
    fill("white");
    text("Docking Successful", 200, 300);
  }
  drawSprites();
}