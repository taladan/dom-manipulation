const MOUNTAINS = [
  { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
  { name: "Everest", height: 8848, place: "Nepal" },
  { name: "Mount Fuji", height: 3776, place: "Japan" },
  { name: "Vaalserberg", height: 323, place: "Netherlands" },
  { name: "Denali", height: 6168, place: "United States" },
  { name: "Popocatepetl", height: 5465, place: "Mexico" },
  { name: "Mont Blanc", height: 4808, place: "Italy/France" },
];

// grab expected keys
//
const mountTableKeys = Object.keys(MOUNTAINS[0]);

// create table header
function generateTableHead(table, data) {
  let thead = table.createTHead(); // let the html create the head
  let row = thead.insertRow(); // must have a row to append <th>'s to
  row.setAttribute("id", "mountainTableHeader");

  // Populate table header
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(
      key.charAt(0).toUpperCase() + key.slice(1)
    );
    th.appendChild(text);
    row.appendChild(th);
  }
}

/* 
## Generate Table
The logic for this is:
take parameters of `table` where `table` is the html element
and `data` where `data` is an array of objects - primitive text objs in
this case.
1. Loop through every element of the data array
2. Create a new row in the table
3. for every key in that element, add a cell
4. create a text node that contains the text in element[key]
5. append the text node to the cell we just created
*/

function generateTable(table, data) {
  let tableBody = document.createElement("tbody");
  table.appendChild(tableBody);

  for (let element of data) {
    let row = tableBody.insertRow(); // add row
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

const mountainDiv = document.querySelector("#mountains");
const table = document.createElement("table");
table.setAttribute("id", "mountainTable");
mountainDiv.append(table);
const mountTable = document.getElementById("mountainTable");
generateTableHead(mountTable, mountTableKeys);
generateTable(table, MOUNTAINS);
