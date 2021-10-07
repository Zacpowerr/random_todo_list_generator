let btnNewChore = document.getElementById("new-chore");
btnNewChore.addEventListener("click", () => {
  let form = document.querySelector(".add-chore");
  form.style.display = "block";
});

let btnDefaultList = document.getElementById("return-default");
btnDefaultList.addEventListener("click", () => {
  localStorage.removeItem("choresList");
  populateChoreTable();
});
