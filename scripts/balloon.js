// Populate containers
const queryNode = document.querySelector("#ask");
queryNode.textContent = "Would you like to play a game?";
const warnNode = document.querySelector("#warning");
const instructions = document.querySelector("#instruct");
instructions.textContent = "Use your Up and Down arrows to play...";
let balloon = document.querySelector("#balloon");
let maxSize = getRndInt(100, 275);
let currentSize = window
  .getComputedStyle(balloon, null)
  .getPropertyValue("font-size");

// listen for arrow keys
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
    document.body.style.backgroundColor = "darkseagreen";
    warnNode.textContent = "You're doing great!  Just don't *POP* the balloon!";
    warnNode.setAttribute("class", "green");
  } else if (
    currentSize > quarterSize &&
    currentSize > halfSize &&
    currentSize < threeQuarterSize
  ) {
    //change the background color again and add a warning
    //
    document.body.style.backgroundColor = "#FDFD96";
    warnNode.textContent =
      "Whoa!  That's a lot of air in the balloon...Be careful you don't *POP* it!";
    warnNode.setAttribute("class", "yellow");
  } else if (currentSize > threeQuarterSize && currentSize < maxSize) {
    //change the background color a third time and add a more
    // serious warning
    //
    document.body.style.backgroundColor = "#ff6961";
    warnNode.textContent = "WHOA!  That balloon is bound to *POP* any second!";
    warnNode.setAttribute("class", "red");
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
    document.body.style.backgroundColor = "#570a16";
    warnNode.textContent = "YOU *POPPED* IT!";
    warnNode.setAttribute("class", "end");
    queryNode.textContent = "Hit refresh to play again";
    queryNode.style.color = "yellow";
    instructions.textContent = "";
    gameName = document.querySelector("#gameName");
    gameName.style.color = "aqua";
  } else {
    popWarning(currentSize, maxSize);
  }
}
