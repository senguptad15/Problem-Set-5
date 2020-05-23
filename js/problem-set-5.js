
function guess() {

  let attempts = 0;
  let randnum = Math.floor(Math.random()*99) + 1;
  let found = false;
  let usrnum;

  while(found == false) {

    usrnum = Number(prompt("You have 10 attempts to guess the random number picked by the computer. Input Your Guess For An Integer Between 1 And 100"));
    if (usrnum <= 100 && usrnum >= 1 && Number.isInteger(usrnum)) {
      if(usrnum > randnum) {
        attempts+=1;
        alert("This guess was too high. You have used " + attempts + " out of 10 attempts")
      }
      else if(usrnum < randnum) {
        attempts+=1;
        alert("This guess was too low. You have used " + attempts + " out of 10 attempts")
      }
      else if(usrnum == randnum) {
        alert("That was the correct guess")
        attempts+=1;
        found = true;
        document.getElementById("guess-output").innerHTML = "CONGRATULATIONS!!!! <br/>The correct number was: " + randnum + "<br/> You took  " + attempts + " attempts!";
      }
      if (attempts > 9){
        alert("You have used the maximum numbers of attempts. Please try again")
        document.getElementById("guess-output").innerHTML = "  "
        return;
      }
    }
    else {
      alert("You have entered an invalid number or you have canceled the game")
      document.getElementById("guess-output").innerHTML = "  "
      return;
    }

  }

}
