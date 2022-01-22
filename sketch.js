 var PLAY = 1;
 var END = 0;
 var gameState = PLAY;

 var ninja , ninja_running , ninja_collided , ninja_attack;
 var ground , invisibleGround , groundImage;
 var obstaclesGroup , obstacle1 , obstacle2 , obstacle3;
 var ghost , ghost_running;
 var skeleton , skeleton_run;
 var bat;
 var trap , trap_trapping;
 var background , backgroundImg , canvas;

 var score;
 var gameOverImg,restartImg;
 
     function preload(){
       ninja_running = loadAnimation("../Images/ninja2.png" , "../Images/ninja3.png" , "../Images/ninja4.png" , "../Images/ninja5.png" , "../Images/ninja6.png" , "../Images/ninja7.png");
       ninj_collided = loadAnimation("../Images/ninja20.png" , "../Images/ninja21.png");
       ninja_attak = loadAnimation("../Images/ninja8.png" , "../Images/ninja15.png" , "{../Images/ninja16.png");

       obstacle1 = loadImage("../Images/obstacle1");
       obstacle2 = loadImage("../Images/obstacle2");
       obstacle3 = loadImage("../Images/obstacle3");

       bat = loadAnimation = ("../Images/bat1.png" , "../Images/bat2.png" , "../Images/bat3.png");
       backgroungImg = loadImage("../Images/background.jpg");

 
     }
 
     function setup(){
      canvas = createCanvas(displayWidth - 20, displayHeight-30);

      ninja = createSprite(50,160,20,50);
      ninja.addAnimation("running", ninja_running);
      ninja.addAnimation("collided", ninja_collided);
      ninja.addAnimation("attack", ninja_attack);

      ninja.scale = 0.5;
      ninja.setCollider("rectangle",0,0,ninja.width,ninja.height);
      ninja.debug = true

      //ground = createSprite(200,180,400,20);
      //ground.addImage("ground",groundImage);
      //ground.x = ground.width /2;

      score = 0;
 
     }
 
     function draw(){
      background(backgroundImg);

      if(gameState === PLAY){
        gameOverImg.visible = false;
        restartImg.visible = flase;

        score = score + Math.round(getFrameRate()/60);

        if(score>0 && score%100 === 0){
          checkPointSound.play() 
        }

        if(keyDown("space")&& ninja.y >= 100) {
         ninja.velocityY = -12;
        }

        trex.velocityY = trex.velocityY + 0.8
   
      }
     }