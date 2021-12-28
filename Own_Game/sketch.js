var ball, ballImage
var cone1, cone2, cone3
var cone1Image, cone2Image, cone3Image
var goalImage
var bgImage

function preload(){
    ballImage = loadImage("ball.png");
    cone1Image = loadImage("cone.png");
    cone2Image = loadImage("cone.png");
    cone3Image = loadImage("cone.png");
    goalImage = loadImage("goal.png");
    bgImage = loadImage("soccer_field.png");
}

function setup(){
    createCanvas(1500,800);

    bg = createSprite(750, 400, 1500, 800);
    bg.addImage(bgImage);
    bg.scale = 0.75

    ball = createSprite(750, 725, 50, 50);
    ball.addImage(ballImage);
    ball.scale=0.2

    cone1 = createSprite(600, 150, 30, 30);
    cone1.addImage(cone1Image);
    cone1.scale = 0.3

    cone2 = createSprite(600, 350, 30, 30);
    cone2.addImage(cone2Image);
    cone2.scale = 0.3

    cone3 = createSprite(600, 550, 30, 30);
    cone3.addImage(cone3Image);
    cone3.scale = 0.3

    goal = createSprite(750, 50, 60, 60);
    goal.addImage(goalImage);
    goal.scale = 0.35

   

}

function draw(){
    
    drawSprites();
    
}
