
const buttonArray = ["red", "blue", "green", "yellow"];

let gamePattern = [];

let userClickedpattern = [];
function nextSequence() {

    userClickedpattern = [];
    level++;

    $("#level-title").text("Level " + level);
    const randomNumber = Math.floor(Math.random() * 4);
    
    const randomChoosencolour = buttonArray[randomNumber];
    gamePattern.push(randomChoosencolour);

    $("#" + randomChoosencolour).fadeOut(100).fadeIn(100);

    playSound(randomChoosencolour);

}

function playSound(name) {
    switch (name) {
        case "red":
            const red = new Audio("sounds/red.mp3");
            red.play();
            break;

        case "blue":
            const blue = new Audio("sounds/blue.mp3");
            blue.play();
            break;
        case "green":
            const green = new Audio("sounds/green.mp3");
            green.play();
            break;
        case "yellow":
            const yellow = new Audio("sounds/yellow.mp3");
            yellow.play();
            break;
        default:
            break;
    }
}

function animatePress(currentColour){

    $("#"+ currentColour).addClass("pressed");

    setTimeout( function() {
        $("#"+ currentColour).removeClass("pressed");
    }, 100);
}

$(".btn").on("click", function() {
    const userChosenColour = this.id;
    userClickedpattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedpattern.length - 1);
});


// Starting game 

$(document).keypress(function() {
    if(!started){
        $("#level-title").text("Level "+ level);
        nextSequence();
        started = true;
    }

});

let level = 0;

let started = false;


function checkAnswer(currentLevel) {

    if(gamePattern[currentLevel] === userClickedpattern[currentLevel]){

        console.log("success");

        if(userClickedpattern.length === gamePattern.length){

            setTimeout(function() {
                nextSequence();

            }, 1000);
        }
    } else {
        const audio = new Audio("sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        setTimeout( function() {
            $("body").removeClass("game-over");

        }, 200);

        startOver();
       

    }
}

function startOver(){
        level = 0;
        gamePattern = [];
        started = false;
}