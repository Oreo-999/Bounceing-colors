var canvas;
var music;
var sur1,sur2,sur3,sur4
var box;
var edge1,edge2,edge3,edge4;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    sur1=createSprite(100,550,175,25)
    sur1.shapeColor="red"
    sur2=createSprite(300,550,175,25)
    sur2.shapeColor="green"
    sur3=createSprite(500,550,175,25)
    sur3.shapeColor="blue"
    sur4=createSprite(700,550,175,25)
    sur4.shapeColor="yellow"
    box=createSprite(random(20,750),150,20,20)
    box.velocityX=3.8
    box.velocityY=3.4
    edge1=createSprite(-10,300,20,600)
    edge2=createSprite(810,300,20,600)
    edge3=createSprite(400,610,800,20)
    edge4=createSprite(400,-10,800,20)




    //create box sprite and give velocity

}

function draw() {
    background(rgb(0,0,0));
    drawSprites();
    createEdgeSprites();
    //create edgeSprite
    if (box.isTouching(sur1)&&  box.bounceOff(sur1)){
        box.shapeColor="red"
        music.play()
    }
    else if (box.isTouching(sur2)){
        box.shapeColor="green"
        music.stop()
        box.velocityX=0
        box.velocityY=0
    }
    else if (box.isTouching(sur3)&&  box.bounceOff(sur3)){
        box.shapeColor="blue"
        music.play()
    }
    else if (box.isTouching(sur4)&&  box.bounceOff(sur4)){
        box.shapeColor="yellow"
    }
    box.bounceOff(edge1)
    box.bounceOff(edge2)
    box.bounceOff(edge3)
    box.bounceOff(edge4)
    //add condition to check if box touching surface and make it box
}
