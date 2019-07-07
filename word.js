var Letter = require('./letter.js');

function Word(word) {
    
    this.getBlanks = function() {
        var ansWordArr = [];
        for (var i = 0; i < word.length; i++) {
            var currentLetter = new Letter(word[i]);
            ansWordArr.push(currentLetter);
        }
        return ansWordArr; 
    }
    this.word = this.getBlanks(word);

    this.strRep = function() {
        // Letter.correctG();
        var curWord = " ";
        for (var i = 0; i < this.word.length; i++) {
            var curLetter = this.word[i];
            curWord += curLetter.strRep() + " ";
        }
        console.log(curWord);
    }
    this.checkWord = function(letter) {
        // Letter.checkG();
        for (var i = 0; i < this.word.length; i++) {
            var curLetter = this.word[i];
            console.log(curLetter);
            curLetter.checkG(letter);
        }
        return this.strRep;
    }
};

module.exports = Word;