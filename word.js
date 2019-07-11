var Letter = require('./letter.js');

function Word(word) {


    /**
     * 
     * the actual word: [string]
     * the puzzle state: [array]
     * strRep = puzzle state: [string]
     */
    
    this.getBlanks = function(word) {
        var ansWordArr = [];
        for (var i = 0; i < word.length; i++) {
            var currentLetter = new Letter(word[i]);
            ansWordArr.push(currentLetter);
        }
        console.log('here'+ansWordArr)
        return ansWordArr; 
    }

    this.word = this.getBlanks(word);

    this.strRep = function() {
        var correctLetter = new Letter()
        Letter.correctG();
        // var curWord = " ";
        // for (var i = 0; i < this.word.length; i++) {
        //     var curLetter = this.word[i];
        //     curWord += curLetter.strRep() + " ";
        // }
        // console.log(curWord);
    };

    this.checkWord = function(letter) {
        // Letter.checkG();
        for (var i = 0; i < this.word.length; i++) {
            var curLetter = this.word[i];
            // console.log(curLetter);
            curLetter.checkG(letter);
        }
        return this.strRep;
    };
};

module.exports = Word;

