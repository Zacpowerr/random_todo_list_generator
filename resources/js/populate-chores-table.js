const populateChoreTable = () => {
  refreshList();
  let tbody = document.getElementById("chore-table");
  tbody.innerHTML = "";
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

populateChoreTable();
