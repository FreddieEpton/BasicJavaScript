// Test Start
var playerName = prompt("Welcome! Enter your name below and press OK to start the test.");
// xD
if(playerName === "Tom" || playerName === "tom"){
	alert("Player name not allowed too homosexual!")
}
alert("This test will put your logistics knowledge on the line. So buckle in " + playerName + " and press OK when you're ready to begin!");
// Player Score
var playerScore = 0
// True/False Questions
alert("To start off, you must answer true or false to the following statements.");
// Question 1 : two chinas
var Q1 = prompt("There is more than one country with China in their name.");
if(Q1 === "true" || Q1 === "True" || Q1 === "True."){
	playerScore++;
	alert("Correct! " + playerScore + "/3 That was easy, try another one.");
}else{
	alert("Incorrect. " + playerScore + "/3 Mainland China is called the People's Republic of China and Taiwan is officially called the Republic of China.");
}
// Question 2 : double landlocked countries
var Q2 = prompt("Uzbekistan is the only country in the world surrounded by landlocked countries.");
if(Q2 === "false" || Q2 === "False" || Q2 === "False."){
	playerScore++;
	alert("Correct. " + playerScore + "/3 Now time for a fun one.");
}else{
	alert("Incorrect. " + playerScore + "/3 This is referred to as 'doubly landlocked', Liechtenstein is the only other country of this type being sat between Switzerland and Austria.");
}
// Question 3 : continents without desert
var Q3 = prompt("There are no continents in the world without a desert.");
if(Q3 === "false" || Q3 === "False" || Q3 === "False."){
	playerScore++;
	alert("Correct. " + playerScore + "/3 You have finished the True/False section.");
}else{
	alert("Incorrect. " + playerScore + "/3 Luckily for you it seems this is the end of the True/False section.");
}
