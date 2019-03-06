// VARIABLES
var targetScore;
var yourScore = 0;
var crystalValArray = [];
var totalCrystals = 4;
var wins = 0;
var losses = 0;
var value;
var imageCrystal;



// FUNCTIONS
// Target score
function setGame() {
    targetScore = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    $("#target-score-text").text("Target Score: " + targetScore);


// Crystal Values
// Determine the random values of 4 crystals
    for (i = 0; i < totalCrystals; i++) {
        value = [Math.floor(Math.random() * ((12 - 1) + 1) + 1)];
        crystalValArray.push(value);
    }

    // creates img and sets value of the crystals previously defined
    for (var i = 0; i < crystalValArray.length; i++) {
        imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", "./assets/images/crystal" + [i + 1] + ".jpg");
        imageCrystal.attr("data-crystalvalue", crystalValArray[i]);
        $("#crystals").append(imageCrystal);
    }
}
// Check score function
function checkScore() {
    if (yourScore === targetScore) {
        win();
    }
    else if (yourScore > targetScore) {
        lose();
    }
}

// Win fuction
function win() {
    wins++;
    $("#wins-text").text("Wins: " + wins);
    yourScore = 0;
    alert("You Win!!");
    reset();
}
// Lose function
function lose() {
    losses++;
    $("#loss-text").text("Losses: " + losses);
    yourScore = 0;
    alert("You lose");
    reset();
}

// Reset Function
function reset() {
    yourScore = 0;
    crystalValArray = [];
    setGame();

}




// GAME LOGIC
$(".crystal-image").on("click", function () {
        var crystalValues = ($(this).attr("data-crystalvalue"));
        yourScore += parseInt(crystalValues);
        $("#your-score-text").text("Your score: " + yourScore);
        checkScore();
        console.log(this);
})



// Display to screen
setGame();
console.log(yourScore);
console.log(crystalValArray)
console.log(targetScore)
