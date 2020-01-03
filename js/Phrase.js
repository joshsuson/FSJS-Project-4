/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase) {
        this.phrase = phrase.toLowerCase();
     }

     addPhraseToDisplay() {
        const phraseUL = document.querySelector('#phrase ul');
        const phraseLetters = this.phrase.split('');

        phraseLetters.forEach(letter => {
            let li = document.createElement('li');
            li.textContent = letter;
            if (li.textContent !== ' ') {
                li.classList.add('hide', 'letter', letter);
            } else {
                li.classList.add('hide', 'space');
            }
            phraseUL.appendChild(li);
         })

     }

     checkLetter(guess) {
        const activeLetters = document.getElementsByClassName('letter');
        let match = null;

        [...activeLetters].forEach(letter => {
            if (letter.textContent.toLowerCase() === guess.textContent.toLowerCase()) {
                match = guess; 
            }
        });
        return match;
     }

     showMatchedLetter(letter) {
    const matchedLetters = document.querySelectorAll(`.${letter.textContent}`);
    [...matchedLetters].forEach(match => {
        match.classList.add('show');
    });
 }
}