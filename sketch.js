//Declare variables for game objects and behaviour indicators(FLAGS)
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var userEngine,userWorld;
var bg;
var bird;
var pig1, pig2;
var ground, ground1, ground2;
var polygon, p1; 
var tree1, tree2;
var block1, block2, block3, block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17;
var block18,block19,block20, block21, block22,block23,block24,block25 ;
;
var slingShot;

//Create Media library and load to use it during the course of the software 
//executed only once at the start of the program 
function preload() {
  p1 = loadImage("hexagon.png");
}

function setup() {
  createCanvas(1200, 800);

  userEngine = Engine.create();
  userWorld = userEngine.world;
  //object name = new Classname(constructor call)
  ground = new Ground(600,800,1200,20);

  ground1 = new Ground(580,600,300,10);
  ground2 = new Ground(1000,400,200,10);


  block1 = new BlockB(490,330,30,40);
  block2 = new BlockB(520,320,30,40);  
  block3 = new BlockB(550,320,30,40);
  block4 = new BlockB(580,320,30,40);
  block5 = new BlockB(610,320,30,40);
  block6 = new BlockB(640,320,30,40);
  block7 = new BlockB(670,320,30,40);

  block8 = new BlockA(520,300,30,40);
  block9 = new BlockA(550,290,30,40);  
  block10 = new BlockA(580,290,30,40);
  block11 = new BlockA(610,290,30,40);
  block12 = new BlockA(640,290,30,40);

  block13 = new BlockC(540,260,30,40);
  block14 = new BlockC(580,270,30,40);
  block15 = new BlockC(610,270,30,40);

  block16 = new BlockD(580,250,30,40);

  block17 = new BlockD(940,250,30,40);
  block18 = new BlockD(970,250,30,40);
  block19 = new BlockD(1000,250,30,40);
  block20 = new BlockD(1030,250,30,40);
  block21 = new BlockD(1060,250,30,40);

  block22 = new BlockC(970,230,30,40);
  block23 = new BlockC(1000,230,30,40);
  block24 = new BlockC(1030,230,30,40);

  block25 = new BlockA(1000,210,30,40);

  polygon = Bodies.circle(50,200,30);
  World.add(userWorld,polygon);

  slingShot = new SlingShot(polygon,{x:180,y:530});
 
}

function draw(){
    background("white");
    Engine.update(userEngine);

    ground.display();
    ground1.display();
    ground2.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display(); 

    block13.display();
    block14.display();
    block15.display(); 

    block16.display();

    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();

    block22.display();
    block23.display();
    block24.display();

    block25.display();


    imageMode(CENTER);
    image(p1,polygon.position.x,polygon.position.y,40,40);
    image.depth = slingShot.depth +1
    slingShot.display();

}



function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX, y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if (keyCode = 32){
    slingShot.attach(this.polygon);
  }
}

