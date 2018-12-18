/*
 * Mario. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style half-pyramid of that height.
 *
 *     ##
 *    ###
 *   ####
 *  #####
 * ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function mario() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 1 CODE HERE
  let hash = '#';
  let space = '&nbsp;'
  let lines = '';
  while(true) {
    height = Number(prompt("Enter An Integer Between 1 And 23"));
    if(height >= 1 && height <= 23 && Number.isInteger(height)) {
      for(let i=0; i<height; i++) {

        for(let j=0; j<=(height-2-i);j++) {
          lines = lines + space;
        }

        for(let k=0; k<=(1+i);k++) {
          lines = lines + hash;
        }

        lines = lines + "<br>";
      }
      document.getElementById("mario-easy-output").innerHTML="<code>"+lines+"</code>";
      break;
    }

  }

  ////////////////////////// DO NOT MODIFY
  check('mario', height); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Mario, Again. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style pyramid of that height.
 *
 *     ##  ##
 *    ###  ###
 *   ####  ####
 *  #####  #####
 * ######  ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function marioAgain() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 2 CODE HERE
  let hash = '#';
  let space = '&nbsp;'
  let lines = '';
  while(true) {
    height = Number(prompt("Enter An Integer Between 1 And 23"));
    if(height >= 1 && height <= 23 && Number.isInteger(height)) {
      for(let i=0; i<height; i++) {

        for(let j=0; j<=(height-2-i);j++) {
          lines = lines + space;
        }

        for(let k=0; k<=(1+i);k++) {
          lines = lines + hash;
        }

        lines = lines + space + space;

        for(let a=0; a<=(1+i);a++) {
          lines = lines + hash;
        }

        lines = lines + "<br>";
      }
      document.getElementById("mario-hard-output").innerHTML="<code>"+lines+"</code>";
      break;
    }

  }

  //////////////////////////////// DO NOT MODIFY
  check('mario-again', height); // DO NOT MODIFY
  //////////////////////////////// DO NOT MODIFY
}

/*
 * Credit. 10 points.
 *
 * Write a function that prompts the user for a credit card number (valid
 * and invalid examples will be provided), and displays either:
 *   - an invalid image (provided)
 *   - an American Express image (provided)
 *   - a Mastercard image (provided)
 *   - a Visa image (provided)
 *
 * We'll use Luhn's algorithm to determine the validity of a credit card
 * number. Review the steps of the algorithm below.
 *
 *   0. Multiply every other digit by 2, starting with the number’s
 *      second-to-last digit, and then add those products' digits together.
 *   1. Add the sum to the sum of the digits that weren’t multiplied by 2.
 *   2. If the total’s last digit is 0 (or, put more formally, if the total
 *      modulo 10 is congruent to 0), the number is valid!
 *
 * American Express uses 15-digit numbers, starting with 34 or 37.
 * Mastercard uses uses 16-digit numbers, starting with 51, 52, 53, 54,
 * or 55. Visa uses 13- or 16-digit numbers, starting with 4.
 *
 * 378282246310005 should verify as American Express.
 * 371449635398431 should verify as American Express.
 * 5555555555554444 should verify as Mastercard.
 * 5105105105105100 should verify as Mastercard.
 * 4111111111111111 should verify as Visa.
 * 4012888888881881 should verify as Visa.
 *
 * Credit card numbers must be integers. Users should be continuously
 * re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

 function credit() {

//////////// DO NOT MODIFY
let card; // DO NOT MODIFY
//////////// DO NOT MODIFY

// WRITE YOUR EXERCISE 3 CODE HERE
card=prompt("Please enter a credit card number");
while(card%1!=0){
  card=prompt("Please enter a credit card number")
}
let p = document.getElementById("credit-output");
let sum = 0;
let charAtIndex;
  for(let i = card.length-2; i >= 0; i -= 2){
    if((Number(card[i]))*2 > 9){
      charAtIndex = String(Number(card[i])*2);
      sum += Number(charAtIndex[0]) + Number(charAtIndex[1]);
    }else{
      sum += Number(card[i])*2;
    }
  }
  for(i = card.length-1; i >= 0; i -= 2){
    sum += Number(card[i]);
  }
if(card.length == 15 && card[0] == "3" && card[1] == "4" && sum%10==0 || card.length == 15 && card[0] == "3" && card[1]=="7" && sum%10==0){
  p.innerHTML = "<img src='images/amex.png'>";
}else if(card.length == 16 && card[0] == "5" && card[1]>="1" && card[1]<="5" && sum%10==0){
  p.innerHTML = "<img src='images/mastercard.png'>";
}else if(card[0] == "4" && card.length == 13 && sum%10 == 0 || card[0] == "4" && card.length == 16 && sum % 10 == 0){
  p.innerHTML = "<img src='images/visa.png'>";
}else{
  p.innerHTML = "<img src='images/invalid.png'>";
}
card = Number(card);


   /*
    * NOTE: After reading in the card number and storing it in the 'card'
    *       variable, do not modify it. If you find it necessary to manipulate
    *       this value, you will need to create a second variable to serve
    *       as a copy of the 'card' variable.
    */

   ///////////////////////// DO NOT MODIFY
   check('credit', card); // DO NOT MODIFY
   ///////////////////////// DO NOT MODIFY
 }


