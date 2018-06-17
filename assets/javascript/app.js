var razzies = 0;
var oscars = 0;
var count;
var counter;
var movies = ["assets/videos/wizardofoz.mp4", "assets/videos/babe.mp4", "assets/videos/thegodfather.mp4"]
var applauseIndex = ["assets/images/applause1.gif", "assets/images/applause2.gif", "assets/images/applause3.gif", "assets/images/applause4.gif", "assets/images/applause5.gif"];
var disappointedIndex = ["assets/images/disappointed1.gif", "assets/images/disappointed2.gif", "assets/images/disappointed3.gif"];
var movieOz = ['"I have a feeling we\'re not in Texas anymore"', '"I have a feeling we\'re not in Kansas anymore"', '"I have a feeling we\'re not in Arizona anymore"', '"I have a feeling we\'re not in the Cayman Islands anymore"']
var movieBabe = ['"That\'ll do Babe. That\'ll do."', '"That\'ll do donkey. That\'ll do."', '"That\'ll do friend. That\'ll do."', '"That\'ll do pig. That\'ll do."']
var movieGodfather = ['"I\'m gonna make him a proposal he can\'t refuse"', '"I\'m gonna make him an offer he can\'t refuse"', '"I\'m gonna make him a deal he can\'t refuse"', '"I\'m gonna make him a tiramisu he can\'t refuse"']
var movieJaws = ['"You\'re gonna need a bigger boat"', '"You\'re gonna need a bigger gun"', '"You\'re gonna need a bigger net"', '"You\'re gonna need a bigger float"'];
var movieStarWars = ['"Luke, I am your father"', '"Luke, I am your Daddy"', '"No! I am your father"', '"No! I am your Daddy"']
var question = 0;
var myVar;
var correctText;
var buttonText;
var audienceApplause = new Audio(['assets/audio/applause.mp3']);
var audienceBored = new Audio(['assets/audio/boredaudience.mp3']);


