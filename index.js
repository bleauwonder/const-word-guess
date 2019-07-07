var Word = require('./word.js');

function randomWord(gameWords) {
    var randomIndex;
    randomIndex = Math.floor(Math.random() * gameWords.length);
    return gameWords[randomIndex];
}
// Is it the correct guess?
var isCorrectGuess = function(word, letter) {
    for (var i = 0; i <= word.length; i++) {
    if (word[i] === letter) {
        return true;
     } 
    }
    return false;
}