// let playerHand = document.getElementById("playerHand");
// let computerHand = document.getElementById("computerHand");

//  let matches = document.querySelector(".matches");
//   let scoreCard = document.querySelector(".scoreCard");
// let choose = document.querySelector(".choose");;
// let matchStatus = document.getElementById("matchStatus");
// let footer = document.querySelector(".footer");
// footer.style.display="none";

// let scoreP = 0;
// let scoreC = 0;
// let currentMatch=0;
// let totalMatch = 1;


// function play() {
// let totalMatchInput = document.getElementById("totalMatches");
// scoreP = 0;
// scoreC = 0;
// currentMatch=0;
// totalMatch = parseInt(totalMatchInput.value);

//   if(totalMatchInput.value>0){
//   matches.style.display="none";
//    scoreCard.style.display="block";
//     choose.style.display="block";
//   }

  
// }



// let paper = "assets/paper.png";
// let stone = "assets/stone.png";
// let scissor = "assets/scissor.png";

// let playerScore = document.getElementById("playerScore");
// let computerScore = document.getElementById("computerScore");




// const cardImg = [paper, stone, scissor];

// playerHand.innerHTML = `<span id="player">Player</span>
//     <img src=assets/stone.png>`;

// function selectLeftHand(card) {
//   let leftImg = document.querySelector(`.container .left img`);
//   leftImg.classList.add("shakingHand");

//   let playerImgName = card.src.split("/")[4].split(".")[0];

//   let rightImg = document.querySelector(`.container .right img`);
//   rightImg.classList.add("shakingRightHand");
//   let item = Math.floor(Math.random() * 3);
//   let computerImgName = cardImg[item].split("/").pop().split(".")[0];

//   setTimeout(() => {
//     computerHand.innerHTML = `<span id="player">Computer</span><img src=${cardImg[item]} alt=${computerImgName}>`;
//   }, 1000);

//   setTimeout(() => {
//     playerHand.innerHTML = `<span id="player">Player</span>
//     <img src=${card.src} alt=${card.src}>`;
//   }, 1000);

//   setTimeout(() => {
//     updateScore(playerImgName, computerImgName);
//   }, 1100);
// }


// function updateScore(playerHandValue, computerHandValue) {
//   currentMatch++;
//  if (playerHandValue === computerHandValue) {
//     // draw → no change
//   } else if (
//     (playerHandValue === "stone" && computerHandValue === "paper") ||
//     (playerHandValue === "scissor" && computerHandValue === "stone") ||
//     (playerHandValue === "paper" && computerHandValue === "scissor")
//   ) {
//     scoreC++;
//   } else {
//     scoreP++;
//   }

//   playerScore.innerText = scoreP;
//   computerScore.innerText = scoreC;

//   if (currentMatch==totalMatch) {
//     scoreCard.style.display="none";
//     choose.style.display="none";
//       // matches.style.display="block";
//      setTimeout(() => {
//       scoreCard.style.display = "none";
//       choose.style.display = "none";
//       declareWinner();
//     }, 800);
//   }
  
  
// }

// function declareWinner() {
//   if (scoreP > scoreC) {
//     matchStatus.innerText = `🎉 Player Wins! Final Score ${scoreP} - ${scoreC}`;
//      playerHand.classList.add("glow");
//   } else if (scoreC > scoreP) {
//     matchStatus.innerText = `🤖 Computer Wins! Final Score ${scoreC} - ${scoreP}`;
//      computerHand.classList.add("glow");
//   } else {
//     matchStatus.innerText = `🤝 It's a Draw! Final Score ${scoreP} - ${scoreC}`;
//   }
//   footer.style.display="block";
// }

// function reset() {
 
//   footer.style.display="none";
//   location.reload();
// }

let playerHand = document.getElementById("playerHand");
let computerHand = document.getElementById("computerHand");

let matches = document.querySelector(".matches");
let scoreCard = document.querySelector(".scoreCard");
let choose = document.querySelector(".choose");
let matchStatus = document.getElementById("matchStatus");
let footer = document.querySelector(".footer");
footer.style.display = "none";

let scoreP = 0;
let scoreC = 0;
let currentMatch = 0;
let totalMatch = 1;

function play() {
  let totalMatchInput = document.getElementById("totalMatches");
  scoreP = 0;
  scoreC = 0;
  currentMatch = 0;
  totalMatch = parseInt(totalMatchInput.value);

  if (!isNaN(totalMatch) && totalMatch > 0) {
    matches.style.display = "none";
    scoreCard.style.display = "block";
    choose.style.display = "block";
  } else {
    alert("Please enter a valid number of matches!");
  }
}

let paper = "assets/paper.png";
let stone = "assets/stone.png";
let scissor = "assets/scissor.png";

let playerScore = document.getElementById("playerScore");
let computerScore = document.getElementById("computerScore");

const cardImg = [paper, stone, scissor];

// Default Player Hand
playerHand.innerHTML = `<span id="player">Player</span>
<img src="${stone}" alt="stone">`;

function selectLeftHand(card) {
  let leftImg = document.querySelector(`.container .left img`);
  let rightImg = document.querySelector(`.container .right img`);

  leftImg.classList.add("shakingHand");
  rightImg.classList.add("shakingRightHand");

  let playerImgName = card.src.split("/").pop().split(".")[0];
  let item = Math.floor(Math.random() * 3);
  let computerImgName = cardImg[item].split("/").pop().split(".")[0];

  setTimeout(() => {
    computerHand.innerHTML = `<span id="player">Computer</span>
    <img src="${cardImg[item]}" alt="${computerImgName}">`;
    playerHand.innerHTML = `<span id="player">Player</span>
    <img src="${card.src}" alt="${playerImgName}">`;
  }, 1000);

  setTimeout(() => {
    updateScore(playerImgName, computerImgName);
  }, 1100);
}

function updateScore(playerHandValue, computerHandValue) {
  currentMatch++;

  if (playerHandValue !== computerHandValue) {
    if (
      (playerHandValue === "stone" && computerHandValue === "paper") ||
      (playerHandValue === "scissor" && computerHandValue === "stone") ||
      (playerHandValue === "paper" && computerHandValue === "scissor")
    ) {
      scoreC++;
    } else {
      scoreP++;
    }
  }

  playerScore.innerText = scoreP;
  computerScore.innerText = scoreC;

  if (currentMatch === totalMatch) {
    setTimeout(() => {
      scoreCard.style.display = "none";
      choose.style.display = "none";
      declareWinner();
    }, 800);
  }
}

function declareWinner() {
  playerHand.classList.remove("glow");
  computerHand.classList.remove("glow");

  if (scoreP > scoreC) {
    matchStatus.innerText = `🎉 Player Wins! Final Score ${scoreP} - ${scoreC}`;
    playerHand.classList.add("glow");
  } else if (scoreC > scoreP) {
    matchStatus.innerText = `🤖 Computer Wins! Final Score ${scoreC} - ${scoreP}`;
    computerHand.classList.add("glow");
  } else {
    matchStatus.innerText = `🤝 It's a Draw! Final Score ${scoreP} - ${scoreC}`;
  }

  footer.style.display = "block";
}

function reset() {
  footer.style.display = "none";
  location.reload();
}
