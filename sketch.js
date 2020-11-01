const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var base1, base2 ;var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18;
var box19, box20, box21, box22, box23, box24, box25, box26, box27, box28, box29;
var rock1;
var launcher;
var score=0;

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  base1 = new Base (400,500,300,20);
  base2 = new Base (900,350,300,20);
  ground = new Base (600,580,1200,20);
  rock1 = new Rock (100,300,20);

  launcher = new Slingshot (rock1.body,{x:100, y:300});

  box1 = new Box (330,470,30,40);
  box2 = new Box (360,470,30,40);
  box3 = new Box (390,470,30,40);
  box4 = new Box (420,470,30,40);
  box5 = new Box (450,470,30,40);
  box6 = new Box (480,470,30,40);
  
  box7 = new Box (345,430,30,40);
  box8 = new Box (375,430,30,40);
  box9 = new Box (405,430,30,40);
  box10 = new Box (435,430,30,40);
  box11 = new Box (465,430,30,40);

  box12 = new Box (355,390,30,40);
  box13 = new Box (385,390,30,40);
  box14 = new Box (415,390,30,40);
  box15 = new Box (445,390,30,40);

  box16 = new Box (385,350,30,40);
  box17 = new Box (415,350,30,40);
  
  box18 = new Box (405,310,30,40);

  box19 = new Box (800,320,30,40);
  box20 = new Box (830,320,30,40);
  box21 = new Box (860,320,30,40);
  box22 = new Box (890,320,30,40);
  box23 = new Box (920,320,30,40);
  box24 = new Box (950,320,30,40);
  box25 = new Box (980,320,30,40);

  box26 = new Box (820,280,30,40);
  box27 = new Box (850,280,30,40);
  box28 = new Box (880,280,30,40);
  box29 = new Box (910,280,30,40);
  box30 = new Box (940,280,30,40);
  box31 = new Box (970,280,30,40);

  box32 = new Box (830,240,30,40);
  box33 = new Box (860,240,30,40);
  box34 = new Box (890,240,30,40);
  box35 = new Box (920,240,30,40);
  box36 = new Box (950,240,30,40);

  box37 = new Box (850,200,30,40);
  box38 = new Box (880,200,30,40);
  box39 = new Box (910,200,30,40);
  box40 = new Box (940,200,30,40);

  box41 = new Box (870,160,30,40);
  box42 = new Box (900,160,30,40);

}



function draw() {
  background("grey");  
  
 // Engine.run(engine);

  base1.display();
  base2.display();
  ground.display();
  rock1.display();
  launcher.display();
  fill ("purple")
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  fill ("purple");
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  fill ("purple");
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  fill ("pink");
  box16.display();
  box17.display();
  fill("white");
  box18.display();

  fill("purple");
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();

  fill("purple");
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();

  fill("purple");
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();

  fill("pink");
  box37.display();
  box38.display();
  box39.display();
  box40.display();

  fill("white");
  box41.display();
  box42.display();

  text("score :"+score,1000,50);

  box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();
    box26.score();
    box27.score();
    box28.score();
    box29.score();
    box30.score();
    box31.score();
    box32.score();
    box33.score();
    box34.score();
    box35.score();
    box36.score();
    box37.score();
    box38.score();
    box39.score();
    box40.score();
    box41.score();
    box42.score();


}

function mouseDragged(){
  Matter.Body.setPosition (rock1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  launcher.fly();
}

function keyPressed(){
  if (keyCode === 32)
  launcher.attach(rock1.body);
}
