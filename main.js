const cardsArray = [
  "&#128525;",
  "&#128525;",
  "&#128561;",
  "&#128561;",
  "&#128564;",
  "&#128564;",
  "&#128520;",
  "&#128520;",
  "&#128545;",
  "&#128545;",
  "&#129313;",
  "&#129313;",
];

// const newArray = [];

// const cards = []
let selectedCards = [];

const counter = 0;
let cards = document.querySelectorAll(".inner");
let flipBack = document.querySelectorAll(".back");
let front = document.querySelectorAll(".front");
let cardOne, cardTwo;
let disableDeck = false;
let cardClicked = false;
// const inner = document.querySelectorAll('inner')

function pushEmoji() {
  for (let i = 0; i < cardsArray.length; i++) {
    flipBack[i].innerHTML = cardsArray[i];
  }
}

function flipCard() {
  function notMatch() {
    cardOne.classList.remove("flipped");
    cardTwo.classList.remove("flipped");
  }
  for (let card of cards) {
    card.addEventListener("click", function () {
      card.classList.add("flipped");
      selectedCards.push(card);
      // stop the code here
      if (selectedCards.length === 2) {
        // do all checks
        cardOne = selectedCards[0];
        cardTwo = selectedCards[1];
        if (cardOne.textContent === cardTwo.textContent) {
          // or .innerHTML
          cardOne.lastElementChild.classList.add("foundCard");
          cardTwo.lastElementChild.classList.add("foundCard");
        } else {
          setTimeout(notMatch, 500);
        }
        selectedCards = [];
      }
    });
  }
}
pushEmoji();
flipCard();

// cards.onclick = function () {
//     this.classList.toggle('plipped');
//     this.in

// }
