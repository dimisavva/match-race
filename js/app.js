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
      
      let cardOneImg = cardOne.querySelector('img'),
      cardTwoImg = cardTwo.querySelector('img');
      matchCards(cardOneImg, cardTwoImg);
  }
}

function matchCards(img1, img2){
  console.log(img1, img2);
}

cards.forEach(card => { //this adds click event to all cards
  card.addEventListener("click", flipCard);
});
