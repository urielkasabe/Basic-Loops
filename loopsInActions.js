//Calculator
const buttonSum = document.querySelector("#calculator button");

function calculateSum() {
  const inputSumElement = document.getElementById("user-number");
  const inputSum = inputSumElement.value;

  let sumUpToNumber = 0;
  for (let i = 0; i <= inputSum; i++) {
    sumUpToNumber = sumUpToNumber + i;
  }
  const paraSum = document.getElementById("calculated-sum");

  paraSum.textContent = sumUpToNumber;
  paraSum.style.display = "block";
}

buttonSum.addEventListener("click", calculateSum);

//Highlight Links
const HighlightBtnEl = document.querySelector("#highlight-links button");

function HighlightLinks() {
  const aElements = document.querySelectorAll("#highlight-links a");
  for (const aElement of aElements) {
    aElement.classList.add("highlight");
  }
}

HighlightBtnEl.addEventListener("click", HighlightLinks);

//display User data

const userData = {
  name: "Uriel Kasabe",
  age: 21,
  aboutMe: "i'm From Argentina",
};

const DataBtn = document.querySelector("#user-data button");

function displayUserData() {
  const dataList = document.getElementById("output-user-data");
  
  dataList.innerHTML = '';

  for (const propName in userData) {
    const newUserList = document.createElement("li");
    const outputText = propName.toUpperCase() + ': ' + userData[propName];
    newUserList.textContent = outputText;
    dataList.append(newUserList);
  }
}

DataBtn.addEventListener("click", displayUserData);

// statistics

const statBtn = document.querySelector('#statistics button');

function rollDice() {
return Math.floor(Math.random() * 6) + 1;
}

function RollDiceFunc() {
const InputNumEl = document.getElementById('user-target-number');
const diceRollsListEl = document.getElementById('dice-rolls');


const InputNum = +InputNumEl.value;
diceRollsListEl.innerHTML = ''

let hasAchive = false;
let numOfRolls = 0
while (!hasAchive) {
    const newUserList = document.createElement("li");
    const rolledNUm = rollDice()

    numOfRolls++;
    const outputText = 'Roll' + numOfRolls + ': ' + rolledNUm;
    newUserList.textContent = outputText;
    diceRollsListEl.append(newUserList);
    hasAchive = rolledNUm === InputNum;
}
const span1 = document.getElementById('output-total-rolls');
const span2 = document.getElementById('output-target-number');

span1.textContent = numOfRolls;
span2.textContent = InputNum;


}

statBtn.addEventListener('click', RollDiceFunc);

