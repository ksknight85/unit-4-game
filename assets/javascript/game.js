// VARIABLES
var targetScore;
var yourScore = 0;
var crystalValArray = [];
var totalCrystals = 4;
var wins = 0;
var losses = 0;
var imageCrystal;



// FUNCTIONS
// Reset Function
function reset() {
    yourScore = 0;
    $("#crystals").empty(imageCrystal);
    crystalValArray = [];
    target();
    setup();
    $("#your-score-text").text("Your score: " + yourScore);


}
// Target score
function target() {
    targetScore = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    $("#target-score-text").text(targetScore);
}

// Crystal Values
// Determine the random values of 4 crystals
function setup() {
for (i = 0; i < totalCrystals; i++) {
    var value = [Math.floor(Math.random() * ((12 - 1) + 1) + 1)];
    crystalValArray.push(value);
}


// creates img and sets value of the crystals previously defined
for (var i = 0; i < crystalValArray.length; i++) {
    imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "./assets/images/crystal" + [i + 1] + ".png");
    imageCrystal.attr("id", "image" + [i + 1]);
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
    alert("Congratulations!! You are a math genius!");
    reset();
}
// Lose function
function lose() {
    losses++;
    $("#loss-text").text("Losses: " + losses);
    alert("I understand.  Addition is very difficult.");
    reset();
}

// GAME LOGIC
$("#crystals").on("click", ".crystal-image", function () {
    var crystalValues = ($(this).attr("data-crystalvalue"));
    yourScore += parseInt(crystalValues);
    $("#your-score-text").text("Your score: " + yourScore);
    checkScore();
})


reset();
console.log(yourScore);
console.log(crystalValArray)
console.log(targetScore)
