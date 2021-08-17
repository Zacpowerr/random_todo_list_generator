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
  console.log("Generated to do list", todoList);
};

const generateRandomIndex = (except = null) => {
  let index = Math.floor(Math.random() * choresList.length);
  return index === except ? generateRandomIndex(index) : index;
};
generateRandomTodoList(17);
