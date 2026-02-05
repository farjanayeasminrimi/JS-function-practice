/*Task-1
Take four parameters. Multiply the four numbers and then return the result*/

function multiply(num1, num2, num3, num4) {
  let result = num1 * num2 * num3 * num4;
  return result;
}
let multiplication = multiply(2, 4, 2, 2);
console.log(multiplication);

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
console.log(result);

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
console.log(avgResult);

/////////////////////////////////////////////////////////////////

/*Task-4
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.*/

function count_zero(str) {
  let count = 0;
  for (char of str) {
    if (char.includes("0") === true) {
      count++;
    }
  }
  return count;
}
const string = `01001000 01100101 01101100 01101100 01101111 00100001`;
let countStr = count_zero(string);
console.log(countStr);

///////////////////////////////////////////////////////////////////////////

/*Task-5
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd*/

function odd_even(number) {
  if (number % 2 === 0) {
    return `Even`;
  }
  return `Odd`;
}
let isOdd_Even = odd_even(2);
let isOdd_Even2 = odd_even(7);
console.log(isOdd_Even);
console.log(isOdd_Even2);