/*
 * Guess. 5 points.
 *
 * Write a function that generates a random number, and asks the user to
 * try to guess this number. When all is said and done, your function
 * should output the random number and the number of attempts it took the
 * user to correctly guess that number. Your function should also provided
 * helpful hints, indicating whether the most recent guess was greater than
 * or less than the target.
 *
 * Random numbers must be between 1 and 1000. User guesses must be integers
 * within the range [1, 1000], and users should be continuously re-prompted
 * until they comply with this restriction. In the event a user guesses
 * something that violates this restriction, an attempt should not be
 * recorded.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function guess() {

  // WRITE YOUR EXERCISE 4 CODE HERE
  let attempts = 0;
  let randnum = Math.floor(Math.random()*999) + 1;
  let found = false;
  let usrnum;
  while(found == false) {
    usrnum = Number(prompt("Input Your Guess For An Integer Between 1 And 1000"));
    if (usrnum <= 1000 && usrnum >= 1 && Number.isInteger(usrnum)) {
      if(usrnum > randnum) {
        alert("This guess was too high")
        attempts+=1;
      }
      else if(usrnum < randnum) {
        alert("This guess was too low")
        attempts+=1;
      }
      else if(usrnum == randnum) {
        alert("That was the correct guess")
        attempts+=1;
        found = true;
        document.getElementById("guess-output").innerHTML = "Number: " + randnum + "<br/>Attempts: " + attempts;
      }
    }
    else {
      continue;
    }

  }

  ////////////////// DO NOT MODIFY
  check('guess'); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hurricane. 5 points.
 *
 * Write a function that prompts the user to enter a windspeed, and prints
 * the hurricane category (if applicable) for that windspeed. We'll be
 * using the Saffir-Simpson scale, shown below in MPH.
 *   - Category 5: 157+
 *   - Category 4: 130-156
 *   - Category 3: 111-129
 *   - Catgeory 2: 96-110
 *   - Category 1: 74-95
 *   - Tropical Storm: 39-73
 *
 * Windspeeds must be non-negative integers in the range [0, INF), and
 * users should be continuously re-prompted until they comply with this
 * restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

 function hurricane() {

   ///////////////// DO NOT MODIFY
   let windspeed; // DO NOT MODIFY
   ///////////////// DO NOT MODIFY

   while(true) {
     windspeed = Number(prompt("What is the windspeed?"));
     if (windspeed >= 0 && Number.isInteger(windspeed)) {
       if(windspeed >= 157) {
         document.getElementById("hurricane-output").innerHTML = "Category 5 Hurricane.";
       }
       else if(windspeed >= 130) {
         document.getElementById("hurricane-output").innerHTML = "Category 4 Hurricane.";
       }
       else if(windspeed >= 111) {
         document.getElementById("hurricane-output").innerHTML = "Category 3 Hurricane.";
       }
       else if(windspeed >= 96) {
         document.getElementById("hurricane-output").innerHTML = "Category 2 Hurricane.";
       }
       else if(windspeed >= 74) {
         document.getElementById("hurricane-output").innerHTML = "Category 1 Hurricane.";
       }
       else if(windspeed >= 39) {
         document.getElementById("hurricane-output").innerHTML = "Tropical Storm.";
       }
       else if(windspeed <= 38) {
         document.getElementById("hurricane-output").innerHTML = "The skies are calm...";
       }
       break;
     }
     else {
       continue;
     }

   }

  ///////////////////////////////// DO NOT MODIFY
  check('hurricane', windspeed); // DO NOT MODIFY
  ///////////////////////////////// DO NOT MODIFY
}

/*
 * Gymnastics. 5 points.
 *
 * Write a function that prompts the user to enter six scores. From those
 * six scores, the lowest and highest should be discarded. An average score
 * should be computed from the remaining four. Your function should output
 * the discarded scores, as well as the average score.
 *
 * Scores must be real numbers in the range [0.0, 10.0], and users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function gymnastics() {

  /////////////////// DO NOT MODIFY
  let total = 0; //// DO NOT MODIFY
  let scores = []; // DO NOT MODIFY
  /////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'total' variable should be representative of the sum of all
   *       six of the judges' scores.
   */

  /*
   * NOTE: You need to add each score (valid or not) to the 'scores' variable.
   *       To do this, use the following syntax:
   *
   *       scores.push(firstScore);   // your variable names for your scores
   *       scores.push(secondScore);  // will likely be different than mine
   */

   for (let i = 0; i<=5; i++){
       do {
         score = Number(prompt(`What is score ${i+1}?`));
       } while (score < 0.0 || score > 10.0);
       scores.push(score);
     }

     total = scores.reduce((a,b) => a + b, 0);
     let l = scores.indexOf(Math.min(...scores));
     let low = scores[l];
     let h = scores.indexOf(Math.max(...scores));
     let high = scores[h];
     let avg = ((total - low - high) / (scores.length-2)).toFixed(2);

     let op = document.getElementById("gymnastics-output");
     op.innerHTML = `Discarded: ${low}, ${high}<br/>Score: ${avg}`;

  /////////////////////////////// DO NOT MODIFY
  check('gymnastics', scores); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Report Card. 5 points.
 *
 * Write a function that prompts the user to enter test, quiz, and homework
 * grades for the marking period. Users can enter as many grades of each
 * category, entering -1 to signal they are finished. Your function should
 * output the user's final grade, where tests, quizzes, and homework are
 * weighted at 60%, 30%, and 10%, respectively.
 *
 * Grades must be real numbers in the range [0.0, 100.0], and users should
 * be continuously re-prompted until they comply with this restriction. The
 * only exception is -1, which signals the user is finished entering grades
 * for that category.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

 function reportCard() {

   ///////////////////////// DO NOT MODIFY
   let testTotal = 0; ////// DO NOT MODIFY
   let quizTotal = 0; ////// DO NOT MODIFY
   let homeworkTotal = 0; // DO NOT MODIFY
   ///////////////////////// DO NOT MODIFY

   /*
    * NOTE: The 'testTotal', 'quizTotal', and 'homeworkTotal' variables
    *       should be representative of the sum of the test scores, quiz
    *       scores, and homework scores the user enters, respectively.
    */

   ///////////////////// DO NOT MODIFY
   let tests = 0; ////// DO NOT MODIFY
   let quizzes = 0; //// DO NOT MODIFY
   let homeworks = 0; // DO NOT MODIFY
   ///////////////////// DO NOT MODIFY

   let testscore;
   let quizscore;
   let homeworkscore;
   let testAverage;
   let quizAverage;
   let homeworkAverage;
   let totalAverage;
   /*
    * NOTE: The 'tests', 'quizzes', and 'homeworks' variables should be
    *       representative of the number of tests, quizzes, and homework
    *       grades the user enters, respectively.
    */

 testscore = prompt('Please enter a positive number between 1 and 100 for your test score. Enter -1 if you have entered all of your scores.');
    while (testscore) {
      testscore = parseFloat(testscore);

   if (testscore == -1){
     testscore = false;
     break;
   }
 else if(testscore <= 100.00 && 0.0 <= testscore)
   {
     tests += 1;
     testTotal += testscore;
   }
   else{
   }
   testscore = prompt('Please enter a positive number between 1 and 100 for your test score. Enter -1 if you have entered all of your scores.')
 }
 quizscore = prompt('Please enter a positive number between 1 and 100 for your quiz score. Enter -1 if you have entered all of your scores.');
 while (quizscore) {
   quizscore = parseFloat(quizscore);

 if (quizscore == -1){
  quizscore = false;
  break;
   }
 else if(quizscore <= 100.00 && 0.0 <= quizscore)
 {
  quizzes += 1;
  quizTotal += quizscore;
 }
 else{
 }
 quizscore = prompt('Please enter a positive number between 1 and 100 for your quiz score. Enter -1 if you have entered all of your scores.')
 }

 homeworkscore = prompt('Please enter a positive number between 1 and 100 for your homework score. Enter -1 if you have entered all of your scores.');
 while (homeworkscore) {
   homeworkscore = parseFloat(homeworkscore);

 if (homeworkscore == -1){
  homeworkscore = false;
  break;
 }
 else if(homeworkscore <= 100.00 && 0.0 <= homeworkscore)
 {
  homeworks += 1;
  homeworkTotal += homeworkscore;
 }
 else{
 }
 homeworkscore = prompt('Please enter a positive number between 1 and 100 for your homework score. Enter -1 if you have entered all of your scores.')
 }

 testAverage = testTotal/tests;
 quizAverage = quizTotal/quizzes;
 homeworkAverage = homeworkTotal/homeworks;
 totalAverage = (testAverage * 0.6) + (quizAverage * 0.3) + (homeworkAverage * 0.1);

 document.getElementById("report-card-output").innerHTML = "Tests: " + testAverage.toFixed(2) + "</br>Quizzes: " + quizAverage.toFixed(2) + "</br>Homework: " + homeworkAverage.toFixed(2) + "</br>Grade: " + totalAverage.toFixed(2);


   /////////////////////// DO NOT MODIFY
   check('report-card', // DO NOT MODIFY
     testTotal, ////////// DO NOT MODIFY
     tests, ////////////// DO NOT MODIFY
     quizTotal, ////////// DO NOT MODIFY
     quizzes, //////////// DO NOT MODIFY
     homeworkTotal, ////// DO NOT MODIFY
     homeworks /////////// DO NOT MODIFY
   ); //////////////////// DO NOT MODIFY
   /////////////////////// DO NOT MODIFY
 }
