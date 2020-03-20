var score, roundScore, activePlayer, dice;
score = [0, 0];
roundScore = 0;
activePlayer = 0;
dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);
document.querySelector("#current-" + activePlayer).textContent = dice;

//GETTER
//if we want to put some HTML content then we need to put the HTML method.
document.querySelector("#current-0").innerHTML = "<em>" + dice + "</em>";

//if WE do this  without innerHTML by using textContent then it will not display correctly..
//document.querySelector("#score-0").textContent = "<em>" + dice + "</em>";

//SETTER
//This SETS the value of the variable x equals to value of the element i.e.44
//x=document.querySelector('#score-0').textContent;

//If at the starting we want to set the dice not to display then we need to
document.querySelector(".dice").style.display = "none";
