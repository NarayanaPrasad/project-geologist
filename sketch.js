const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,ironObj,rubberObj;
var stoneObj;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    ironObj = new Iron(600,540,150,100);  
    rubberObj = new Rubber(400,500,70,60);
    stoneObj = new Stone(300,400,70,70);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    
    plane.display();
    hammer.display();
    ironObj.display();
    rubberObj.display();
    stoneObj.display();
}