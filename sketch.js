//to define variables
var movingrect, fixedrect;
var plant , tree , food , horse;



function setup() {
  //to create the base
  createCanvas(800,400);
  
  //to create a moving rect sprite
  movingrect = createSprite(400, 200, 50, 50);
  movingrect.shapeColor = "black";
  movingrect.debug = true;  
  
  fixedrect = createSprite(600,200,60,20);
  fixedrect.shapeColor = "black";
  fixedrect.debug = true;
  
  plant = createSprite(400,100,50,40);
  plant.shapeColor = "green";

  tree  = createSprite(200,200,40,20);
  tree.shapeColor = "brown";

  food = createSprite(100,200,30,20);
  food.shapeColor = "orange";

  horse = createSprite(300,200,70,20);
  horse.shapeColor = "yellow";
  

  

}

function draw() {
  //to clear the screen and give it color
  background("powderblue");  

  movingrect.x= mouseX;
  movingrect.y = mouseY;
  
 if ( isTouching(movingrect,fixedrect)){
  movingrect.shapeColor = "white";
  fixedrect.shapeColor = "white";
 }
 else{
  movingrect.shapeColor = "black";
  fixedrect.shapeColor = "black";
 }

  if (isTouching(movingrect,tree)){
    movingrect.shapeColor = "white";
    tree.shapeColor = "blue";
  }
   else{
     movingrect.shapeColour = "black";
     tree.shapeColor = "brown";
   }

  
  drawSprites();
}

//boolean values: true/false
  




