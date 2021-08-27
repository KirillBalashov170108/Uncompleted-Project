const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let world;
let engine;
var canvas;
var revolver;
var clickbutton;
var coins;

function preload() {
bg_img = loadImage('background.png');
revolver = loadImage('revolver.png');
clickbutton = loadImage('click.png');
coins = loadImage('coin.png');
}
function setup() {
  createCanvas(600,700);
 
  engine = Engine.create();
  world = engine.world;
  
  revolver1=createSprite(320,600,10,10);
  revolver1.addImage(revolver)
  revolver1.scale=0.3

  coins1=createSprite(320,50,10,10);
  coins1.addImage(coins);
  coins1.scale=0.02

  coins2=createSprite(50,370,10,10);
  coins2.addImage(coins);
  coins2.scale=0.02

  coins3=createSprite(150,270,10,10);
  coins3.addImage(coins);
  coins3.scale=0.02

  coins4=createSprite(450,270,10,10);
  coins4.addImage(coins);
  coins4.scale=0.02

  coins5=createSprite(500,370,10,10);
  coins5.addImage(coins);
  coins5.scale=0.02

  coins6=createSprite(350,300,10,10);
  coins6.addImage(coins);
  coins6.scale=0.02

  coins7=createSprite(250,370,10,10);
  coins7.addImage(coins);
  coins7.scale=0.02

  clickbutton1 = createImg('click.png');
  clickbutton1.position(370,570);
  clickbutton1.size(100,100);
  clickbutton1.mouseClicked(shoot);
}
function draw() 
{
  background(51);
  image(bg_img,0,0,width,height);
  
  Engine.update(engine);
  drawSprites();

  if (collide(revolver,coins1,20)==true){
    coins1.visible=false
  }
  if (collide(revolver,coins2,20)==true){
    coins2.visible=false
   }
   if (collide(revolver,coins3,20)==true){
    coins3.visible=false
   }
   if (collide(revolver,coins4,20)==true){
    coins4.visible=false
   }
   if (collide(revolver,coins5,20)==true){
    coins5.visible=false
   }
   if (collide(revolver,coins6,20)==true){
    coins6.visible=false
   }
   if (collide(revolver,coins7,20)==true){
    coins7.visible=false
   }
  }


function shoot(){
  Matter.Body.applyForce(revolver1,{x:0,y:0},{x:0,y:-0.05})
}

function collide(body,sprite)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=80)
            {
               return true; 
            }
            else{
              return false;
            }
         }
}
function collide(body,sprite,x)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=x)
            {
               return true; 
            }
            else{
              return false;
            }
         }
}