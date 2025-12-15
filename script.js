import {
  elHands,
  elUser,
  elRobot,
  elBtn,
  elGameZone,
  elResultZone,
} from "./elements.mjs";

function robotChoose() {
  const hand = ["rock", "paper", "scissors"];
  const randomIndex = Math.trunc(Math.random() * hand.length);
  return hand[randomIndex];
}

function swape(boolean) {
  if (boolean) {
    elGameZone.style.display = "none";
    elResultZone.style.display = "block";
  } else {
    elGameZone.style.display = "block";
    elResultZone.style.display = "none";
  }
}

let score = 0;
function checkWiner(user, robot) {
  if (user === robot) {
    return "TIE";
  } else if (user === "paper" && robot === "scissors") {
    score = score;
    return "ROBOT";
  } else if (user === "scissors" && robot === "rock") {
    score = score;
    return "ROBOT";
  } else if (user === "rock" && robot === "paper") {
    score = score;
    return "ROBOT";
  } else {
    score = score;
    return "USER";
  }
}

elHands.forEach((elHands) => {
  elHands.addEventListener("click", (evt) => {
    swape(true);
    const user = evt.target.alt;
    const robot = robotChoose();
    elUser.src = evt.target.src;
    elRobot.src = "./img/hand-load.svg";
    setTimeout(() => {
      elRobot.src = `./img/${robot}.svg`;
      const winner = checkWiner(user, robot);
      alert(winner);
    }, 1000);
  });
});

elBtn.addEventListener("click", () => {
  swape(false);
});
checkWiner(user, robot);
