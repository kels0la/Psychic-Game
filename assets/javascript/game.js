var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//creates a list for all of the computer's choices
var wins = 0;
var losses = 0;
var guessesleft = 9;
var guesses = [];
// creates variables for wins and losses, beginning at 0.

document.onkeypress = function(evt) {
    
    var userGuess = String.fromCharCode(evt.which).toLowerCase();
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    guesses.push(" " + userGuess); // adds to the guesses array, which is displayed. Quotes for the space. The commas are auto-added

        if (userGuess == computerGuess) {
            wins++;
            alert("You are quite the psychic. Well done!");
            guessesleft = 9;
            guesses = [];
            
        }
        else if (guessesleft == 0) {
            losses++;
            alert("You need more practice. Try again!");
            guessesleft = 9;
            guesses = [];
        }
        else if (userGuess !== computerGuess) { //Thinking I may have to modify the for variables to include an i
            guessesleft--;
        } 
      
        var html =
        "<h1><u>The <i>Psychic</i> Game</u></h1>" +
        "<p><b>Guess what letter I'm thinking of...</b></p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses left: " + guessesleft + "</p>" +
        "<p>Guesses so far: " + guesses + "</p>";

        document.querySelector('#game').innerHTML = html;
}




