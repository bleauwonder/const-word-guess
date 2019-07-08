var inquirer = require('inquirer');
var Word = require('./word.js');
var currentWord;
var alphabet = /[a-zA-Z]/;
var remainingGuesses = 10;
var gLtr = [];

var gameWords = ["bugle", "compass", "campfire", "creek walking", "buddy system", "horseback riding", "insect repellent", "swimming test", "ultimate frisbee", "archery", "arts and crafts", "canteen", "infirmary"];

var randomWord = function (gameWords) {
    var randomIndex;
    randomIndex = Math.floor(Math.random() * gameWords.length);
    console.log(gameWords[randomIndex]);
    return gameWords[randomIndex];
}

// Is it the correct guess?
// var isCorrectGuess = function(word, letter) {
//     var word = Word.word;
//     var letter = Letter.letter;
//     for (var i = 0; i <= word.length; i++) {
//     if (word[i].hasBeen && word[i] === letter) {
//         return true;
//      } 
//     }
//     return false;
// }

randomWord(gameWords);

// isCorrectGuess(randomWord, letter);

inquirer
    .prompt([
        {
            type: 'input',
            name: 'guess',
            message: 'Guess a letter!'
        }
    ]).then(function(user) {
        Letter.checkG(user.hasBeen);
        Word.strRep();
        if(Word.checkG(user.hasBeen)){
                console.log("Correct!!");
        }
        else{
            remainingGuesses--;
            console.log("Incorrect! You have " + remainingGuesses + " guesses left!");
        }
        gLtr.push(user.strRep.trim().toLowerCase());

    });