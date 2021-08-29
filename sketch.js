
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(500, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof= new Roof(250,100,300,20);
	bob1 = new Bob(150,300,25);
	bob2 = new Bob(200,300,25);
	bob3 = new Bob(250,300,25);
	bob4 = new Bob(300,300,25);
	bob5 = new Bob(350,300,25);

	rope1 = new Rope(bob1.body, {x:150,y:100});
	rope2 = new Rope(bob2.body, {x:200,y:100});
	rope3 = new Rope(bob3.body, {x:250,y:100});
	rope4 = new Rope(bob4.body, {x:300,y:100});
	rope5 = new Rope(bob5.body, {x:350,y:100});

	//rope2 = new Rope()
	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background(0);
  textSize(15);
  fill("white");
  text("Left arrow for Left bob", 30,15);
  text("Right arrow for Right bob", 30,30);
  text("Up arrow for left and Right bob", 30,45);
  text("Down arrow for left bob1, bob2", 30,60);
  text("Space key for three bobs", 30,75);
  fill("red");
  text("Refresh before applying the next key", 250, 50)
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

 
  
 
}

function keyPressed(){
	if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position,{x:-60,y:-30} )
	}

	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(bob5.body, bob5.body.position,{x:60,y:-30} )
	}

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position,{x:-60,y:-30} )
		Matter.Body.applyForce(bob5.body, bob5.body.position,{x:60,y:-30} )
	}

	if(keyCode === DOWN_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position,{x:-60,y:-30} )
		Matter.Body.applyForce(bob2.body, bob2.body.position,{x:-60,y:-30} )
	}

	if(keyCode === 32){
		Matter.Body.applyForce(bob1.body, bob1.body.position,{x:-60,y:-30} )
		Matter.Body.applyForce(bob2.body, bob2.body.position,{x:-60,y:-30} )
		Matter.Body.applyForce(bob3.body, bob3.body.position,{x:-60,y:-30} )
	}


	
}



