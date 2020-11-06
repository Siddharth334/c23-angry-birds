const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground,ball;
var box1,box2;
var ground;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();

  world = engine.world;

  box1 = new Box(200,300,50,50);
  box2 = new Box(240,100,50,100);

  ground = new Ground(200,390,400,20);
 // var ball_options ={
 //   isStatic:false,
  //  restitution:1.0
 // }
 // ball = Bodies.circle(200,130,20,ball_options);
 // World.add(world,ball);

}

function draw() {
  background(255,255,255);
  Engine.update(engine);
 
  box1.display();
  box2.display();
  ground.display();
  //ellipseMode(RADIUS);
  //ellipse(ball.position.x,ball.position.y,20,20);
//drawSprites();
}
