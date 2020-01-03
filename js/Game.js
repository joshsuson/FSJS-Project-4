/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor() {
         this.missed = 0; 
         this.phrases = [
            "Not all who wander are lost",
            "It is about the journey not the destination",
            "For the joy of the Lord is my refuge",
            "Jesus plus nothing equals everything",
            "Therego I but for the grace of God"
         ];
         this.activePhrase = null;
     }

     startGame() {
         const overlay = document.querySelector('#overlay');
         overlay.style.display = 'none';
         this.activePhrase = this.getRandomPhrase();
         this.activePhrase.addPhraseToDisplay();
     }

     getRandomPhrase() {
         const randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
         return new Phrase(randomPhrase);
     }

     handleInteraction(button) {
        button.disabled = true;
        if (this.activePhrase.checkLetter(button) !== null) {
            this.activePhrase.showMatchedLetter(button);
            button.classList.add('chosen');
            if (this.checkForWin()) {
                this.gameOver();
            }
        } else {
            button.classList.add('wrong');
            this.removeLife();
        }
     }

     removeLife() {
         this.missed += 1;
         if (this.missed === 5) {
             this.gameOver();
         } else if (this.missed < 5) {
             let hearts = document.getElementsByTagName('img');
             hearts[5 - this.missed].src = 'images/lostHeart.png';
         }
     }

     checkForWin() {
         const show = document.querySelectorAll('.show');
         const letter = document.querySelectorAll('.letter');
         if (show.length === letter.length) {
             return true;
         } else {
             return false;
         }
     }

     gameOver() {
         const overlay = document.querySelector('#overlay');
         const h1 = overlay.querySelector('h1');
         const button = overlay.querySelector('button');
         if (this.checkForWin()) {
             overlay.classList.remove('start');
             overlay.classList.add('win');
             overlay.style.display = 'flex';
             h1.textContent = 'Congratulations! You Win!';
             button.textContent = "Want to play again?"
         } else if (this.missed === 5) {
             overlay.classList.remove('start');
             overlay.classList.add('lose');
             overlay.style.display = 'flex';
             h1.textContent = "Oh no, you didn't guess right.";
             button.textContent = 'Try another phrase?';
         }
     }
 }