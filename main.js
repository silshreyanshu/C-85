background_imgTag = "";
rover_imgTag = "";
rover_x = 10;
rover_y = 10;
rover_width = 100;
rover_height = 90;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
images = ["mars1.jpg","mars2.jpg","mars3.jpg","mars4.jpg","mars.jpg"];
var x = Math.floor(Math.random()*5);
console.log(x);
background_image = images[x];
rover_image = "rover.png";

function add(){
background_imgTag = new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src = background_image;

rover_imgTag = new Image();
rover_imgTag.onload = uploadrover;
rover_imgTag.src = rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag , 0 , 0 , canvas.width , canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imgTag , rover_x , rover_y , rover_width , rover_height);
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if (keypressed == '38')
    {
        console.log("up arrow is pressed");
        up();
    }
    if (keypressed == '40')
    {
        console.log("down arrow is pressed");
        down();
    }
    if (keypressed == '37')
    {
        console.log("left arrow is pressed");
        left();
    }
    if (keypressed == '39')
    {
        console.log("right arrow is pressed");
        right();
    }
}

function right(){
    if(rover_x <= 700)
    {
        rover_x = rover_x + 10;
        uploadBackground();
        uploadrover();
    }  
}
function left(){
    if(rover_x >= 0)
    {
        rover_x = rover_x - 10;
        uploadBackground();
        uploadrover();
    }
}
function up(){
    if(rover_y >= 0)
    {
        rover_y = rover_y - 10;
        uploadBackground();
        uploadrover();
    }
}
function down(){
    if(rover_y <= 500)
    {
        rover_y = rover_y + 10;
        uploadBackground();
        uploadrover();
    }
}
