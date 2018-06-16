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
var question = 0;
var myVar;
var myVar2;
var ozText = "";


$(document).ready(function(){
// start game
$("#start-game").click(function() {
    question++;
    $("#box-head").html("<h1>Wizard of Oz</h1>");
    $("#box-answer").html("");
    myVar = setInterval(questionStart, 1000)
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
    video.pause();
    clearInterval(myVar);
    $("#box-question").fadeIn();
    myVar = setInterval(answerStart, 1000);
}
// answer
function answerStart() {
    if (question == 1){
    for (i=0; i<movieOz.length; i++) {
    var buttons = $("<button>");
    buttons.addClass("answers");
    buttons.text(movieOz[i]);
    $("#box-answer").append(buttons);
    }
    clearInterval(myVar)
    }
    if(question == 2){
    for (i=0; i<movieBabe.length; i++) {
        var buttons = $("<button>");
        buttons.addClass("answers");
        buttons.text(movieBabe[i]);
        $("#box-answer").append(buttons);
        }
        clearInterval(myVar)
    }
    if(question == 3){
        for (i=0; i<movieBabe.length; i++) {
            var buttons = $("<button>");
            buttons.addClass("answers");
            buttons.text(movieGodfather[i]);
            $("#box-answer").append(buttons);
            }
            clearInterval(myVar)
        }
}
// question correct/incorrect
$(document).on("click", ".answers", function() {
    if (question == 1) {
    var oz = '"I have a feeling we\'re not in Kansas anymore"';
    ozText = $(this).text();
    if (oz == ozText) {
      video.play();
      myVar = setInterval(correctOne, 1000);
    }
    else {
        incorrectOne();
    }
    }
    if (question == 2) {
        var pig = '"That\'ll do pig. That\'ll do."';
    var pigText = $(this).text();
    if (pig == pigText) {
      video.play();
      myVar = setInterval(correctOne, 1000);
    }
    else {
        incorrectOne();
    }
    }
    if (question == 3) {
        var godfather = '"I\'m gonna make him an offer he can\'t refuse"';
    var godfatherText = $(this).text();
    if (godfather == godfatherText) {
      video.play();
      myVar = setInterval(correctOne, 1000);
    }
    else {
        incorrectOne();
    }
    }
})

// Question correct!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function correctOne() {
    oscars++;
    
    console.log(oscars);
    $("#box-oscars").append("<img src='assets/images/oscar-trophie.png' />");
    $("#box-question").css("display", "none");
    $("#box-answer").html('');
    $("#box-head").html('They loved it!');
    clearInterval(myVar);
    var applause = applauseIndex[Math.floor(Math.random() * (5-1) +1)];
    $("#box-screen").html("<img src=" + applause + " />");
    var button = $("<button>");
    button.addClass("next-question");
    button.text("Next Movie");
    $("#box-answer").append(button);
}
// Question incorrect!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function incorrectOne() {
    
    razzies++;
    $("#box-razzies").append("<img src='assets/images/razzie-trophie.png' />");
    $("#box-question").css("display", "none");
    $("#box-answer").html('');
    $("#box-head").html("<h1>What was that?</h1>");
    var disappointed = disappointedIndex[Math.floor(Math.random() * (3-1) +1)];
    $("#box-screen").html("<img src=" + disappointed + " />");
    var button = $("<button>");
    button.addClass("next-question");
    button.text("Next Movie");
    $("#box-answer").append(button);
}


// next movie =========================================================================================================
$(document).on("click", ".next-question", function() {
    $("#box-head").html("");
    $("#box-screen").html("");
    if (question == 1) {
    question++;
    $("#box-head").html("<h1>Babe</h1>");
    $("#box-answer").html("");
    myVar = setInterval(questionStart, 2000)
    var video = $('<video />', {
        id: 'video',
        src: 'assets/videos/babe.mp4',
        type: 'video/mp4',
        controls: false,
        autoplay: true
    });
    video.appendTo($('#box-screen'));
    return;
    }
    if (question == 2) {
        question++;
        $("#box-head").html("<h1>The Godfather</h1>");
        $("#box-answer").html("");
        myVar = setInterval(questionStart, 2000)
        var video = $('<video />', {
            id: 'video',
            src: 'assets/videos/thegodfather.mp4',
            type: 'video/mp4',
            controls: false,
            autoplay: true
        });
        video.appendTo($('#box-screen'));
        return;
    }
    if (question == 3) {
        question++;
        $("#box-head").html("<h1>The Godfather</h1>");
        $("#box-answer").html("");
        myVar = setInterval(questionStart, 2000)
        var video = $('<video />', {
            id: 'video',
            src: 'assets/videos/jaws.mp4',
            type: 'video/mp4',
            controls: false,
            autoplay: true
        });
        video.appendTo($('#box-screen'));
        return;
    }
    
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
     timesUp();
     return;
  }

  $(".box-timer").html("<p>" + count + "</p>")
}
}

})