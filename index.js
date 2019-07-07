var inquirer = require('inquirer');
var Word = require('./word.js');

var gameWords = ["bugle", "compass", "campfire", "creek walking", "buddy system", "horseback riding", "insect repellent", "swimming test", "ultimate frisbee", "archery", "arts and crafts", "canteen", "infirmary"];

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

randomWord();
isCorrectGuess();