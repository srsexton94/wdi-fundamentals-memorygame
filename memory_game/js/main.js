let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];

/* let cardOne = cards[0];
cardsInPlay.push(cardOne);

console.log("User flipped " + cardOne);

let cardTwo = cards[2];
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardTwo); */

function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("you found a match!");
  } else {
    console.log("Sorry, try again.");
  }
  // cardsInPlay = [];
}

function flipCard(cardId) {
  let card = cards[cardId];
  console.log("User flipped " + card)
  cardsInPlay.push(card);
  if (cardsInPlay.length === 2) {
    checkForMatch();
  } /* else {
    console.log("Keep playing!");
  } */
}

flipCard(0);
flipCard(3);
