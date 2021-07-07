const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;
var snowImg1, snowImg2;
var snowing=0;


function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  
  backgroundImg=loadImage("snow1.jpg");
  snowImg1=loadImage("snow4.webp");
  snowImg2=loadImage("snow5.webp");
}

function draw() {
  background(backgroundImg);  

  Engine.update(engine);


  if (frameCount % 30 === 0) {
    
    var randomX=Math.round(random(50, 750));

    console.log(randomX);

    snow=new Snow(randomX, 0, 20);

    snowing=1;

    var whichSnow=Math.round(random(1,2));
    console.log(whichSnow);
    if (whichSnow === 1) {
      image(snowImg1, 400, 200, 40, 40);
     } else if (whichSnow === 2) { 
      image(snowImg2, 400, 200, 40, 40);
    }
  }

  if (snowing===1) {
    snow.display();
  }
}