const Letter = require("./Letter");

class Word{
    constructor(word) {
        this.letters = [];
        for(const letter of word) {
            this.letters.push(new Letter(letter));
        }
    }

    guessLetter(charGuess) {
        let found = false;
        for(const letter of this.letters) {
            if(letter.guess(charGuess)) {
                found = true;
            }
        }
        return found;
    }

    guessedCorrectly() {
        for(const letter of this.letters) {
            if (!letter.visible) {
                return false;
            }
        }
        return true;
    }

    toString() {
        let string = '';
        for(const letter of this.letters) {
            string += letter.toString();
        }
        return string;
    }

    getSolution() {
        let string = '';
        for(const letter of this.letters) {
            string += letter.getSolution();
        }
        return string;
    }
}

module.exports = Word;
