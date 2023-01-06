const cards = document.querySelectorAll(".card");
resetBtn = document.querySelector(".details button");
timeTag = document.querySelector(".time b");
const messageEl = document.getElementById('message');

let maxTime = 40;
let timeLeft = maxTime;
let matchCard = 0;
let disableDeck = false;
let isPlaying = false;
let cardOne, cardTwo, timer, winner;


function initTimer() {
  if(timeLeft < 1) {
      clearInterval(timer);
      messageEl.textContent = "Sorry dear, Sashay Away"
    }
    else {timeLeft--;
    timeTag.innerText = timeLeft;
    }}
  
  function flipCard({target: clickedCard}) {
    if(!isPlaying) {
      isPlaying = true;
      timer = setInterval(initTimer, 1000);
    }
    if(clickedCard !== cardOne && !disableDeck && timeLeft > 0){
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
      matchCard++; //increment matched value by 1
      //if matched value is 8 = user has matched all cards
      if(matchCard == 8 && timeLeft > 0){
        messageEl.textContent = `You're a Winner, baby!`
        setTimeout(() => {
          return shuffleCard();
        }, 900); //invoke shuffleCard function after 900ms
      }
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

function shuffleCard(){
  timeLeft = maxTime;
  matchCard = 0;
  cardOne, cardTwo = "";
  clearInterval(timer);
  winner = false
  timeTag.innerText = timeLeft;
  disableDeck = isPlaying = false;
  //generate 16-item array where each item is repeated twice
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
  arr.sort(() => Math.random() > 0.5 ? 1 : -1); //sorting array items randomly
  
  //remove flip class from all cards and passing random image to each card (had to rename img files to just intigers in order for template literal line 67 to work)
  cards.forEach((card, index) => {
    card.classList.remove("flip");
    let imgTag = card.querySelector("img");
    setTimeout(() =>{
    imgTag.src = `images/img-${arr[index]}.jpeg`;
  }, 500);
    card.addEventListener("click", flipCard);
  });
}

shuffleCard();

function resetGame(){
  resetBtn.addEventListener("click",()=>{
    shuffleCard();
    messageEl.textContent = "RuPaul's Match Race"
  })
}
resetGame();

cards.forEach(card => { //this adds click event to all card
  card.addEventListener("click", flipCard);
});