$(document).ready(function(){
// start game
$("#start-game").click(function() {
    $("#box-oscars").css("visibility", "visible");
    $("#box-razzies").css("visibility", "visible");
    $("body").css("background-image", "url(assets/images/oz-background.jpg)");
    $(".game-page").css("border", "5px solid gold");
    question++;
    $("#box-head").html("<h1>The Wizard of Oz</h1>");
    $("#box-answer").html("");
    myVar = setInterval(questionStart, 17000)
    var video = $('<video />', {
        id: 'video',
        src: 'assets/videos/wizardofoz.mp4',
        type: 'video/mp4',
        controls: false,
        autoplay: true
    });
    video.appendTo($('#box-screen'));
   

})
// question
function questionStart() {
    startTimer();
    video.pause();
    clearInterval(myVar);
    $("#box-question").fadeIn();
    myVar = setInterval(answerStart, 1000);
}
// answer
function answerStart() {
    
    if (question == 1){
    correctText = '"I have a feeling we\'re not in Kansas anymore"';
    for (i=0; i<movieOz.length; i++) {
    var buttons = $("<button>");
    buttons.addClass("answers");
    buttons.text(movieOz[i]);
    $("#box-answer").append(buttons);
    }
    clearInterval(myVar)
    }
    if(question == 2){
    correctText = '"That\'ll do pig. That\'ll do."';
    for (i=0; i<movieBabe.length; i++) {
        var buttons = $("<button>");
        buttons.addClass("answers");
        buttons.text(movieBabe[i]);
        $("#box-answer").append(buttons);
        }
        clearInterval(myVar)
    }
    if(question == 3){
    correctText = '"I\'m gonna make him an offer he can\'t refuse"';
        for (i=0; i<movieBabe.length; i++) {
            var buttons = $("<button>");
            buttons.addClass("answers");
            buttons.text(movieGodfather[i]);
            $("#box-answer").append(buttons);
            }
            clearInterval(myVar)
        }
    if(question == 4){
        correctText = '"You\'re gonna need a bigger boat"';
        for (i=0; i<movieJaws.length; i++) {
            var buttons = $("<button>");
            buttons.addClass("answers");
            buttons.text(movieJaws[i]);
            $("#box-answer").append(buttons);
            }
            clearInterval(myVar)
        }
        if(question == 5){
            correctText = '"No! I am your father"';
            for (i=0; i<movieStarWars.length; i++) {
                var buttons = $("<button>");
                buttons.addClass("answers");
                buttons.text(movieStarWars[i]);
                $("#box-answer").append(buttons);
                }
                clearInterval(myVar)
            }
}
// question correct/incorrect
$(document).on("click", ".answers", function() {
    if (question == 1) {
    movieText = $(this).text();
    if (correctText == movieText) {
        $("#box-question").css("display", "none");
        $("#box-answer").html('');
        clearInterval(counter);
        $("#box-timer").html("");
      video.play();
      myVar = setInterval(correctOne, 10000);
    }
    else {
        incorrectOne();
    }
    }
    if (question == 2) {
    movieText = $(this).text();
    if (correctText == movieText) {
        $("#box-question").css("display", "none");
        $("#box-answer").html('');
        clearInterval(counter);
        $("#box-timer").html("");
      video.play();
      myVar = setInterval(correctOne, 12000);
    }
    else {
        incorrectOne();
    }
    }
    if (question == 3) {
    movieText = $(this).text();
    if (correctText == movieText) {
        $("#box-question").css("display", "none");
        $("#box-answer").html('');
        clearInterval(counter);
        $("#box-timer").html("");
      video.play();
      myVar = setInterval(correctOne, 5000);
    }
    else {
        incorrectOne();
    }
    }
    if (question == 4) {
    movieText = $(this).text();
    if (correctText == movieText) {
        $("#box-question").css("display", "none");
        $("#box-answer").html('');
        clearInterval(counter);
        $("#box-timer").html("");
      video.play();
      myVar = setInterval(correctOne, 2000);
    }
    else {
        incorrectOne();
    }
    }
    if (question == 5) {
    
    movieText = $(this).text();
    if (movieText == correctText) {
        $("#box-question").css("display", "none");
        $("#box-screen").html('');
        $("#box-answer").html('');
        clearInterval(counter);
        $("#box-timer").html("");
      playStarWars();
      myVar = setInterval(correctOne, 17000);
    }
    else {
        incorrectOne();
    }
    }
})

// Question correct!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function correctOne() {
    $("body").css("background-image", "url(assets/images/redcurtain.png)");
    oscars++;
    audienceApplause.play();
    console.log(oscars);
    $("#box-oscars").append("<img src='assets/images/oscar-trophie.png' />");
    
    
    $("#box-head").html('<h1>They loved it!</h1>');
    clearInterval(myVar);
    var applause = applauseIndex[Math.floor(Math.random() * (5-1) +1)];
    $("#box-screen").html("<img src=" + applause + " />");
    var button = $("<button>");
    button.addClass("next-question");
    button.text("Next");
    $("#box-answer").append(button);
}
// Question incorrect!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function incorrectOne() {
    audienceBored.play();
    $("body").css("background-image", "url(assets/images/redcurtain.png)");
    clearInterval(counter);
    $("#box-timer").html("");
    razzies++;
    console.log("razzies: " + razzies);
    $("#box-razzies").append("<img src='assets/images/razzie-trophie.png' />");
    $("#box-question").css("display", "none");
    $("#box-answer").html('<h2>The correct line was ' + correctText);
    $("#box-head").html("<h1>What was that?</h1>");
    var disappointed = disappointedIndex[Math.floor(Math.random() * (3-1) +1)];
    $("#box-screen").html("<img src=" + disappointed + " />");
    var button = $("<button>");
    button.addClass("next-question");
    button.text("Next");
    $("#box-answer").append(button);
}


