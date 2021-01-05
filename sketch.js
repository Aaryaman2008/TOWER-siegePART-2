const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,ground2,polygon;
var yellowImage;

var box1,box2,box3,box4,box5;
var box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15;
var box16,box17,box18,box19,box20,box21;


var box22,box23,box24,box25,box26;
var box27,box28,box29,box30,box31,box32;
var box33,box34,box35,box36,box37;
var box38,box39,box40,box41,box42;





var slingy;

function preload() {
    yellowImage=loadImage("bg1.jpg");
}

function setup(){
    var canvas = createCanvas(1500,400);
    engine = Engine.create();
    world = engine.world;

ground1=new Ground(300,320,350,10);
ground2=new Ground(1150,320,350,10);

polygon=new Polygon(675,200)

box1=new Box1(180,290,30,50);
box2=new Box1(210,290,30,50);
box3=new Box1(240,290,30,50);
box4=new Box1(270,290,30,50);
box5=new Box1(300,290,30,50);
box6=new Box1(330,290,30,50);
box7=new Box1(360,290,30,50);
box8=new Box1(390,290,30,50);
box9=new Box1(420,290,30,50);

box10=new Box1(225,240,30,50);
box11=new Box1(255,240,30,50);
box12=new Box1(285,240,30,50);
box13=new Box1(315,240,30,50);
box14=new Box1(345,240,30,50);
box15=new Box1(375,240,30,50);

box16=new Box1(270,190,30,50);
box17=new Box1(300,190,30,50);
box18=new Box1(330,190,30,50);

box19=new Box1(285,140,30,50);
box20=new Box1(315,140,30,50);

box21=new Box1(300,90,30,50);

box22=new Box1(1030,290,30,50);
box23=new Box1(1060,290,30,50);
box24=new Box1(1090,290,30,50);
box25=new Box1(1120,290,30,50);
box26=new Box1(1150,290,30,50);
box27=new Box1(1180,290,30,50);
box28=new Box1(1210,290,30,50);
box29=new Box1(1240,290,30,50);
box30=new Box1(1270,290,30,50);

box31=new Box1(1075,240,30,50);
box32=new Box1(1105,240,30,50);
box33=new Box1(1135,240,30,50);
box34=new Box1(1165,240,30,50);
box35=new Box1(1195,240,30,50);
box36=new Box1(1225,240,30,50);

box37=new Box1(1120,190,30,50);
box38=new Box1(1150,190,30,50);
box39=new Box1(1180,190,30,50);

box40=new Box1(1135,140,30,50);
box41=new Box1(1165,140,30,50);

box42=new Box1(1150,90,30,50);

slingy=new Slingshot(polygon.body,{x:725,y:200});
}

function draw(){
background(yellowImage);
Engine.update(engine);


textSize(25);
fill("black");
textStyle("italic");
strokeWeight(3);
stroke("whidwjo");
text("This Is The Brand New Tower Siege PART-2",460,100)


textSize(18);
fill("black");
textStyle("italic");
strokeWeight(1);
stroke("white");
text("by-",750,150)

textSize(20);
fill("black");
textStyle("bold");
strokeWeight(2);
noStroke();
text("Aaryaman",790,150)

ground1.display();
ground2.display();

polygon.display();
slingy.display();
fill("red");
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();

fill("yellow");
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();

fill("green");
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();

fill("lime");
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();

fill("cyan");
box21.display();

box22.display();
box23.display();
box24.display();
box25.display();
box26.display();

fill("gold");
box27.display();
box28.display();
box29.display();
box30.display();
box31.display();

fill("silver");
box32.display();
box33.display();
box34.display();
box35.display();
box36.display();

fill("blue");
box37.display();
box38.display();
box39.display();
box40.display();
box41.display();
box42.display();


drawSprites(); 
 
}

function mouseDragged(){
Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon.body);
   
    }
}

