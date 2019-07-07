var Letter = require('./letter.js');

function Word(word) {
    this.word = word;
    
    this.getBlanks = function() {
        var ansWordArr = [];
        for (var i = 0; i < word.length; i++) {
            var currentLetter = new Letter(word[i]);
            ansWordArr.push(currentLetter);
        }
        return ansWordArr; 
    }
    this.letter = this.getBlanks(word);
    this.randomWord = word;

    this.strRep = function() {
        Letter.correctG();

    }
    this.checkWord = function(letter) {
        Letter.checkG();
    }
};

module.exports = Word;