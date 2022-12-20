// const cardArray = [
//   { name: 'Ru-Card'
//     img: 'images/Ru.jpg'
//   },
//   { name: 'Ru-Card'
//   img: 'images/Ru.jpg'
// },

// ]

const cards = document.querySelectorAll(".cards");

function flipCard(e)
console.log(e.target);

cards.forEach(card => { //this adds click event to all cards
  card.addEventListener("click", flipCard);

})