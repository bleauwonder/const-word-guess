var Letter = require('./letter.js');

var gameWords = ["bugle", "compass", "campfire", "creek walking", "buddy system", "horseback riding", "insect repellent", "swimming test", "ultimate frisbee", "archery", "arts and crafts", "canteen", "infirmary", ];

function Word() {
    this.getBlanks = function(word) {
        var ansWordArr = [];
        for (var i = 0; i < word.length; i++) {
            ansWordArr[i] = "_";
        }
        return ansWordArr; 
}
    this.newLetter = new Letter(ansWordArr[i]),
    this.strRep = function() {
        Letter.correctG();

    }
    this.checkWord = function(guess) {
        Letter.checkG();
    }
};