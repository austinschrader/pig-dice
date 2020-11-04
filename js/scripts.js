// Business Logic rollDice
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// BL for playerScore: adds round scores to object to track per-round values
function PlayerScoreCard() {
  this.turnScoreCard = [];
  this.totalScore = []
}

PlayerScoreCard.prototype.addRoundScore = function(score) {
  this.turnScoreCard.push(score);
}

PlayerScoreCard.prototype.finalizeTurn = function(array) {
  let roundTotal = 0;
  if (array.includes(1)) {
    return roundTotal
  } else {
    for (let i = 0; i <= array.length - 1; i++) {
      roundTotal += array[i]; 
    }
    return roundTotal;
  };
}

// BL for checkWon
function checkWon(score) {
  if(score >= 100) {  
    return true
  } else {
    return false
  }
}


// User Interface Logic
let player1Score = new PlayerScoreCard();
let player2Score = new PlayerScoreCard();
console.log(player1Score)

function displayScore(randValue) {
  return $(".userResults").text(randValue);
}

$(document).ready(function () {
  $('#formOne').submit(function(event) {
    event.preventDefault();
    let randValue = rollDice()
    displayScore(randValue);
    player1Score.addRoundScore(randValue);
    console.log(player1Score)
  })

  $('.stopPlay').click(function () {
    console.log("Hold");
    console.log(player1Score.finalizeTurn(player1Score.turnScoreCard));
    
    // when pressed, calculate everything in that temporaryScoreArray=[]
    // also, determine if they've won - run checkWon()
    let score = 99;
    checkWon(score);
  })
});