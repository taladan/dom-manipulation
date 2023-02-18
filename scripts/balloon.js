let balloon = document.querySelector("#balloon");
let maxSize = getRndInt(100, 275);
let currentSize = window
  .getComputedStyle(balloon, null)
  .getPropertyValue("font-size");

window.addEventListener("keydown", calculateBalloonSize);

function getRndInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function popWarning(currentSize, maxSize) {
  // 25% of max
  let quarterSize = maxSize * 0.25;
  // 50% of max
  let halfSize = maxSize * 0.5;
  // 75% of max
  let threeQuarterSize = maxSize * 0.75;

  if (currentSize > quarterSize && currentSize < halfSize) {
    //change the background color
  } else if (
    currentSize > quarterSize &&
    currentSize > halfsize &&
    currentSize < threeQuarterSize
  ) {
    //change the background color again and add a warning
    //
  } else if (currentSize > threeQuarterSize && currentSize < maxSize) {
    //change the background color a third time and add a more
    // serious warning
    //
  } else if (currentSize > maxSize) {
    // change the emoji, change the background color and
    // change the text of the warning to a fail message
    //
  }
}

function calculateBalloonSize(event) {
  if (event.key == "ArrowUp") {
    currentSize = Math.round(parseFloat(currentSize) * 1.1);
  } else if (event.key == "ArrowDown") {
    currentSize = Math.round(parseFloat(currentSize) * 0.9);
  }
  balloon.style.fontSize = `${currentSize}px`;

  if (currentSize > maxSize) {
    console.log(maxSize);
    balloon.textContent = "💥";
    window.removeEventListener("keydown", calculateBalloonSize);
  }
}
const queryNode = document.querySelector("#ask");
queryNode.textContent = "Would you like to play a game?";
