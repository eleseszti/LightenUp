const menuDiv = document.querySelector("#menu");
const gameDiv = document.querySelector("#game");
const newGameDiv = document.querySelector("#newGame");
const playerName = document.querySelector("#player");
const passedTime = document.querySelector("#passedTime");
const passedTimeDiv = document.querySelector("#passedTimeDiv");

const newBtn = document.querySelector("#newBtn");
const start = document.querySelector("#start");
const level = document.getElementById("level");

start.addEventListener("click", startGame);
newBtn.addEventListener("click", startNewGame);
gameDiv.addEventListener("click", placeBulb);

let chosenLevel = "";
let table;
let startTime;
let endTime;
let elapsedTime;

// Menu, choosing level

function generateTable(num) {
  table = document.createElement("table");
  for (let i = 0; i < num; i++) {
    let row = table.insertRow();
    for (let j = 0; j < num; j++) {
      row.insertCell();
    }
  }
  table.id = "chooseTable";
  gameDiv.appendChild(table);
  return table;
}

function chooseEasy() {
  if (chosenLevel !== "") {
    chosenLevel.style.backgroundColor = "#9F86C0";
  }
  chosenLevel = easy;
  easy.style.backgroundColor = "#E0B1CB";
}

function chooseMedium() {
  if (chosenLevel !== "") {
    chosenLevel.style.backgroundColor = "#9F86C0";
  }
  chosenLevel = medium;
  medium.style.backgroundColor = "#E0B1CB";
}

function chooseDiff() {
  if (chosenLevel !== "") {
    chosenLevel.style.backgroundColor = "#9F86C0";
  }
  chosenLevel = diff;
  diff.style.backgroundColor = "#E0B1CB";
}

