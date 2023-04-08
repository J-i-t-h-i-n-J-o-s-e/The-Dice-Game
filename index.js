
var randomNumber1 = Math.floor((Math.random()*6)) + 1 ;
var randomImageNumber1="images/dice" + randomNumber1 +".png";
document.querySelectorAll("img")[0].src=randomImageNumber1;

var randomNumber2 = Math.floor((Math.random()*6)) + 1 ;
var randomImageNumber2="images/dice" + randomNumber2 +".png";
document.querySelectorAll("img")[1].src=randomImageNumber2;


var playerWon;
if (randomNumber1 > randomNumber2){
  playerWon ="Player 1 Wins";
}
else if(randomNumber1 == randomNumber2){
  playerWon="Oops! It's a tie";
}

else{
  playerWon="Player 2 Wins";
}
document.querySelector("h1").innerHTML=playerWon;
