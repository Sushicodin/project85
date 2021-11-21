//Create a reference for canvas 
canvas=document.getElementById("CarCrazyCanvas");
ctx=canvas.getContext("2d");
//Give specific height and width to the car image
greencar_width=75;
greencar_height=160;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_X=5;
greencar_Y=225;

function add() {
	
	background_imgTag=new Image();
	background_imgTag.onload=uploadBackground;
	background_imgTag.src=background_image;

	greencar_imgTag=new Image();
	greencar_imgTag.onload=uploadgreencar;
	greencar_imgTag.src=greencar_image;
}

function uploadBackground() {
ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height)
}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, greencar_X, greencar_Y, greencar_width, greencar_height)
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			uppie();
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

function uppie()
{
	if(greencar_Y>=0){
        greencar_Y=greencar_Y -10;
        console.log("The Posision of the Green Car is x= " + greencar_X + "and y= " + greencar_Y);
        uploadBackground();
        uploadgreencar();
}
}

function down()
{
	if(greencar_Y<=500){
        greencar_Y=greencar_Y +10;
        console.log("The Posision of the Green Car is x= " + greencar_X + "and y= " + greencar_Y);
        uploadBackground();
        uploadgreencar();
}
}

function left()
{
	if(greencar_X>=0){
        greencar_X=greencar_X -10;
        console.log("The Posision of the Green Car is x= " + greencar_X + "and y= " + greencar_Y);
        uploadBackground();
        uploadgreencar();
}
}

function right()
{
	if(greencar_X<=700){
        greencar_X=greencar_X +10;
        console.log("The Posision of the Green Car is x= " + greencar_X + "and y= " + greencar_Y);
        uploadBackground();
        uploadgreencar();
	}
}
