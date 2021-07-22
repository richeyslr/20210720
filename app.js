let favGrizzlies = ["shane battier", "ja morant", "tony allen", "pau gasol", "mike conley", "stromile swift", "mike miller", "vince carter", "zach randolph", "jason williams"];

function greeting(){
  let userName = prompt("Hi! What is your name?");
alert("Welcome to my About Me Site, " + userName + ".");
alert("You are about to take a quiz, " + userName + ", but you might not know the answers yet! Make your best guess.");
}

function takeQuiz(){
  let correctGuesses = 0;
  alert("Respond with yes/no or y/n!")
  let answerOne = prompt("Was I born and raised in Memphis, TN?").toLowerCase();
  if(answerOne == "n" || answerOne == "no"){
    alert("Correct!");
    correctGuesses++;

  }
  else {
    alert("Incorrect!");
  }


  let answerTwo = prompt("Am I a big fan of the Auburn Tigers?").toLowerCase();
  if(answerTwo == "n" || answerOne == "no"){
    alert("Correct!");
    correctGuesses++;
  }
  else {
    alert("Incorrect! Roll tide roll.");
  }


  let answerThree = prompt("Is my favorite sport tennis?").toLowerCase();
  if(answerThree == "y" || answerOne == "yes"){
    alert("Correct! I've played my whole life.");
    correctGuesses++;
  }
  else {
    alert("Incorrect!");
  }


  let answerFour = prompt("Do I think Playstation is the best console to game on?").toLowerCase();
  if(answerFour == "n" || answerOne == "no"){
    alert("Correct! Xbox gang.");
    correctGuesses++;
  }
  else {
    alert("Incorrect! How can you even hold that controller.");
  }


  let answerFive = prompt("Do I like to read??").toLowerCase();
  if(answerFive == "y" || answerOne == "yes"){
    alert("Correct! But the topic has to be interesting to me.");
    correctGuesses++;
  }
  else {
    alert("Incorrect! Well, not totally incorrect, but I do enjoy reading interesting things.");
  }

// let answerSix = prompt("How old was I when I first started playing tennis? You have 4 tries.");
for (i=0; i < 4; i++){
  let answerSix = prompt("How old was I when I first started playing tennis? You have 4 tries.");
  if (answerSix >= 8){
    alert("Too high");
  }
  else if (answerSix <= 6){
    alert("Too low");
  }
  else if (answerSix == 7){
    alert("Correct!");
    correctGuesses++;
    break;
  }


  
}
alert("The correct answer is 7!");


for (i=0; i < 6; i++){
  let answerSeven = prompt("Can you name one of my 10 favorite Memphis Grizzlies players?").toLowerCase();
  if (answerSeven == favGrizzlies[0] || answerSeven == favGrizzlies[1] || answerSeven == favGrizzlies[2] || answerSeven == favGrizzlies[3] || answerSeven == favGrizzlies[4] || answerSeven == favGrizzlies[5] || answerSeven == favGrizzlies[6] || answerSeven == favGrizzlies[7] || answerSeven == favGrizzlies[8] || answerSeven == favGrizzlies[9]){
    alert("Correct! He's definitely in my top 10!");
    correctGuesses++;
    break;
  }
  else {
    alert("Sorry, he didn't make the cut.");
  }
}
alert("My top 10 favorite Grizzlies in no order are: " + favGrizzlies);
alert("You guessed " + correctGuesses + " out of 7 correctly.");

// console.log(correctGuesses);

}
greeting();