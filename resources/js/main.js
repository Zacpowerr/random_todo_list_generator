const choresList = [
  "Make bed",
  "Bush teeth",
  "Take a shower",
  "Do the dishes",
  "Organize bedroom",
  "Organize desk",
  "Organize living room",
  "Organize kitchen",
  "Clean bedroom",
  "Clean desk",
  "Clean living room",
  "Clean kitchen",
  "Cook dinner",
  "Checkin with parents",
  "Do the laundry",
  "Fold laundry",
  "Study for exam",
];
let todoList = [];

const generateRandomTodoList = (choreNum = 3) => {
  if (choreNum > choresList.length) {
    alert(
      `Number of chores provided is larger than the dataset, please provide a lower number than ${choresList.length} or add more chores in the chore's list`
    );
    return console.log(
      `Number of chores provided is larger than the dataset, please provide a lower number than ${choresList.length} or add more chores in the chore's list`
    );
  }
  for (let i = 0; i < choreNum; i++) {
    let randIndex = generateRandomIndex();
    let hasItem = todoList.includes(choresList[randIndex]);
    while (hasItem) {
      randIndex = generateRandomIndex(randIndex);
      hasItem = todoList.includes(choresList[randIndex]);
    }
    todoList.push(choresList[randIndex]);
  }
};

const generateRandomIndex = (except = null) => {
  let index = Math.floor(Math.random() * choresList.length);
  return index === except ? generateRandomIndex(index) : index;
};

const populateChoreTable = () => {
  let tbody = document.getElementById("chore-table");
  choresList.forEach((chore, index) => {
    let tr = document.createElement("tr");
    let tdId = document.createElement("td");
    tdId.setAttribute("colspan", 1);
    tdId.textContent = index + 1;
    let tdName = document.createElement("td");
    tdName.setAttribute("colspan", 2);
    tdName.textContent = chore;
    tr.append(tdId, tdName);
    tbody.append(tr);
  });
};

let pageTitle = document.title;
if (pageTitle === "Chores - To do list") {
  populateChoreTable();
}
let btn = document.getElementById("generate-btn");
btn.addEventListener("click", () => {
  let userInput = document.getElementById("amount");
  generateRandomTodoList(userInput.value);
  let article = document.getElementsByClassName("table-result")[0];
  let tbody = document.getElementById("chore-table");
  tbody.textContent = "";
  todoList.forEach((chore, index) => {
    article.style.display = "block";
    let tr = document.createElement("tr");
    let tdId = document.createElement("td");
    tdId.setAttribute("colspan", "1");
    tdId.textContent = index + 1;
    let tdName = document.createElement("td");
    tdName.setAttribute("colspan", "2");
    tdName.textContent = chore;
    tr.append(tdId, tdName);
    tbody.append(tr);
  });
  todoList = [];
});
