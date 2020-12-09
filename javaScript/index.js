
var randomNumber1 = Math.floor(Math.random() * 6) +1;  //1 to 6
var randomDice ="dice" +randomNumber1 + ".png";  //dice1.png to dice6.png
var randomImageSource = "images/" + randomDice;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) +1;  //1 to 6
var randomDice ="dice" +randomNumber2 + ".png";  //dice1.png to dice6.png
var randomImageSource = "images/" + randomDice;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource);


// Player wins

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML = "🌟Player 1 Win";

}
else if(randomNumber2>randomNumber1)
{
  document.querySelector("h1").innerHTML = "🌟Player 2 Win";
}
else {
  document.querySelector("h1").innerHTML = "Draw";
}
