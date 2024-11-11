


function randomimg(img)
{

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var imgl = "./images/"+"dice" + randomNumber1 + ".png";

var imga = document.querySelector("."+img);
    imga.setAttribute("src",imgl);
    return randomNumber1;
}


var number1 = randomimg("img1");
var number2 = randomimg("img2");

if(number1 > number2)
    document.querySelector("h1").innerHTML = "Player 1 win!";
else if (number1 < number2)
    document.querySelector("h1").innerHTML = "Player 2 win!";
else
    document.querySelector("h1").innerHTML = "Draw!";