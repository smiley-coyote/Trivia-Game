var flops = 0;
var oscars = 0;
var count;
var counter;
var applauseIndex = ["assets/images/applause1.gif", "assets/images/applause2.gif", "assets/images/applause3.gif", "assets/images/applause4.gif",];
var currentMovie;
var applause = "";
var questions = 0;

// start game
$("#start-game").click(function() {
    $(".game-start").css("display", "none");
    $("#question-1").css("display", "block");
    $(".box-question").css("display", "none");
    $(".box-answer").css("display", "none");
    questionOne();
})

// question 1 start ================================================================================================

function questionOne() {
    questions++;
    currentMovie = document.getElementById("oz");
    currentMovie.play();
    setTimeout(pauseMe, 1000);
}



$(".answer").on("click", function() {
    var correctText = '"I\'m afraid we\'re not in Kansas anymore"';
    var buttonText = $(this).text();
    if (buttonText == correctText) {
        playerOscar();
        $(".box-question").fadeOut();
        $(".box-answer").fadeOut();
        $(".box-timer").css("display", "none");
        clearInterval(counter);
        currentMovie.play();
        setInterval(playOscars, 1000);
    }
})

function playOscars() {
    
    $(".box-screen").fadeOut();
    currentMovie = document.getElementById("babe");
    applause = "assets/images/applause1.gif"
    $(".oscar-screen").html("<img src=" + applause + " />")
    var newButton = $("<button>Next Question</button>");
    newButton.addClass("start2");
    $(".box-question").html(newButton);
    $(".box-question").css("display", "block");
}

// question 2 =====================================================================================================


$(document).on("click", ".start2", function() {


    
    
    $("#question-2").css("display", "block");
    currentMovie.play();
    setTimeout(pauseMe, 1000 * 39);


})

// timers and questions/answer functions
function pauseMe() {
    answers();
    currentMovie.pause();
}

function answers() {
    $(".box-question").fadeIn();
    setTimeout(textFadeIn, 1000);
}

function textFadeIn() {
    startTimer();
    $(".box-answer").fadeIn();
}

function startTimer() {
count=111;

counter=setInterval(timer, 1000);

function timer()
{
  count=count-1;
  if (count < 0)
  {
     clearInterval(counter);
     timesUp();
     return;
  }

  $(".box-timer").html("<p>" + count + "</p>")
}
}

function timesUp() {
    $(".box-question").fadeOut();
    $(".box-answer").fadeOut();
    $(".box-timer").fadeOut();
    playerFlop();
}

function playerFlop() {
    flops++;
    $("#box-flops").html("Flops: " + flops)
}
function playerOscar() {
    oscars++;
    $("#box-oscars").html("Oscars: " + oscars)
}