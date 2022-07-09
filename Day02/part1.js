const { readFileSync, promises: fsPromises } = require("fs");

// READING FILE SYNCHRONOUSLY
function syncReadFile(file) {
  const contents = readFileSync(file, "utf-8");
  const arr = contents.split(/\s+/);
  //console.log(arr);
  return arr.map;
}

function searchingNumbers(arr) {
  return arr.map((string) => {
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
  arr.map((direction, index) => {
    if (direction === "forward") {
      return (horizontal += arr[index + 1]);
    } else if (direction === "up") {
      return (vertical += arr[index + 1]);
    } else if (direction === "down") {
      return (vertical -= arr[index + 1]);
    }
  });
  console.log(horizontal);
  console.log(vertical);
  console.log(horizontal * vertical);
};

const arrStrings = syncReadFile("./data/input.txt");
const submarineMovement = searchingNumbers(arrStrings);
console.log(submarineActivity(submarineMovement));
