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

function flipCard(e) { 
  let clickedCard = e.target; //collecting user's clicked card
  if(clickedCard !== cardOne){
    clickedCard.classList.add("flip");
    if(!cardOne){
      //return the cardOne value to clickCard
      return cardOne = clickedCard
    }
      cardTwo = clickedCard;
      
      let cardOneImg = cardOne.querySelector('img').src,
      cardTwoImg = cardTwo.querySelector('img').src;
      matchCards(cardOneImg, cardTwoImg);
  }
}

function matchCards(img1, img2){
  if(img1 === img2){ //if two cards img match
return console.log('Card Matched');
  }
  //if two cards do not match
  setTimeout(() => {
    //adds jiggle class to both unmatched cards after 400ms
    cardOne.classList.add("jiggle");
    cardTwo.classList.add("jiggle");
  }, 400);

  setTimeout(() => {
    //remove both jiggle and flip classes from both cards after 1.1 seconds
    cardOne.classList.remove("jiggle", "flip");
    cardTwo.classList.remove("jiggle", "flip");
  }, 1100);
}

cards.forEach(card => { //this adds click event to all cards
  card.addEventListener("click", flipCard);
});
