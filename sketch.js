const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var leftSide;
var rightSide;

function preload() {

}

function setup() {

    //to create canvas
    createCanvas(1530, 700);


    engine = Engine.create();
    world = engine.world;

    //to create options for ball
    var ball_options = {

        //to make it unstatic
        isStatic: false,

        //to make it bounce
        restitution: 0.1,

        //to apply friction
        friction: 0,
        density: 1.2

    }

    //to create the Bodies
    fill("yellow");
    ball = Bodies.circle(200, 100, 20, ball_options);
    World.add(world, ball);

    //to create ground, and  other objects
    groundObj = new Ground(width / 2, 670, width, 20);
    leftSide = new Ground(1100, 600, 20, 120);
    rightSide = new Ground(1400, 600, 20, 120);

    keyPressed();

    //to run the engine
    Engine.run(engine);

}


function draw() {

    rectMode(CENTER);

    //to give background
    background("blue");

    //to call the display function
    groundObj.display();
    leftSide.display();
    rightSide.display();

    //to display ball
    ellipse(ball.position.x, ball.position.y, 20);


    drawSprites();

}

//function to apply force on the ball
function keyPressed() {

    if (keyCode === UP_ARROW) {

        Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 20, y: 10 });

    }
}