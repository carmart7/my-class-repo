class Letter {
    constructor(letter) {
        this.char = letter;
        if(isNaN(letter) && (letter.toUpperCase() == letter.toLowerCase())) {
            this.visible = true;
        } else if (letter == ' ') {
            this.visible = true;
        } else {
            this.visible = false;
        }
    }

    toString() {
        if(this.visible) {
            return this.char;
        } else {
            return '_';
        }
    }

    guess(guessLetter) {
        if(guessLetter.toLowerCase() == this.char.toLowerCase()) {
            this.visible = true;
            return true;
        } else {
            return false;
        }
    }

    getSolution() {
        return this.char;
    }
}

module.exports = Letter;
