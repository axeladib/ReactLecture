var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

//Filter - Create a new array by keeping the items that return true.
const newNum = numbers.filter((number) => {
  return number < 10;
});
console.log(newNum);

//Reduce - Accumulate a value by doing something to each item in an array.
const sumNum = numbers.reduce((accumulator, currentValue) => {
  return (accumulator += currentValue);
});
console.log(sumNum);

//Find - find the first item that matches from an array.
const findNum = numbers.find((number) => {
  return number > 10;
});
console.log(findNum);
//FindIndex - find the index of the first item that matches.
const numIndex = numbers.findIndex((number) => {
  return number > 10;
});

console.log(numIndex);
