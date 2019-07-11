var inquirer = require('inquirer');
var Word = require('./word.js');
var currentWord;
var alphabet = /[a-zA-Z]/;
var remainingGuesses = 10;
var gLtr = [];

var gameWords = ["bugle", "compass", "campfire", "creek walking", "buddy system", "horseback riding", "insect repellent", "swimming test", "ultimate frisbee", "archery", "arts and crafts", "canteen", "infirmary"];

var randomWordPicker = function (gameWords) {
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

var randomWord = randomWordPicker(gameWords);
var word = new Word(randomWord)
word.word

// console.log(Word.checkWord);
// isCorrectGuess(randomWord, letter);

/**
 * 
 * generate random word
 * pass random word into word constructor
 * 
 * randomword.checkword(letter)
 */

inquirer
    .prompt([
        {
            type: 'input',
            name: 'guess',
            message: 'Guess a letter!'
        }
    ]).then(function(user) {
        console.log(user)
        word.checkWord(user.guess)


        // var word = new Word()
    
        word.strRep();
        if(Word.checkG(user.hasBeen)){
                console.log("Correct!!");
        }
        else{
            remainingGuesses--;
            console.log("Incorrect! You have " + remainingGuesses + " guesses left!");
        }
        gLtr.push(user.strRep.trim().toLowerCase());

    });