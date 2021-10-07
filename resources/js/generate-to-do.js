let btnChoreList = document.getElementById("generate-btn");
btnChoreList.addEventListener("click", () => {
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
