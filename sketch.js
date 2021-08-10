const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;
var canon



function preload() {
  towerImage = loadImage("./assets/tower.png");
backgroundimg=loadImage("./assets/background.gif");
}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  canon = new Canon(150,350,160,100)

}

function draw() {
  background(189);
  image(backgroundimg,0,0,width,height)
  Engine.update(engine);

  ground.display();
  
  tower.display();
  canon.display();
 
}
