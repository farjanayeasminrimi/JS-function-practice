function sum() {
  console.log("sum function is callded");
}
sum();

function summation(num1, num2) {
  const addition = num1 + num2;
  console.log(addition);
}
summation(11, 13);
summation(10, 20);

//////////////////////////////////////////////////

/* return is used to get the value in return so that we can reuse it for further operation*/

function doSum(num1, num2, num3) {
  let sum = num1 + num2 + num3;
  return sum;
}
let total = doSum(2, 4, 4);
let multiplication = total * 5;
console.log(multiplication);
