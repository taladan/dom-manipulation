// your JavaScript file
//  This file contains the results of the exercises listed at
// https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events
//

const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content";

container.appendChild(content);

// Assignment:
//
// Add the following elements to the container using ONLY JavaScript and the DOM
// methods shown above.
// a <p> with red text that says “Hey I’m red!”
// an <h3> with blue text that says “I’m a blue h3!”
// a <div> with a black border and pink background color with the following elements inside of it:
//     another <h1> that says “I’m in a div”
//     a <p> that says “ME TOO!”
//     Hint for this one: after creating the <div> with createElement,
//     append the <h1> and <p> to it before adding it to the container.

// red <p> element
const para = document.createElement("p");
para.style.cssText = "color: red";
para.textContent = "Hey I'm red!";
container.appendChild(para);

// blue h3 element

const blueH3 = document.createElement("h3");
blueH3.style.cssText = "color: blue";
blueH3.textContent = "I'm a blue h3!";
container.appendChild(blueH3);

// black border pink bg div
const blackPinkDiv = document.createElement("div");
blackPinkDiv.style.cssText = "border: solid 8px black; background-color: pink;";
container.appendChild(blackPinkDiv);

//h1 in pink
const pinkBgH1 = document.createElement("h1");
pinkBgH1.textContent = "I'm in a div!";
blackPinkDiv.appendChild(pinkBgH1);

// p in pink
const pinkP = document.createElement("p");
pinkP.textContent = "Me Too!";
blackPinkDiv.appendChild(pinkP);

// DOM element property manipulation (Method 2)
const btn = document.querySelector("#btn");
btn.onclick = alertFunction;

// Method 3
// This is the preferred method - it maintains separation of concerns
// and allows multiple Event Listeners if the need arises.
const btn2 = document.querySelector("#jsbtn");
btn2.addEventListener("click", alertFunction);
btn2.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});

function alertFunction() {
  alert("YAY!  YOU DID IT!");
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert(button.id);
  });
});

// blockquote example from https://eloquentjavascript.net/14_dom.html
//

function elt(type, ...children) {
  let node = document.createElement(type);
  for (let child of children) {
    if (typeof child != "string") node.appendChild(child);
    else node.appendChild(document.createTextNode(child));
  }
  return node;
}

document
  .getElementById("quote")
  .appendChild(
    elt(
      "footer",
      "-",
      elt("strong", "Karl Popper"),
      ", preface to the second edition of ",
      elt("em", "The Open Society and Its Enemies"),
      ", 1950"
    )
  );

let paras = document.body.getElementsByTagName("p");
for (let para of Array.from(paras)) {
  if (para.getAttribute("data-classified") == "secret") {
    para.remove();
  }
}

let pBoxed = document.body.getElementsByTagName("p")[0];
// console.log("clientHeight:", pBoxed.clientHeight);
// console.log("offsetHeight:", pBoxed.offsetHeight);

// A program that repeatedly alternates between reading DOM layout
// information and changing the DOM forces a lot of layout computations to
// happen and will consequently run very slowly. The following code is an
// example of this. It contains two different programs that build up a line
// of X characters 2,000 pixels wide and measures the time each one takes.

function time(name, action) {
  let start = Date.now(); //Current time in milliseconds
  action();
  // console.log(name, "took", Date.now() - start, "ms");
}

time("naive", () => {
  let target = document.getElementById("one");
  while (target.offsetWidth < 2000) {
    target.appendChild(document.createTextNode("X"));
  }
});

time("clever", function () {
  let target = document.getElementById("two");
  target.appendChild(document.createTextNode("XXXXX"));
  let total = Math.ceil(2000 / (target.offsetWidth / 5));
  target.firstChild.nodeValue = "X".repeat(total);
});

// manipulate an element's style
let manipulator = document.getElementById("manipulating");
// console.log(manipulator.style.color);
manipulator.style.color = "magenta";
manipulator.style.backgroundColor = "linen";

// rabbits

function count(selector) {
  return document.querySelectorAll(selector).length;
}

let checks = [
  ["All <p> Elements>", "p"],
  ["All Class .animal", ".animal"],
  ["Direct child of <p>", "p > .animal"],
];
for (const check of checks) {
  console.log(check);
  let currentCount = count(`${check[1]}`);
  check.push(currentCount);
}

console.table(checks);

let cat = document.querySelector("img");
let angle = Math.PI / 2;
function animate(time, lastTime) {
  if (lastTime != null) {
    angle += (time - lastTime) * 0.001;
  }
  cat.style.top = Math.sin(angle) * 20 + "px";
  cat.style.left = Math.cos(angle) * 200 + "px";
  requestAnimationFrame((newTime) => animate(newTime, time));
}
requestAnimationFrame(animate);
