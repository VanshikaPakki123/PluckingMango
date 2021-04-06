const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, stone,ground, launcherObject;
var mango1,mango2,mango3,mango4,mango5;
var boy,boyImg;

function preload()
{
	boyImg = loadImage("boy.png");
}

function setup()
 {
	createCanvas(1500, 800);


	engine = Engine.create();
	world = engine.world;

	tree = new Tree(1000,670,30,300);
	ground = new Ground(750,670,1500,20);
	mango1 = new Mangoes(900,200,15);
	mango2 = new Mangoes(900,300,15);
	mango3 = new Mangoes(950,320,15);
	mango4 = new Mangoes(1090,250,15);
	mango5 = new Mangoes(1000,130,15);
	stone = new Stone(200,550,20);
	shot = new Shot(stone.body,{x:240,y:550});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  image(boyImg,200,500,200,200)
  tree.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  shot.display();
  detectcollision(stone,mango1);
  detectcollision(stone,mango2)
  detectcollision(stone,mango3)
  detectcollision(stone,mango4)
  detectcollision(stone,mango5)
  drawSprites();
 
}


function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
   // shot.fly();
}
function detectcollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){

	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:150,y:550})
		shot.attach(stone.body);
	}
}