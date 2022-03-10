//Create an array with all the card, twice
const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ]


//Trick to sort an array randomly
cardArray.sort(() => 0.5 - Math.random())

//Selecte Grid with its #id
const gridDisplay = document.querySelector('#grid')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

//Function to create the board
function createBoard () {
  //For loop i=0, as long as i<12, add +1 at each loop
  for (let i = 0; i < cardArray.length; i++){
    //Declaration of the variable Card
    const card = document.createElement('img')
    card.setAttribute('src', 'images/blank.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    gridDisplay.appendChild(card)
  }
}

createBoard()

function checkMatch (){
const cards = document.querySelectorAll('img')
const optionOneId = cardsChosenIds[0]
const optionTwoId = cardsChosenIds[1]
if (optionOneId == optionTwoId){
  alert('You clicked the same card !')
}

  console.log('check for a match')
  if (cardsChosen[0] == cardsChosen[1]){
    alert('You found a match')
    cards[optionOneId].setAttribute('src', 'images/white.png')
    cards[optionTwoId].setAttribute('src', 'images/white.png')
    cards[optionOneId].removeEventListener ('click', flipCard)
    cards[optionTwoId].removeEventListener ('click', flipCard)
    cardsWon.push(cardsChosen)
  }
  cardsChosen = []
  cardsChosenIds = []
}

function flipCard(){
  console.log(cardArray)
  //This lets us interact with whatever element we click
  const cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenIds.push(cardId)
  console.log(cardsChosen)
  console.log(cardsChosenIds)
  this.setAttribute('src', cardArray[cardId].img)
  if (cardsChosen.length === 2) {
  setTimeout( checkMatch, 500)
}
}

