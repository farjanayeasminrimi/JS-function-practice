/*Task-1
Take four parameters. Multiply the four numbers and then return the result*/

function multiply(num1, num2, num3, num4) {
  let result = num1 * num2 * num3 * num4;
  return result;
}
let multiplication = multiply(2, 4, 2, 2);
// console.log(multiplication);

///////////////////////////////////////////////////////////////

/*Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.*/

function isOdd(number) {
  if (number % 2 === 1) {
    const multiply = number * 2;
    return multiply;
  }
}
const result = isOdd(23);
// console.log(result);

/////////////////////////////////////////////////////////////////////

/*Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.*/
function make_avg(arr, size) {
  let sum = 0;
  for (number of arr) {
    sum += number;
  }
  let average = sum / size;
  return average;
}
let arr = [2, 3, 5, 6, 29, 30];
let size = arr.length;
const avgResult = make_avg(arr, size);
// console.log(avgResult);
