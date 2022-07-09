const { readFileSync, promises: fsPromises } = require("fs");

// READING FILE SYNCHRONOUSLY
function syncReadFile(file) {
  const contents = readFileSync(file, "utf-8");

  const arr = contents.split(/\s+/);

  //   console.log(arr);

  return arr;
}

function searchingNumbers(arr) {
  return arr.map((string, index) => {
    if (string.length === 1) {
      return parseInt(string);
    } else {
      return string;
    }
  });
}

const submarineActivity = (arr) => {
  let vertical = 0;
  let horizontal = 0;
  let aim = 0;
  arr.map((direction, index) => {
    nextDirection = arr[index + 1];

    if (direction === "forward") {
      horizontal += nextDirection;
      vertical += Math.abs(aim) * nextDirection;
    } else if (direction === "up") {
      aim -= nextDirection;
    } else if (direction === "down") {
      aim += nextDirection;
    }
  });

  console.log("horizontal:", horizontal);
  console.log("vertical:", vertical);
  console.log("aim:", aim);
  console.log(horizontal * vertical);
};

const arrStrings = syncReadFile("./data/input.txt");
const submarineMovement = searchingNumbers(arrStrings);
// console.log(submarineMovement);
submarineActivity(submarineMovement);
