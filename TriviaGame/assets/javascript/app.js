//Trivia Questions
var questions = [
    {
      question: "Who became King of England in 1066?",
      answers: [
        "Harold Hardrada",
        "William the Conquerer",
        "Edward I",
        "Henry VIII"
      ],
      correctAnswer: "b"
    },
    {
      question: "Which queen spent the longest time on the throne?",
      answers: [
        "Elizabeth I",
        "Elizabeth II",
        "Mary",
        "Victoria"
      ],
      correctAnswer: "b"
    },
    {
      question: "In which of these years did the Great Fire of London occur?",
      answers: [
        "1542",
        "1666",
        "1890",
        "1703"
      ],
      correctAnswer: "b"
    },
    {
      question: "Which of these was known as the official London residence of Queen Elizabeth II of England",
      answers: [
        "Westminster Abbey",
        "Tower of London",
        "Buckingham Palace",
        "Kensington Palace"
      ],
      correctAnswer: "c"
    },
    {
      question: "Which country borders England to the west?",
      answers: [
        "Scotland",
        "Northern Ireland",
        "Republic of Ireland",
        "Wales"
      ],
      correctAnswer: "d"
    },
    {
      question: "Which county is nicknamed the 'garden of England?'",
      answers: [
        "Sussex",
        "Kent",
        "Yorkshire",
        "Somerset"
      ],
      correctAnswer: "b"
    },
    {
      question: "Who is the patron saint of England?",
      answers: [
        "Saint Michael",
        "Saint David",
        "Saint Patrick",
        "Saint George"
      ],
      correctAnswer: "d"
    },
    {
      question: "In which part of the country do people speak with a 'geordie' accent?",
      answers: [
        "Newcastle",
        "Manchester",
        "Cornwall",
        "Yorkshire"
      ],
      correctAnswer: "a"
    },
    {
      question: "When is Guy Fawkes Night, more colloquially known as 'fireworks night', celebrated?",
      answers: [
        "5 September",
        "5 December",
        "5 November",
        "5 August"
      ],
      correctAnswer: "c"
    },
    {
      question: "What do many people wear and display on Remembrance Day in memory of the people who died?",
      answers: [
        "carnatons",
        "poppies",
        "roses",
        "daisies"
      ],
      correctAnswer: "b"
    }
  ]

//Variables
var incorrectTotal = 0;
var correctTotal = 0;
var correctAnswer;
var selectedAnswer;
var currentQuestion;
var i;
var remainingTime = 3;
var timer;


//Timer
function timer(){
  var i = 10;
  var timer = setInterval(function() {

    console.log(i);
    i--;
    $("#timer").html("<div id='timer'>"+ i +"</div>")
    if(i > 3){
      $("#timer").removeClass("timer-alert").addClass("time");
    } else if (i <= 3){
      $("#timer").removeClass("time").addClass("timer-alert");
    }

    if(i === 0){
      clearInterval(timer);
      alert("Time's up! The correct answer was " + correctAnswer + "." )
      $("#question-block").fadeOut();
      $("#scorecard").fadeOut();
      $("#submit").fadeOut();
      $("#incorrect-block").fadeIn();
      setTimeout(function() { continueGame(); }, 3000);
      incorrectTotal++;
    }
    $("#submit").click(function(){
      clearInterval(timer);
    })
  }, 1000);
}



//Gameplay
$( "#start" ).click(function() {
  i = 0;
  generateQuestion();
  $("#scorecard").fadeIn();
  console.log('Correct answer - ' + correctAnswer);
  $("#response").html("<button class='btn-ans' id='btnA' value='a' onclick='logAnswer(this.value)'>A</button><button class='btn-ans' id='btnB' value='b' onclick='logAnswer(this.value)'>B</button><button class='btn-ans' id='btnC' value='c' onclick='logAnswer(this.value)'>C</button><button class='btn-ans' id='btnD' value='d' onclick='logAnswer(this.value)'>D</button>")
  logAnswer();
  $("#submit").fadeIn();
  $("#start").fadeOut();
  $("#instructions").fadeOut();
});



function generateQuestion(){
  timer();
  $("#question").html("<div class='question'><h2>" + questions[i].question + "</h2></div");
  $("#answers").html("<div><p id='answerA'>A: " + questions[i].answers[0] +
  "</p><p id='answerB'>B: " + questions[i].answers[1] +
  "</p><p id='answerC'>C: " + questions[i].answers[2] +
  "</p><p id='answerC'>D: " + questions[i].answers[3] + "</p></div>")
  correctAnswer = questions[i].correctAnswer;
}

function logAnswer(value){
  selectedAnswer = value;
}

function verifyAnswer(){
    if (selectedAnswer === undefined) {
      alert('You must select a response!')
    } else {
    $("#question-block").fadeOut();
    $("#scorecard").fadeOut();
    $("#submit").fadeOut();
        if (selectedAnswer === correctAnswer) {
          correctTotal++; //add 1 to total if correct
      $("#correct-block").fadeIn();
        } else {
          incorrectTotal++; //add 1 tot total if incorrect
      $("#incorrect-block").fadeIn();
    }
    selectedAnswer = undefined; //set selectedAnswer back to undefined
    setTimeout(function() { continueGame(); }, 3000); //continue to the next question
    }
}

function continueGame(){
    $("#correct-block").fadeOut();
    $("#incorrect-block").fadeOut();
    $("#scorecard").fadeIn();
    $("#correct-score").html(correctTotal); //update totals on page
    $("#incorrect-score").html(incorrectTotal); // update totals on page
    i++ //add 1 to questions asked
    if (i < 10){
      generateQuestion(); //generate new question if less than 10
      $("#question-block").fadeIn();
      $("#submit").fadeIn();
    } else {
      $("#timer").fadeOut(); //hide the timer at the end
      $("#result-block").fadeIn(); //if all questions asked, show the final results
    }
}
