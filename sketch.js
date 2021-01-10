
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;



    ground = new Ground(600,680,1200,20)
	

	leftSide = new Box(700,620,20,100);
	middleSide = new Box(800,670,200,20);
	rightSide = new Box(900,620,20,100);


    paper = new Paper(150,200,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  

  leftSide.display();
  middleSide.display();
  rightSide.display();
  ground.display();

  paper.display();
  
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	
     Matter.Body.applyForce(paper.body,paper.body.position,{x :50  ,y : -50  })


	

    
  }
}