function startGame() {
  if (playerName.value !== "") {
    switch (level.value) {
      case "easy":
        const tableEasy = generateTable(7);
        tableEasy.rows[0].cells[3].style.backgroundColor = "black";
        tableEasy.rows[0].cells[3].innerText = "1";
        tableEasy.rows[1].cells[1].style.backgroundColor = "black";
        tableEasy.rows[1].cells[1].innerText = "0";
        tableEasy.rows[1].cells[5].style.backgroundColor = "black";
        tableEasy.rows[1].cells[5].innerText = "2";
        tableEasy.rows[3].cells[0].style.backgroundColor = "black";
        tableEasy.rows[3].cells[3].style.backgroundColor = "black";
        tableEasy.rows[3].cells[6].style.backgroundColor = "black";
        tableEasy.rows[5].cells[1].style.backgroundColor = "black";
        tableEasy.rows[5].cells[5].style.backgroundColor = "black";
        tableEasy.rows[5].cells[5].innerText = "2";
        tableEasy.rows[6].cells[3].style.backgroundColor = "black";
        tableEasy.rows[6].cells[3].innerText = "3";
        checkBlack();
        break;
      case "medium":
        const tableMedium = generateTable(7);
        tableMedium.rows[0].cells[2].style.backgroundColor = "black";
        tableMedium.rows[0].cells[2].innerText = 0;
        tableMedium.rows[0].cells[4].style.backgroundColor = "black";
        tableMedium.rows[2].cells[0].style.backgroundColor = "black";
        tableMedium.rows[2].cells[2].style.backgroundColor = "black";
        tableMedium.rows[2].cells[4].style.backgroundColor = "black";
        tableMedium.rows[2].cells[4].innerText = 3;
        tableMedium.rows[2].cells[6].style.backgroundColor = "black";
        tableMedium.rows[3].cells[3].style.backgroundColor = "black";
        tableMedium.rows[3].cells[3].innerText = 1;
        tableMedium.rows[4].cells[0].style.backgroundColor = "black";
        tableMedium.rows[4].cells[0].innerText = 2;
        tableMedium.rows[4].cells[2].style.backgroundColor = "black";
        tableMedium.rows[4].cells[4].style.backgroundColor = "black";
        tableMedium.rows[4].cells[6].style.backgroundColor = "black";
        tableMedium.rows[6].cells[2].style.backgroundColor = "black";
        tableMedium.rows[6].cells[4].style.backgroundColor = "black";
        tableMedium.rows[6].cells[4].innerText = 2;
        checkBlack();
        break;
      case "difficult":
        const tableDiff = generateTable(10);
        tableDiff.rows[0].cells[1].style.backgroundColor = "black";
        tableDiff.rows[1].cells[5].style.backgroundColor = "black";
        tableDiff.rows[1].cells[5].innerText = 3;
        tableDiff.rows[1].cells[7].style.backgroundColor = "black";
        tableDiff.rows[1].cells[7].innerText = 2;
        tableDiff.rows[1].cells[9].style.backgroundColor = "black";
        tableDiff.rows[2].cells[1].style.backgroundColor = "black";
        tableDiff.rows[2].cells[1].innerText = 0;
        tableDiff.rows[2].cells[2].style.backgroundColor = "black";
        tableDiff.rows[2].cells[7].style.backgroundColor = "black";
        tableDiff.rows[3].cells[4].style.backgroundColor = "black";
        tableDiff.rows[4].cells[1].style.backgroundColor = "black";
        tableDiff.rows[4].cells[1].innerText = 1;
        tableDiff.rows[4].cells[4].style.backgroundColor = "black";
        tableDiff.rows[4].cells[5].style.backgroundColor = "black";
        tableDiff.rows[4].cells[5].innerText = 1;
        tableDiff.rows[4].cells[6].style.backgroundColor = "black";
        tableDiff.rows[5].cells[3].style.backgroundColor = "black";
        tableDiff.rows[5].cells[4].style.backgroundColor = "black";
        tableDiff.rows[5].cells[5].style.backgroundColor = "black";
        tableDiff.rows[5].cells[8].style.backgroundColor = "black";
        tableDiff.rows[5].cells[8].innerText = 3;
        tableDiff.rows[6].cells[5].style.backgroundColor = "black";
        tableDiff.rows[7].cells[2].style.backgroundColor = "black";
        tableDiff.rows[7].cells[2].innerText = 1;
        tableDiff.rows[7].cells[7].style.backgroundColor = "black";
        tableDiff.rows[7].cells[7].innerText = 0;
        tableDiff.rows[7].cells[8].style.backgroundColor = "black";
        tableDiff.rows[8].cells[0].style.backgroundColor = "black";
        tableDiff.rows[8].cells[0].innerText = 3;
        tableDiff.rows[8].cells[2].style.backgroundColor = "black";
        tableDiff.rows[8].cells[4].style.backgroundColor = "black";
        tableDiff.rows[8].cells[4].innerText = 0;
        tableDiff.rows[9].cells[8].style.backgroundColor = "black";
        tableDiff.rows[9].cells[8].innerText = 0;
        checkBlack();
        break;
    }
    for (let i = 0; i < table.rows.length; i++) {
      for (let j = 0; j < table.rows.length; j++) {
        if (table.rows[i].cells[j].style.backgroundColor === "black") {
          table.rows[i].cells[j].style.cursor = "auto";
        }
      }
    }
    startTime = new Date();
    writeElapsedTime(startTime);
    menuDiv.hidden = true;
    gameDiv.hidden = false;
    passedTimeDiv.hidden = false;
    gameDiv.classList.remove("div-opacity");
    gameDiv.addEventListener("click", placeBulb);
  }
}

// Game area

function placeBulb(e) {
  if (e.target.matches("td") && e.target.style.backgroundColor !== "black") {
    e.target.classList.toggle("lightOn");
  }
  redraw();
  if (isOver()) {
    newGameDiv.hidden = false;
    gameDiv.classList.add("div-opacity");
    gameDiv.removeEventListener("click", placeBulb);
    clearInterval(elapsedTime);
  }
}

function redraw() {
  const tableSize = table.rows.length;
  for (let i = 0; i < tableSize; i++) {
    for (let j = 0; j < tableSize; j++) {
      let cell = table.rows[i].cells[j];
      if (cell.style.backgroundColor !== "black") {
        cell.style.backgroundColor = "#e8dba7";
      }
    }
  }
  for (let i = 0; i < tableSize; i++) {
    for (let j = 0; j < tableSize; j++) {
      let cell = table.rows[i].cells[j];
      if (cell.className === "lightOn") {
        cell.style.backgroundColor = "#FDDA0D";
        lightCellsNorth(i, j);
        lightCellsSouth(i, j);
        lightCellsEast(i, j);
        lightCellsWest(i, j);
      }
    }
  }
  checkBlack();
}

// Lighting cells

function lightCellsNorth(x, y) {
  let i = x - 1;

  while (i >= 0 && table.rows[i].cells[y].style.backgroundColor !== "black") {
    table.rows[i].cells[y].style.backgroundColor = "#FDDA0D";
    if (table.rows[i].cells[y].className === "lightOn") {
      table.rows[i].cells[y].style.backgroundColor = "red";
      table.rows[x].cells[y].style.backgroundColor = "red";
    }
    i--;
  }
}

