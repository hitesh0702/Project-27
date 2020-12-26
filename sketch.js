
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var bod, bod2,bob3,bob4,bob5,ground,rope,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob = new Bob(400,425,60);
	bob2 = new Bob(462,425,60);
	bob3 = new Bob(524,425,60);
	bob4 = new Bob(586,425,60);
	bob5 = new Bob(648,425,60);
	ground= new Ground(525,50,500,20);
	rope = new Rope(bob.body,ground.body,-120,0);
	rope2 = new Rope(bob2.body,ground.body,-65,0);
	rope3 = new Rope(bob3.body,ground.body,-2,0);
	rope4 = new Rope(bob4.body,ground.body,60,0);
	rope5 = new Rope(bob5.body,ground.body,123,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0200);
  
bob.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
ground.display();
rope.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
  drawSprites();
 
}
function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob.body,bob.body.position,{x:-450,y:-250}); } 
} 

   
	 
   
  


