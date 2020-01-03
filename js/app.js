/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 const game = new Game();
//  document.querySelector('#btn__reset').addEventListener('click', () => {
//     game.startGame();
//  })

 const  qwerty = document.querySelector('#qwerty');
 qwerty.addEventListener('click', (e) => {
     if (e.target.classList == 'key') {
        game.handleInteraction(e.target);
     }
 });

 document.querySelector('#overlay').addEventListener('click', (e) => {
     if (e.target.id === 'finished') {
         game.resetGame();
     } else if (e.target.id === 'btn__reset') {
         game.startGame();
     }
 })