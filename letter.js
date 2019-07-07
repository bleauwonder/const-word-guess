

function Letter(underscore, unChar, guess, hasBeen) {
    this.underscore = "_",
    this.unChar = unChar,
    this.guess = guess,
    this.hasBeen = false,
    this.correctG = function() {
        if(this.guess === this.unChar) {
            this.hasBeen === true;

        }
        else {
            return this.underscore;
        }
    }
    this.checkG = function(guess) {
        if(this.guess === this.unChar) {
            this.hasBeen === true;
        }
        else {
            this.hasBeen === false;
        }
    }
};

module.exports = Letter;