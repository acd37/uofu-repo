//Variables
var chosenCharacter;
var chosenOpponent;
var chosenCharImage;
var chosenOppImage;

var goodHealthPoints;
var badHealthPoints;
var newGoodHealthPoints;
var newBadHealthPoints;

var attackPower;
var newAttackPower;
var baseAttackPower;

var counterAttackPower;

var albusImage = "assets/images/dumbledore.png";
var harryImage = "assets/images/harry.png";
var hermioneImage = "assets/images/hermione.png";
var ronImage = "assets/images/ron.png";
var dobbyImage = "assets/images/dobby.png";
var mcgonagallImage = "assets/images/mcgonagall.png";

var voldemortImage = "assets/images/voldemort.png";
var snapeImage = "assets/images/snape.png";
var dracoImage = "assets/images/draco.png";
var bellaImage = "assets/images/bella.png";

var secondOpponent;
var secondOpponentHealth;
var secondOpponentAttackPower;

var winTotal = 0;

//VJS Functions
function generateGoodHealth(){
  goodHealthPoints = Math.floor(Math.random() * (50 - 25 + 1)) + 50;
  return goodHealthPoints;
}

function generateBadHealth(){
  badHealthPoints = Math.floor(Math.random() * (50 - 25 + 1)) + 50;
  return badHealthPoints;
}

function generateSecondBadHealth(){
  secondOpponentHealth = Math.floor(Math.random() * (60 - 30 + 1)) + 60;
  return secondOpponentHealth;
}

function generateAttackPower(){
  attackPower = Math.floor(Math.random() * (6 - 1 + 1 )) +1;
  return attackPower;
}

function generateNewAttackPower(){
  attackPower = attackPower + baseAttackPower;
}

function updateDisplayedAttackPower(){
  $("#attack-power").html('Attack Power: ' + attackPower);
}

function generateCounterAttackPower(){
  counterAttackPower = Math.floor(Math.random() * (6 - 1 + 1 )) +1;
  return counterAttackPower;
}

function generateSecondAttackPower(){
  secondAttackPower = Math.floor(Math.random() * (8 - 3 + 3 )) +3;
  return secondAttackPower;
}

function listFight(){
$("#fight-characters").html(chosenCharacter + ' vs. ' + chosenOpponent);
}

function newListFight(){
  $("#fight-characters").html(chosenCharacter + ' vs. ' + chosenOpponent);
}

function reduceOpponentHealth(){
  newBadHealthPoints = badHealthPoints - attackPower;
  return newBadHealthPoints;
}

function reduceOwnHealth(){
  newGoodHealthPoints = goodHealthPoints - counterAttackPower;
  return newGoodHealthPoints;
}

function generateSecondOpponent(){
  $("#bad-char-col").fadeOut(1);
  if (chosenOpponent === 'Snape'){
    secondOpponent = 'Voldemort';
    chosenOpponent = secondOpponent;
    chosenOppImage = voldemortImage;
  } else if (chosenOpponent === 'Voldemort'){
      secondOpponent = 'Draco';
      chosenOpponent = secondOpponent;
      chosenOppImage = dracoImage;
  } else if (chosenOpponent === 'Draco'){
      secondOpponent = 'Bellatrix';
      chosenOpponent = secondOpponent;
      chosenOppImage = bellaImage;
  } else {
      secondOpponent = 'Snape';
      chosenOpponent = secondOpponent;
      chosenOppImage = snapeImage;
      }
  generateSecondBadHealth();
  badHealthPoints = secondOpponentHealth;
  generateSecondAttackPower();
  counterAttackPower = secondAttackPower;
  $("#opponent-image").attr("src", chosenOppImage);
  newListFight();
  $("#bad-char-col").fadeIn(1200);
}

//jQuery

$("#reset-game").click(function(){
  if (confirm('Warning! This will reset all your game data. Are you sure you want to reset?')){
  location.reload();
  }
});

$(".navbar-brand").click(function(){
  if (confirm('Warning! This will reset all your game data. Are you sure you want to reset?')){
  location.reload();
  }
});

$("#mcgonagall").click(function() {
  $("#mcgonagall").css("border-bottom","15px solid #7f0909");
  $("#harry").css("border-bottom", "4px solid #2f3640");
  $("#hermione").css("border-bottom", "4px solid #2f3640");
  $("#ron").css("border-bottom", "4px solid #2f3640");
  $("#dobby").css("border-bottom", "4px solid #2f3640");
  $("#albus").css("border-bottom", "4px solid #2f3640");
  chosenCharacter = "McGonagall";
  chosenCharImage = mcgonagallImage;
  console.log('chosenchar - ' + chosenCharacter);
  listFight();
});

