canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 100;
car1_height = 90;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;
background_image = "carr.jpg";
car2_width = 100;
car2_height = 90;
car2_image = "car1.png";
car2_x = 10;
car2_y = 100;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;
    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_image;
    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2(){
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) 
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(keyPressed == '87') {
up_1();
console.log("up");
}
if(keyPressed == '83') { 
down_1();
console.log("down");
} 
if(keyPressed == '65') { 
left_1();
console.log("left");
} 
if(keyPressed == '68') {
right_1();
console.log("right");
}
}

window.addEventListener("keydown2", my_keydown2);

function my_keydown2(e) 
{
keyPressed = e.keyCode;
console.log(keyPressed);

if(keyPressed == '87') {
up_2();
console.log("up");
}
if(keyPressed == '83') { 
down_2();
console.log("down");
} 
if(keyPressed == '65') { 
left_2();
console.log("left");
} 
if(keyPressed == '68') {
right_2();
console.log("right");
}
}

function up_1(){
    if(car1_y >=0){
        car1_y = car1_y - 10;
        console.log("When up arrow is pressed, x =" + car1_x +"| y =" + car1_y);
        uploadcar1();
        uploadcar2();
        uploadBackground();
    }
}

function down_1(){
    if(car1_y <=500){
        car1_y = car1_y + 10;
        console.log("When down arrow is pressed, x =" + car1_x +"| y =" + car1_y);
        uploadcar1();
        uploadcar2();
        uploadBackground();
    }
}

function left_1(){
    if(car1_y >=0){
        car1_x = car1_x - 10;
        console.log("When left arrow is pressed, x =" + car1_x +"| y =" + car1_y);
        uploadcar1();
        uploadcar2();
        uploadBackground();
    }
}

function right_1(){
    if(car1_y <=500){
        car1_x = car1_x + 10;
        console.log("When right arrow is pressed, x =" + car1_x +"| y =" + car1_y);
        uploadcar1();
        uploadcar2();
        uploadBackground();
    }
}

function up_2(){
    if(car1_y >=0){
        car1_y = car1_y - 10;
        console.log("When up arrow is pressed, x =" + car1_x +"| y =" + car1_y);
        uploadcar1();
        uploadcar2();
        uploadBackground();
    }
}

function down_2(){
    if(car1_y <=500){
        car1_y = car1_y + 10;
        console.log("When down arrow is pressed, x =" + car1_x +"| y =" + car1_y);
        uploadcar1();
        uploadcar2();
        uploadBackground();
    }
}

function left_2(){
    if(car1_y >=0){
        car1_x = car1_x - 10;
        console.log("When left arrow is pressed, x =" + car1_x +"| y =" + car1_y);
        uploadcar1();
        uploadcar2();
        uploadBackground();
    }
}

function right_2(){
    if(car1_y <=500){
        car1_x = car1_x + 10;
        console.log("When right arrow is pressed, x =" + car1_x +"| y =" + car1_y);
        uploadcar1();
        uploadcar2();
        uploadBackground();
    }
}