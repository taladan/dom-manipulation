// Plan:
// 1. Get all tabs in the tab Panel
// 2. create button elements for each tab
// 3. insert button elements at the top of node
// 4. retrieve text from data-tabname
// 5. set text for each tab from its data-tabname
// 6. when child node (button) is selected, hide other child nodes' text

// good stuff to reference in function asTabs()
//
// child - returns whole div
// child.dataset.tabname - returns data-tabname
// child.textContent - returns text of div
// node.style.display = "flex";
// node.style.justifyContent = "flex-start";

function asTabs(node) {
  // get all the tabs
  const tabs = document.querySelectorAll("data-tabname");
  const body = document.querySelector("body");

  // const tabsArray = [];

  for (const child of node.children) {
    text = child.textContent;
    child.style.display = "none";
    const tab = document.createElement("button");

    // put button names in the respective buttons
    tab.textContent =
      child.dataset.tabname.charAt(0).toUpperCase() +
      child.dataset.tabname.slice(1);
    tab.classList.add("btn");
    tab.classList.add(`${child.dataset.tabname}`);
    tab.addEventListener("click", changeContent);
    body.insertBefore(tab, node);
  }
}

function changeContent(e) {
  const clickedClass = e.target.classList[1];
  btns = document.querySelectorAll("button");
  for (const currentBtn of btns) {
    btn = document.querySelector("." + `${clickedClass}`);
    div = document.querySelector("[data-tabname =" + `${clickedClass}`);
    btnsAsSet = new Set(btns);
    targetBtnSet = new Set([btn]);
    hiddenBtns = new Set(
      Array.from(btnsAsSet).filter((x) => !targetBtnSet.has(x))
    );

    console.log(hiddenBtns);
    if (btn.classList[1] == clickedClass) {
      div.style.display = "block";
    } else {
      for (const hiddenBtn of hiddenBtns) {
        // const hideDiv = document.querySelector("")
        console.log(hiddenBtn.classList);
        div.style.display = "none";
      }
    }
  }
}
const panel = document.querySelector("tab-panel");
asTabs(document.querySelector("tab-panel"));
// tabsArray.forEach(tab) => ){
//   tab.addEventListener()
// }
