const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload(){
    bgImg=loadImage("block img.jpg")
}

function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new log(600,393,1200,10);
    stand1 = new log(530,270,300,10);
    stand2 = new log(1000,200,250,10);

    polygon=new stone(100,288,40);

    rope1=new Sling(polygon.body,{x:100,y:293})

    block1=new box(410,250,30,30);
    block2=new box(440,250,30,30);
    block3=new box(470,250,30,30);
    block4=new box(500,250,30,30);
    block5=new box(530,250,30,30);
    block6=new box(560,250,30,30);
    block7=new box(590,250,30,30);
    block8=new box(620,250,30,30);
    block9=new box(650,250,30,30);


    block10=new box(440,220,30,30);
    block11=new box(470,220,30,30);
    block12=new box(500,220,30,30);
    block13=new box(530,220,30,30);
    block14=new box(560,220,30,30);
    block15=new box(590,220,30,30);
    block16=new box(620,220,30,30);

    
    block17=new box(470,190,30,30);
    block18=new box(500,190,30,30);
    block19=new box(530,190,30,30);
    block20=new box(560,190,30,30);
    block21=new box(590,190,30,30);
    
    block22=new box(500,160,30,30);
    block23=new box(530,160,30,30);
    block24=new box(560,160,30,30);

    block25=new box(530,130,30,30);

    box1=new box(910,180,30,30);
    box2=new box(940,180,30,30);
    box3=new box(970,180,30,30);
    box4=new box(1000,180,30,30);
    box5=new box(1030,180,30,30);
    box6=new box(1060,180,30,30);
    box7=new box(1090,180,30,30);

    box8=new box(940,150,30,30);
    box9=new box(970,150,30,30);
    box10=new box(1000,150,30,30);
    box11=new box(1030,150,30,30);
    box12=new box(1060,150,30,30);

    box13=new box(970,120,30,30);
    box14=new box(1000,120,30,30);
    box15=new box(1030,120,30,30);

    box16=new box(1000,90,30,30);

}

function draw(){
    background(bgImg);
    Engine.update(engine);

    textSize(20);
    fill("black")
    text("Drag Hexagonal Stone and Release it, to Launch it Towards The Blocks",300,30)

    polygon.display();
    rope1.display();

    fill("black")
    ground.display();

    fill("pink")
    stand1.display();
    stand2.display();

    // For Stand1

    fill("blue")
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();

    fill("yellow")
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    fill("green")
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();

    fill("gray")
    block22.display();
    block23.display();
    block24.display();

    fill("lightblue");
    block25.display();

    // For Stand2

    fill("green");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    fill("orange")
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    fill("white");
    box13.display();
    box14.display();
    box15.display();

    fill("green");
    box16.display();
   
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    rope1.fly();
}