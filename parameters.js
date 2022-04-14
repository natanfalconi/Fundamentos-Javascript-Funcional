//JAVASCRIPT COMO LINGUAGEM FLEXÍVEL

function logParams(a, b, c) {
  console.log(a, b, c);
}

logParams(1, 2, 3);
logParams(1, 2, 3, 4, 5);
logParams(1, 2);

//valor pardrão para parametros
function defaultParams(a = 1, b = 2, c = 3) {
  console.log(a, b, c);
}

defaultParams(7, 8, 9);
defaultParams(7, 8);
defaultParams(7);
defaultParams();

//spread/rest
function logNums(...nums) {
  for (let n of nums) {
    console.log(n);
  }
}
logNums(1, 2, 3, 4, 5, 6);

function logNums2(...nums) {
  console.log(nums);
}

logNums2(1, 2, 3, 4, 5, 6, 7, 8);

function sumAll(...nums) {
  let total = 0;
  for (let n of nums) {
    total += n;
  }
  return total;
}

console.log(sumAll(1, 2, 3, 4));
