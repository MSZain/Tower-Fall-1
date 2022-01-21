const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground,stand1,stand2;
var ball, slingShot;

function setup() {
  engine  = Engine.create();
  world = engine.world;
  createCanvas(1536,700);

  ground = new Ground(768,650,1536,100);
  stand1 = new Stand(750,500,500,10);
  stand2 = new Stand(1200,350,300,10);

  //set 1
  //level one
  block1 = new Block(633,475,50,40);  
  block2 = new Block(683,475,50,40);
  block3 = new Block(733,475,50,40);
  block4 = new Block(783,475,50,40);
  block5 = new Block(833,475,50,40);
  block6 = new Block(883,475,50,40);
  block7 = new Block(933,475,50,40);
  block8 = new Block(583,475,50,40);
  //level two
  block9 = new Block(687,425,50,40);
  block10 = new Block(737,425,50,40);
  block11 = new Block(787,425,50,40);
  block12 = new Block(837,425,50,40);
  block13 = new Block(887,425,50,40);
  block14 = new Block(637,425,50,40);
  //level three
  block15 = new Block(690,375,50,40);
  block16 = new Block(740,375,50,40);
  block17 = new Block(790,375,50,40);
  block18 = new Block(840,375,50,40);
  //level four
  block19 = new Block(740,325,50,40);
  block20 = new Block(790,325,50,40);
  //level five
  block21 = new Block(766,275,50,40);

  //set 2
  //level one
  blocks1 = new Block(1100,175,50,40);
  blocks2 = new Block(1150,175,50,40);
  blocks3 = new Block(1200,175,50,40);
  blocks4 = new Block(1250,175,50,40);
  blocks5 = new Block(1300,175,50,40);
  //level two
  blocks6 = new Block(1150,135,50,40);
  blocks7 = new Block(1200,135,50,40);
  blocks8 = new Block(1250,135,50,40);
  //level three
  blocks9 = new Block(1200,95,50,100);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);
  slingShot = new SlingShot(this.ball,{x:200,y:200});

}

function draw() {  
 background("white")
  Engine.update(engine);
 
  ground.display();
  stand1.display();
  stand2.display();
  
  stroke(15);
  fill(255, 195, 0)
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  stroke(15)
  fill(255, 88, 51)
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  stroke(15)
  fill(199,0,57)
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  stroke(15)
  fill(144,12,63)
  block19.display();
  block20.display();
  stroke(15)
  fill(88, 24, 69)
  block21.display();

  stroke(15)
  fill(181,249,211)
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  stroke(15)
  fill(158,231,250)
  blocks6.display();
  blocks7.display();
  blocks8.display();
  stroke(15)
  fill(202,185,241)
  blocks9.display();
  
  stroke("yellow");
  fill ("red")
  text("DRAG THE BALL AND HIT THE BOX !",650,50)
  ellipse(ball.position.x,ball.position.y,30);
  slingShot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}

//further comments
//var polygonimg;
// polygon_img=loadImage("polygon.png");
 // backgroundImg=loadImage("bg.png");
 //imageMode(CENTER)
 //ball = loadImage(polygon_img ,ball.position.x-50,ball.position.y-80,40,40);
 // ellipseMode(RADIUS);