let btnAddChore = document.getElementById("chore-btn");
btnAddChore.addEventListener("click", () => {
  let inputValue = document.querySelector(".chore-input").value;
  choresList.push(inputValue);
  localStorage.setItem("choresList", JSON.stringify(choresList));
  populateChoreTable();
  document.querySelector(".chore-input").value = "";
  btnAddChore.parentNode.style.display = "none";
});
