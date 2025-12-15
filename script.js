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
    elResultZone.style.display = "flex";
  } else {
    elGameZone.style.display = "block";
    elResultZone.style.display = "none";
  }
}

function checkWiner(user, robot) {
  if (user === robot) {
    return "TIE";
  } else if (user === "paper" && robot === "scissors") {
    return "ROBOT";
  } else if (user === "scissors" && robot === "rock") {
    return "ROBOT";
  } else if (user === "rock" && robot === "paper") {
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
