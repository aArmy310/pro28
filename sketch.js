
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy;
var mango1,mango2,mango3,mango4,mango5;
var stoneObj;
function preload()
{
	
boy =loadImage("Plucking+mangoes\img/boy.png");
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
// boy = createSprite(250,10,160,240);
	stone = new StoneClass(100,100);
mango1 = new MangoClass(200,200,20,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //boy.display();
  stone.display();
  mango1.display();

  detectCollision(stoneObj,mango1);  
  detectCollision(stoneObj,mango2);  
  detectCollision(stoneObj,mango3);  
  detectCollision(stoneObj,mango4);  
  detectCollision(stoneObj,mango5);  
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition (stone.body,{x:mouseX, y:mouseY});
	}

	 function mouseReleased(){
	stone.fly();
	 }
	 function detectCollision(stone,mango){
		 mangoBodyPosition = mango.body.position
		 stoneBodyPosition = stone.body.position

		 var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y ,mangoBodyPosition.x ,mangoBodyPosition.y)
		 if(distance<-mango.r+stone.r)
		 {
			 Matter.Body.setStatic(mango.body,false);
		 }
	 }

	 function keyPressed() {
		 if (keyCode === 32) {
			 Matter.Body.setPosition(stoneObj.body, {x:235, y:420})
			 launcherObject.attach(stoneObj.body);
		 }
	 }
