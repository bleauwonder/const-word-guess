
function Letter(letter) {
    this.underscore = "_",
    this.letter = letter,
    this.hasBeen = false,
    this.toString = function() {
        if(this.letter === true) {
            this.hasBeen = true;
            return this.letter;
        }
        else {
            return this.underscore;
        }
    };

    this.checkG = function(checkG) {
        if(checkG === this.letter) {
            this.hasBeen = true;
        }
        else {
            return false;
        }
    }
};

module.exports = Letter;