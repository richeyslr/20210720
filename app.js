function greeting(){
  let userName = prompt("Hi! What is your name?");
alert("Welcome to my About Me Site, " + userName + ".");
alert("Read my story carefully, " + userName + ", because you may be quizzed on me later!");
}

function takeQuiz(){
  alert("Respond with yes/no or y/n!")
  let answerOne = prompt("Was I born and raised in Memphis, TN?").toLowerCase();
  if(answerOne == "n" || answerOne == "no"){
    alert("Correct!");
  }
  else {
    alert("Incorrect!");
  }


  let answerTwo = prompt("Am I a big fan of the Auburn Tigers?").toLowerCase();
  if(answerTwo == "n" || answerOne == "no"){
    alert("Correct!");
  }
  else {
    alert("Incorrect! And you're not being funny!");
  }


  let answerThree = prompt("Is my favorite sport tennis?").toLowerCase();
  if(answerThree == "y" || answerOne == "yes"){
    alert("Correct! I still love tennis.");
  }
  else {
    alert("Incorrect! Although I could see why you'd think that!");
  }


  let answerFour = prompt("Did I have my priorities in order when setting previous goals for myself?").toLowerCase();
  if(answerFour == "n" || answerOne == "no"){
    alert("Correct!");
  }
  else {
    alert("Incorrect! I can confidently say I did not.");
  }


  let answerFive = prompt("Do I have my priorites in order for my current goals here at CodeCrew?").toLowerCase();
  if(answerFive == "y" || answerOne == "yes"){
    alert("Correct! And I'll prove it to you!");
  }
  else {
    alert("Incorrect! And I'll show you why you're wrong!");
  }


}
greeting();