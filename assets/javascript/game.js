// VARIABLES
var targetScore;
var yourScore = 0;
var crystalValue = [];
var wins = 0;
var losses = 0;



// FUNCTIONS
// Target score
function targetScore() {
    targetScore = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
}
// Crystal Values
// Determine the random values of 4 crystals
for (i = 0; i < 4; i++) {
    var value = [Math.floor(Math.random() * ((12 - 1) + 1) + 1)]
    crystalValue.push(value);
}

// creates img and sets value of the crystals previously defined
for (var i = 0; i < crystalValue.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "./assets/images/crystal1.jpg");
    imageCrystal.attr("data-crystalvalue", crystalValue[i]);
    $("#crystals").append(imageCrystal);
}



// GAME LOGIC
$(".crystal-image").on("click", function () {

    if (yourScore === targetScore) {
        alert("You win!!")
        wins++;
        $("#wins-text").text("Wins: " + wins)
    }

    else if (yourScore > targetScore) {
        alert("You lose")
        losses++;
        $("#loss-text").text("Losses: " + losses);
    }
    else {
        var crystalValue = ($(this).attr("data-crystalvalue"));

        yourScore += parseInt(crystalValue);
        $("#your-score-text").text("Your score: " + yourScore);
    }

})

// Display to screen
targetScore();
$("#target-score-text").text("Target Score: " + targetScore);