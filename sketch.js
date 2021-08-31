//giving constant names to the following:
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//loading variables
var myEngine, myWorld;

var ground;

var bird;

var box1, box2, box3, box4, box5;

var pig1, pig2;

var log1, log2, log3, log4;

var backgroundImg,bg;

var platform;

var sling;

var score=0;

var gameState = "onsling";

function preload() {
  //to make background visible as per the time
  getBackground();
}

function setup() {
  createCanvas(1200,600);

  //creating engine under a given name
  myEngine = Engine.create();
  //naming thw world
  myWorld = myEngine.world;

  //creating ground
  ground = new Ground(600,600,1200,10);
  //creating platform on which catapult is placed
  platform = new Ground(150, 520, 300, 150);

  //creating boxes
  box1 = new childBox(750,599,70,70);
  box2 = new childBox(950,599,70,70);
  box3 = new childBox(750,489,70,70);
  box4 = new childBox(950,489,70,70);
  box5 = new childBox(850,469,70,70);

  //creating pigs
  pig1 = new childPig(850,599);
  pig2 = new childPig(850,489);

  //creating logs
  log1 = new childLog(850, 590, 300, PI/2);
  log2 = new childLog(850,470,300, PI/2)
  log3 = new childLog(900,465, 150, 30);
  log4 = new childLog(800,465, 150, 900)

  //creating bird
  bird = new childBird(200,250);

  //adding constraint between bird and catapult
  sling = new SlingShot(bird.body,{x: 200, y: 260});
  
}

function draw() {
  //adding background image only when there is a background img
  if(backgroundImg){
    background(backgroundImg);  
  }
  
  Engine.update(myEngine);

  //displaying objects
  ground.display();
  platform.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  pig1.display();
  pig2.display();
  pig1.score();
  pig2.score();

  log1.display();
  log2.display();
  log3.display();
  log4.display();

  bird.display();

  sling.display();

  //adding score text
  fill("yellow");
  textSize(20);
  text("Score:"+score,900,100);
}

function mouseDragged() {
  //only moving the bird with mouse when mouse is dragged
  Matter.Body.setPosition(bird.body,{x:mouseX, y: mouseY});
}

function mouseReleased() {
  //releasing bird when mouse is released
  sling.fly();
  gameState = "launched";
}

function keyPressed() {
  //adding code when space is pressed and bird is at rest
  if(keyCode === 32 && bird.body.speed<1){
    //removing previous trajectory
    bird.pattern = [];
    //resetting bird's position
    Matter.Body.setPosition(bird.body,{x:200, y: 250});
    //attaching sling to the bird
    sling.attach(bird.body);
  }
}

 async function getBackground(){
  //fetching data from the url
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  //fetching the json data from it which will show date and time
  var responseJson = await response.json();
  //creating a variable which stores current date and time
  var datetime = responseJson.datetime
  //creating variable which will only take time 
  var hour = datetime.slice(11,13);
  //creating background img as per time
  if(6<=hour && hour<=19){
    bg = "sprites/bg.png";
  }else{
    bg = "sprites/bg2.jpg";
  }
  //loading the image created into backgroundImg
  backgroundImg = loadImage(bg);
}