// next movie =========================================================================================================
$(document).on("click", ".next-question", function() {
    audienceBored.pause();
    audienceApplause.pause();
    audienceBored.currentTime = 0;
    audienceApplause.currentTime = 0;
    $("body").css("background-image", "url(assets/images/farm.jpg)");
    $(".game-page").css("border", "5px solid red");
    $("#box-head").html("");
    $("#box-screen").html("");
    if (question == 1) {
    question++;
    $("#box-head").html("<h1>Babe</h1>");
    $("#box-answer").html("");
    var video = $('<video />', {
        id: 'video',
        src: 'assets/videos/babe.mp4',
        type: 'video/mp4',
        controls: false,
        autoplay: true
    });
    video.appendTo($('#box-screen'));
    myVar = setInterval(questionStart, 39000);
    return;
    }
    if (question == 2) {
    $("body").css("background-image", "url(assets/images/zwartevilt.png)");
    $(".game-page").css("border", "5px solid gray");
        question++;
        $("#box-head").html("<h1>The Godfather</h1>");
        $("#box-answer").html("");
        var video = $('<video />', {
            id: 'video',
            src: 'assets/videos/thegodfather.mp4',
            type: 'video/mp4',
            controls: false,
            autoplay: true
        });
        video.appendTo($('#box-screen'));
        myVar = setInterval(questionStart, 32000);
        return;
    }
    if (question == 3) {
        $("body").css("background-image", "url(assets/images/ocean.jpg)");
        $(".game-page").css("border", "5px solid blue");
        question++;
        $("#box-head").html("<h1>Jaws</h1>");
        $("#box-answer").html("");
        var video = $('<video />', {
            id: 'video',
            src: 'assets/videos/jaws.mp4',
            type: 'video/mp4',
            controls: false,
            autoplay: true
        });
        video.appendTo($('#box-screen'));
        myVar = setInterval(questionStart, 18000)
        return;
    }
    if (question == 4) {
        $("body").css("background-image", "url(assets/images/stars.jpg)");
        $(".game-page").css("border", "5px solid rgb(58, 19, 151)");
        question++;
        $("#box-head").html("<h1>Star Wars: A New Hope</h1>");
        $("#box-answer").html("");
        var video = $('<video />', {
            id: 'video',
            src: 'assets/videos/starwars-p1.mp4',
            type: 'video/mp4',
            controls: false,
            autoplay: true
        });
        video.appendTo($('#box-screen'));
        myVar = setInterval(questionStart, 30500)
        return;
    }
    if (question == 5) {
        endGame();
      
    }
    
})
// End game page ==========================================================================================================
function endGame() {
    audienceBored.currentTime = 0;
    audienceApplause.currentTime = 0;
    $("body").css("background-image", "url(assets/images/redcurtain.png)");
    $("#box-oscars").html("");
    $("#box-razzies").html("");
    $("#box-head").html("<h1>Oscars won: </h1>")
    $("#box-screen").html("<h1>Razzies won: </h1>")
    for (i=0; i<oscars; i++) {
        $("#box-head").append("<img src='assets/images/oscar-trophie.png' />");
    }
    for (j=0; j<razzies; j++) {
        $("#oscar-screen").append("<img src='assets/images/razzie-trophie.png' />");
    }
   
   
    
    var button = $("<button>");
    button.addClass("play-again");
    button.text("Play Again");
    $("#box-answer").html(button);
    $("#box-answer").prepend("<br><br>");
    myVar = setInterval(endgameConditions, 1000);
}
function endgameConditions() {
    if (oscars == 5){
        audienceApplause.play();
        $("#box-timer").append("<br><h3>Perfect Game!</h3>")
    }
    if (oscars == 4){
        audienceApplause.play();
        $("#box-timer").append("<br><h3>Great job!</h3>")
    }
    if (oscars == 3){
        audienceApplause.play();
        $("#box-timer").append("<br><h3>Not bad!</h3>")
    }
    if (oscars == 2){
        audienceBored.play();
        $("#box-timer").append("<br><h3>You need improvement!</h3>")
    }
    if (oscars == 1){
        audienceBored.play();
        $("#box-timer").append("<br><h3>Terrible!</h3>")
    }
    if (oscars == 0){
        audienceBored.play();
        $("#box-timer").append("<br><h3>You're fired!</h3>")
    }
    clearInterval(myVar);
}

$(document).on("click", ".play-again", function() {
    location.reload();
})

// timer

function startTimer() {
count=11;

counter=setInterval(timer, 1000);

function timer()
{
  count=count-1;
  if (count < 0)
  {
     clearInterval(counter);
     incorrectOne();
     return;
  }

  $("#box-timer").html("<p>" + count + "</p>")
}
}

})

function playStarWars() {
    var video = $('<video />', {
        id: 'video',
        src: 'assets/videos/starwars-p2.mp4',
        type: 'video/mp4',
        controls: false,
        autoplay: true
    });
    video.appendTo($('#box-screen'));
}

// actual time from star wars clip is 29600. 