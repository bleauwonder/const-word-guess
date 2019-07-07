
function Letter(letter) {
    this.underscore = "_",
    this.letter = letter,
    this.hasBeen = false,
    this.toString = function() {
        if(this.letter === " ") {
            this.hasBeen = true;
            return " ";
        }
        else {
            if (this.hasBeen === false) {
            return this.underscore;
            }
            else {
                return this.letter;
            }
        }
    };
    this.checkG = function(checkG) {
        if(checkG === this.letter) {
            this.hasBeen = true;
        }
        else {
            this.hasBeen = false;
        }
    }
};

module.exports = Letter;