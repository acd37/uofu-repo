//********* VARIABLES
var ginWord = [
  'gordons', 'boodles', 'hendricks', 'beefeater', 'tanqueray', 'bombay sapphire', 'plymouth', 'seagrams', 'caorunn', 'brockmans', 'bloom',
  'knickerbocker', 'sipsmiths', 'boatyard', 'becketts', 'bulldog', 'cremorne', 'chilgrove', 'gilpins', 'hibernation', 'langleys', 'madampattirini',
  'slingsby', 'wannaborga', 'zuidam'
];

var possibleLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

var totalLives = 11;

var randomGin;

var answerArray = [];

var displayArray;

var splitRandomGin;

//Start game
function startGame() {
  randomGin = ginWord[Math.floor(Math.random() * ginWord.length)];
  console.log(randomGin);
  splitRandomGin();
  displayArray();
  document.getElementById('answerArray').innerHTML = (displayArray);
  loadLives();
  document.getElementById("startGame").disabled = true;
}

//Load lives
function loadLives() {
  document.getElementById('lives-remaining').innerHTML = totalLives;
}

//Deplete Lives
function hangmanDeath() {
  totalLives = totalLives - 1;
  return totalLives;
}

//Reset game
function resetGame() {
  location.reload();
}

//Split the randomly selected word into an array of letters
function splitRandomGin() {
  splitRandomGin = randomGin.split('');
  console.log(randomGin.split(''));
}

// Set up answer line
function displayArray() {
  for (i = 0; i < splitRandomGin.length; i++) {
    answerArray[i] = '_';
  }
  console.log(answerArray);
  displayArray = answerArray.join(' ');
}

// Update the on-screen blanks in the HTML
function updateDisplayArray() {
  displayArray = answerArray.join(' ');
  document.getElementById('answerArray').innerHTML = (displayArray);
}

//  Clear user input box on submit
function clearInput() {
  document.getElementById('letterChoice').value = '';
}

// Get user input
function getLetter() {
  letterChoice = document.getElementById('letterChoice').value;
  letterChoice = letterChoice.toLowerCase();
  console.log('letterChoice - ', letterChoice);
  console.log('answerArray - ', answerArray);
  console.log('splitRandomGinArray - ', splitRandomGin);
  console.log('displayArray - ', displayArray);

  //Display used possibleLetters
  function displayUsedLetters() {
    var usedLetters = letterChoice
  }

  // need to check if the letter choosen is in the index of the splitRandomGin array
  if (splitRandomGin.indexOf(letterChoice) !== -1) {
    // if it is, loop through answer array and for every blank in answer array, check to see if the letter choosen is at an index in the splitRandomGin array and update the blank spot with the right letter selected.

    for (var i = 0; i < splitRandomGin.length; i++) {

      // console.log("Answer Array ----> ", answerArray)
      if (letterChoice === splitRandomGin[i]) {
        answerArray[i] = letterChoice;
        console.log('newAnswerArray --->', answerArray);
        updateDisplayArray();
        clearInput();
        if (answerArray.toString() === splitRandomGin.toString()) {
          alert('Congratulations! You avoided being hanged!');
        } // update the html on the screen with the letters
      }
      //clears the input field for next letterChoice
    }
  } else {
    clearInput();
    alert("This letter isn't in the word! Sorry!");
    hangmanDeath();
    console.log(totalLives);
    document.getElementById('lives-remaining').innerHTML = totalLives;
    if (totalLives === 0) {
      alert('Sorry! Game over! You were publicly hanged because of your drunkenness. The gin you wanted was "' + randomGin + '". ');
      resetGame();
    }

  }
}