function lightCellsSouth(x, y) {
  let i = x + 1;
  const tableSize = table.rows.length;

  while (
    i < tableSize &&
    table.rows[i].cells[y].style.backgroundColor !== "black"
  ) {
    table.rows[i].cells[y].style.backgroundColor = "#FDDA0D";
    if (table.rows[i].cells[y].className === "lightOn") {
      table.rows[i].cells[y].style.backgroundColor = "red";
      table.rows[x].cells[y].style.backgroundColor = "red";
    }
    i++;
  }
}

function lightCellsWest(x, y) {
  let j = y - 1;

  while (j >= 0 && table.rows[x].cells[j].style.backgroundColor !== "black") {
    table.rows[x].cells[j].style.backgroundColor = "#FDDA0D";
    if (table.rows[x].cells[j].className === "lightOn") {
      table.rows[x].cells[j].style.backgroundColor = "red";
      table.rows[x].cells[y].style.backgroundColor = "red";
    }
    j--;
  }
}

function lightCellsEast(x, y) {
  let j = y + 1;
  const tableSize = table.rows.length;

  while (
    j < tableSize &&
    table.rows[x].cells[j].style.backgroundColor !== "black"
  ) {
    table.rows[x].cells[j].style.backgroundColor = "#FDDA0D";
    if (table.rows[x].cells[j].className === "lightOn") {
      table.rows[x].cells[j].style.backgroundColor = "red";
      table.rows[x].cells[y].style.backgroundColor = "red";
    }
    j++;
  }
}

// Check lightbulbs around black cells

function checkBlack() {
  const tableSize = table.rows.length;
  for (let i = 0; i < tableSize; i++) {
    for (let j = 0; j < tableSize; j++) {
      if (table.rows[i].cells[j].style.backgroundColor === "black") {
        let lightBulbs = table.rows[i].cells[j].innerText;
        if (lightBulbs !== "" && countAround(i, j) === parseInt(lightBulbs)) {
          table.rows[i].cells[j].classList.add("green");
        } else {
          table.rows[i].cells[j].classList.remove("green");
        }
      }
    }
  }
}

function countAround(x, y) {
  let tableSize = table.rows.length;
  let lightBulbs = 0;
  if (x - 1 >= 0 && table.rows[x - 1].cells[y].className === "lightOn") {
    lightBulbs++;
  }
  if (x + 1 < tableSize && table.rows[x + 1].cells[y].className === "lightOn") {
    lightBulbs++;
  }
  if (y - 1 >= 0 && table.rows[x].cells[y - 1].className === "lightOn") {
    lightBulbs++;
  }
  if (y + 1 >= 0 && table.rows[x].cells[y + 1].className === "lightOn") {
    lightBulbs++;
  }
  return lightBulbs;
}

// Check end of game

function isOver() {
  const tableSize = table.rows.length;
  for (let i = 0; i < tableSize; i++) {
    for (let j = 0; j < tableSize; j++) {
      let cell = table.rows[i].cells[j];
      if (
        cell.style.backgroundColor === "black" &&
        cell.innerHTML !== "" &&
        !cell.classList.contains("green")
      ) {
        return false;
      }
      if (
        cell.style.backgroundColor !== "black" &&
        cell.style.backgroundColor !== "rgb(253, 218, 13)"
      ) {
        return false;
      }
    }
  }
  return true;
}

function startNewGame() {
  gameDiv.removeChild(table);
  menuDiv.hidden = false;
  newGameDiv.hidden = true;
  gameDiv.hidden = true;
  passedTime.innerText = "00:00";
  passedTimeDiv.hidden = true;
}

// Count elapsed time

function getElapsedTime() {
  endTime = new Date();
  let timeDiff = (endTime.getTime() - startTime.getTime()) / 1000;

  let seconds = Math.floor(timeDiff % 60);
  let secondsStr = seconds < 10 ? "0" + seconds : seconds;

  timeDiff = Math.floor(timeDiff / 60);

  let minutes = Math.floor(timeDiff % 60);
  let minutesStr = minutes < 10 ? "0" + minutes : minutes;

  return minutesStr + ":" + secondsStr;
}

function writeElapsedTime(sT) {
  elapsedTime = setInterval(() => {
    passedTime.innerText = getElapsedTime(sT);
  }, 1000);
}