$("#albus").click(function() {
  $("#albus").css("border-bottom","15px solid #7f0909");
  $("#harry").css("border-bottom", "4px solid #2f3640");
  $("#hermione").css("border-bottom", "4px solid #2f3640");
  $("#ron").css("border-bottom", "4px solid #2f3640");
  $("#mcgonagall").css("border-bottom", "4px solid #2f3640");
  $("#dobby").css("border-bottom", "4px solid #2f3640");
  chosenCharacter = "Dumbledore";
  chosenCharImage = albusImage;
  console.log('chosenchar - ' + chosenCharacter);
  listFight();
});

$("#dobby").click(function() {
  $("#dobby").css("border-bottom","15px solid #7f0909");
  $("#harry").css("border-bottom", "4px solid #2f3640");
  $("#hermione").css("border-bottom", "4px solid #2f3640");
  $("#ron").css("border-bottom", "4px solid #2f3640");
  $("#mcgonagall").css("border-bottom", "4px solid #2f3640");
  $("#albus").css("border-bottom", "4px solid #2f3640");
  chosenCharacter = "Dobby";
  chosenCharImage = dobbyImage;
  console.log('chosenchar - ' + chosenCharacter);
  listFight();
});

$("#harry").click(function() {
  $("#harry").css("border-bottom","15px solid #7f0909");
  $("#hermione").css("border-bottom", "4px solid #2f3640");
  $("#ron").css("border-bottom", "4px solid #2f3640");
  $("#albus").css("border-bottom", "4px solid #2f3640");
  $("#mcgonagall").css("border-bottom", "4px solid #2f3640");
  $("#dobby").css("border-bottom", "4px solid #2f3640");
  chosenCharacter = "Harry";
  chosenCharImage = harryImage;
  console.log(chosenCharImage);
  console.log('chosenchar - ' + chosenCharacter);
  listFight();
});

$("#hermione").click(function() {
  $("#hermione").css("border-bottom","15px solid #7f0909");
  $("#albus").css("border-bottom", "4px solid #2f3640");
  $("#ron").css("border-bottom", "4px solid #2f3640");
  $("#harry").css("border-bottom", "4px solid #2f3640");
  $("#mcgonagall").css("border-bottom", "4px solid #2f3640");
  $("#dobby").css("border-bottom", "4px solid #2f3640");
  chosenCharacter = "Hermione";
  chosenCharImage = hermioneImage;
  console.log('chosenchar - ' + chosenCharacter);
  listFight();
});

$("#ron").click(function() {
  $("#ron").css("border-bottom","15px solid #7f0909");
  $("#albus").css("border-bottom", "4px solid #2f3640");
  $("#hermione").css("border-bottom", "4px solid #2f3640");
  $("#harry").css("border-bottom", "4px solid #2f3640");
  $("#mcgonagall").css("border-bottom", "4px solid #2f3640");
  $("#dobby").css("border-bottom", "4px solid #2f3640");
  chosenCharacter = "Ron";
  chosenCharImage = ronImage;
  console.log('chosenchar - ' + chosenCharacter);
  listFight();
});


$("#snape").click(function() {
  $("#snape").css("border-bottom","15px solid #0d6217");
  $("#draco").css("border-bottom", "4px solid #2f3640");
  $("#voldemort").css("border-bottom", "4px solid #2f3640");
  $("#bella").css("border-bottom", "4px solid #2f3640");
  chosenOpponent = "Snape";
  chosenOppImage = snapeImage;
  console.log('chosenopponent - ' + chosenOpponent);
  listFight();
});

$("#draco").click(function() {
  $("#draco").css("border-bottom","15px solid #0d6217");
  $("#voldemort").css("border-bottom", "4px solid #2f3640");
  $("#snape").css("border-bottom", "4px solid #2f3640");
  $("#bella").css("border-bottom", "4px solid #2f3640");
  chosenOpponent = "Draco";
  chosenOppImage = dracoImage;
  console.log('chosenopponent - ' + chosenOpponent);
  listFight();
});

$("#voldemort").click(function() {
  $("#voldemort").css("border-bottom","15px solid #0d6217");
  $("#snape").css("border-bottom", "4px solid #2f3640");
  $("#draco").css("border-bottom", "4px solid #2f3640");
  $("#bella").css("border-bottom", "4px solid #2f3640");
  chosenOpponent = "Voldemort";
  chosenOppImage = voldemortImage;
  console.log('chosenopponent - ' + chosenOpponent);
  listFight();
});

