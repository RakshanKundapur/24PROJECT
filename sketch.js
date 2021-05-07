
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var side1, side2, side3, paper, ground;

function setup() {
	var canvas = createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,60);

	paper = new Paper(175, 600, 20);

	side1 = new Dustbin(550, 595, 15, 150);
	side2 = new Dustbin(630, 663, 140, 15);
	side3 = new Dustbin(710, 595, 15, 150);

	Engine.run(engine);
}

function draw() {
  background(0);

  Engine.update(engine);

  //keyPressed();

  ground.display();

  paper.display();

  side1.display();
  side2.display();
  side3.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x: 40, y: -85});
	}
}
