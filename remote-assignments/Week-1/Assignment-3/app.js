function countAandB(input) {
  // your code here
  let counter = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "a" || input[i] === "b") {
      counter++;
    }
  }
  return counter;
}

function toNumber(input) {
  // your code here
  let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
  };

  return input.map((char) => obj[char]);
}

let input1 = ["a", "b", "c", "a", "c", "a", "c"];
console.log(countAandB(input1)); // should print 4 (3 ‘a’ lettersand 1 ‘b’ letter)
console.log(toNumber(input1)); // should print [1, 2, 3, 1, 3, 1,3]

let input2 = ["e", "d", "c", "d", "e"];
console.log(countAandB(input2)); // should print 0
console.log(toNumber(input2)); // should print [5, 4, 3, 4, 5]
