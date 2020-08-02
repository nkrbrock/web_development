var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

var image1 = "images/dice" + randomNumber1 + ".png";
var image2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", image1);
document.querySelectorAll("img")[1].setAttribute("src", image2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "Player One Wins! ⛳"; 
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerText = "Player Two Wins! ⛳"; 
}
else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerText = "Draw";
}