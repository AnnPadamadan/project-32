const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1, stand1, stand2;
var block1;


var score = 0;

function preload() {
  
}

function setup(){
    var canvas = createCanvas(800, 700);
    engine = Engine.create();
    world = engine.world;

ground1 = new Ground(400, 700, 800, 20);
stand1 = new Ground(400, 400, 300, 20);

//level1
block1 = new Block(250+50, 382,50, 50);
block5 = new Block(250+50+200, 382,50, 50);
block2 = new Block(250+50+50, 382,50, 50);
block3 = new Block(250+50+100, 382,50, 50);
block4 = new Block(250+50+150, 382,50, 50);
//level2
block6 = new Block(250+50+50-25, 382-50,50, 50);
block7 = new Block(250+50+100-25, 382-50,50, 50);
block8 = new Block(250+50+150-25, 382-50,50, 50);
block9 = new Block(250+50+200-25, 382-50,50, 50);
//level3
block10 = new Block(250+50+100-50, 382-100,50, 50);
block11 = new Block(250+50+150-50, 382-100,50, 50);
block12 = new Block(250+50+200-50, 382-100,50, 50);
//level4
block13 = new Block(250+50+150-75, 382-150,50, 50);
block14 = new Block(250+50+200-75, 382-150,50, 50);
//level5
block15 = new Block(250+50+200-100, 382-200,50, 50);

polygon1 = new polygon(100, 200, 50);

slingShot = new SlingShot(polygon1.body, {x:100, y:200});


   
}

function draw(){
    background(202,202,202);
    Engine.update(engine);
    text(mouseX+", "+mouseY, mouseX, mouseY);
    text("Score: "+ score, 700, 50)
    strokeWeight(4);
    
    ground1.display();
    stand1.display();
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
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    polygon1.display();
    slingShot.display();

    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if(keyCode===32){
        slingShot.attach(polygon1.body);
    }
}

