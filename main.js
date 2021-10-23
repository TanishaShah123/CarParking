//Create a reference for canvas 
var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
//Give specific height and width to the car image
greencarW="75";
greencarH="100";
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencarX=5;
greencarY=225;
function add() {
	//upload car, and background images on the canvas.
	bgImgTag=new Image();
	bgImgTag.onload=uploadBackground;
	bgImgTag.src=background_image;

	GcImgTag=new Image();
	GcImgTag.onload=uploadgreencar;
	GcImgTag.src=greencar_image;
}


function uploadBackground() {
	//Define function ‘uploadBackground’
ctx.drawImage(bgImgTag,0,0,800,400);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(GcImgTag,greencarX,greencarY,greencarW,greencarH);
}
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	  if(greencarY >=0)
	   { greencarY = greencarY - 10;
		 uploadBackground();
	uploadgreencar(); } }


function down()
{
	//Define function to move the car downward
	if(greencarY <=400)
	   { greencarY = greencarY + 10;
		 uploadBackground();
	uploadgreencar(); }
}

function left()
{
	//Define function to move the car left side
	if(greencarX >=0)
	   { greencarX = greencarX - 10;
		 uploadBackground();
	uploadgreencar(); }
}

function right()
{
	//Define function to move the car right side
	if(greencarX <=800)
	{ greencarX = greencarX + 10;
	  uploadBackground();
 uploadgreencar(); }
}
