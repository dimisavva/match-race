// const cardArray = [
//   { name: 'Ru-Card'
//     img: 'images/Ru.jpg'
//   },
//   { name: 'Ru-Card'
//   img: 'images/Ru.jpg'
// },

// ]

const cards = document.querySelectorAll(".card");

let cardOne, cardTwo;
let disableDeck = false;

function flipCard(e) { 
  let clickedCard = e.target; //collecting user's clicked card
  if(clickedCard !== cardOne && !disableDeck){
    clickedCard.classList.add("flip");
    if(!cardOne){
      //return the cardOne value to clickCard
      return cardOne = clickedCard
    }
      cardTwo = clickedCard;
      disableDeck = true;
      let cardOneImg = cardOne.querySelector('img').src,
      cardTwoImg = cardTwo.querySelector('img').src;
      matchCards(cardOneImg, cardTwoImg);
  }
}

function matchCards(img1, img2){
  if(img1 === img2){ //if two cards img match
    //if two cards are matched, then remove the click event listener from these cards so user cannot click these cards again
    cardOne.removeEventListener("click", flipCard);
    cardTwo.removeEventListener("click", flipCard);
    cardOne = cardTwo = "";
    return disableDeck = false;
  }
  //if two cards don't match 
  setTimeout(() => {
    //adds jiggle class to both unmatched cards after 400ms
    cardOne.classList.add("jiggle");
    cardTwo.classList.add("jiggle");
  }, 400);

  setTimeout(() => {
    //remove both jiggle and flip classes from both cards after 1.1 seconds
    cardOne.classList.remove("jiggle", "flip");
    cardTwo.classList.remove("jiggle", "flip");
    //sets both card values to ""
    cardOne = cardTwo = "";
    disableDeck = false;
  }, 1100);
}

cards.forEach(card => { //this adds click event to all cards
  card.addEventListener("click", flipCard);
});
