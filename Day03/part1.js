const { readFileSync, promises: fsPromises } = require("fs");

// READING FILE SYNCHRONOUSLY
function syncReadFile(file) {
  const contents = readFileSync(file, "utf-8");
  const arr = contents.split(/\s+/);
  //console.log(arr);
  return arr;
}
const comparingNumbers = (arr) => {
  let count1 = 0;
  let count0 = 0;
  let temp = 0;
  let gammaRate = "";
  let epsilonRate = "";

  for (let i = 0; i < arr[0].length; i++) {
    count1 = 0;
    count0 = 0;
    temp = 0;
    arr.map((value) => {
      value.charAt(i) == 1 ? count1++ : count0++;
    });
    count1 > count0 ? (temp = 1) : (temp = 0);
    gammaRate += temp;
    count1 > count0 ? (temp = 0) : (temp = 1);
    epsilonRate += temp;
  }
  a = parseInt(gammaRate, 2);
  b = parseInt(epsilonRate, 2);
  console.log(a * b);
};

const arrStrings = syncReadFile("./data/input.txt");
comparingNumbers(arrStrings);
// console.log(arrStrings);