$("#bella").click(function() {
  $("#bella").css("border-bottom","15px solid #0d6217");
  $("#snape").css("border-bottom", "4px solid #2f3640");
  $("#draco").css("border-bottom", "4px solid #2f3640");
  $("#voldemort").css("border-bottom", "4px solid #2f3640");
  chosenOpponent = "Bellatrix";
  chosenOppImage = bellaImage;
  console.log('chosenopponent - ' + chosenOpponent);
  listFight();
});

$(".good-character").click(function() {
  $(".bad-characters").fadeIn(1200);
  $(window).scrollTo("#bad-characters",800);
});


$(".bad-character").click(function() {
  $("#btn-start").fadeIn(1200);
  $(window).scrollTo("#btn-start",800);
});

$("#scaredy-cat").click(function(){
  if (confirm("Are you sure you want to go back to character selection?")){
  $("#game-play").fadeOut("slow");
  $(".bad-characters").fadeOut(25);
  $("#btn-start").fadeOut(25);
  $("#game-setup").fadeIn("slow");
};
});


$("#btn-start").click(function() {
  if (chosenCharacter === undefined || chosenOpponent === undefined) {
    alert('You must choose a character and an opponent before you can proceed!');
  } else {
  $("#game-setup").fadeOut("slow", function() {
    $("#btn-start").fadeOut(1);
    $(".bad-characters").fadeOut(1);
    $("#game-play").fadeIn("slow");
  });
}
});


//First Opponent

$("#start-fight").click(function(){
  $("#scaredy-cat, #start-fight, #start-fight-title, #instructions").fadeOut(800, function() {
      $("#fight-row").fadeIn(1200);
        $("#char-image").attr("src", chosenCharImage);
        $("#opponent-image").attr("src", chosenOppImage);
        $("#fight-feed").html("Hit attack to start the fight!");


      generateGoodHealth();
        console.log('Good HP - ' + goodHealthPoints);
        $("#good-health-points").html("Health: " + goodHealthPoints);

      generateBadHealth();
        console.log('Bad HP - ' + badHealthPoints);
        $("#bad-health-points").html("Health: " + badHealthPoints)

      generateCounterAttackPower();
        $("#counter-attack-power").html('Counter-attack Power: ' + counterAttackPower);
        console.log("Counter AP - " + counterAttackPower);

      generateAttackPower();
        $("#attack-power").html('Attack Power: ' + attackPower);
        console.log('AP - ' + attackPower);
        baseAttackPower = attackPower;
        console.log('Base AP - ' + baseAttackPower);
        return baseAttackPower;
        $("#attack-power").html("Attack Power: " + attackPower);
    });
  });


$("#attack-button").click(function() {
    $("#fight-feed").html("Nice work!");
    $("#attack-button").click(function() {
      if (badHealthPoints < 20) {
        $("#fight-feed").html("You've almost stunned your opponent!");
      };
    });

  reduceOwnHealth();
    console.log('Current own HP - ' + newGoodHealthPoints);
    $("#good-health-points").html('Health: ' + newGoodHealthPoints);
    goodHealthPoints = newGoodHealthPoints;

  reduceOpponentHealth();
    console.log('Current OP HP - ' + newBadHealthPoints);
    $("#bad-health-points").html('Health: ' + newBadHealthPoints);
    badHealthPoints = newBadHealthPoints;

  generateNewAttackPower();
    console.log('AP - ' + attackPower);

  updateDisplayedAttackPower();


//Generate New Opponent After Win || Reset Game After Loss
if (newBadHealthPoints <= 0) {
  winTotal = winTotal + 1;
  $("#battle-wins").html(winTotal);
  console.log(winTotal);
  alert("Congrats! You have beaten " + chosenOpponent + ". But it's not over!");
  alert("Who will it be next?");
  generateSecondOpponent();
  generateBadHealth();
  generateSecondAttackPower();
  $("#bad-health-points").html("Health: " + badHealthPoints)
  $("#counter-attack-power").html('Counter-attack Power: ' + counterAttackPower);
} else if (goodHealthPoints <= 0) {
      alert('You lost, and Death Eaters have taken over the world. But you did win ' + winTotal + ' battles! Click "OK" to stage a come-back');
      $("#game-play").fadeOut("slow");
      $("#fight-row").fadeOut("slow");
      $("#game-setup").fadeIn("quick");
      $("#start-fight").fadeIn("quick");
    };
});
