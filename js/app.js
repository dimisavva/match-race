// const cardArray = [
//   { name: 'Ru-Card'
//     img: 'images/Ru.jpg'
//   },
//   { name: 'Ru-Card'
//   img: 'images/Ru.jpg'
// },

// ]

const cards = document.querySelectorAll(".card");

let card1, card2;

function flipCard(e) { 
  let clickedCard = e.target; //collecting user's clicked card
  if(clickedCard !== card1){
    clickedCard.classList.add("flip");
    if(!card1){
      //return the cardOne value to clickCard
      return card1 = clickedCard
    }
      card2 = clickedCard;
      console.log(card1, card2)
  }
}

cards.forEach(card => { //this adds click event to all cards
  card.addEventListener("click", flipCard);
});
