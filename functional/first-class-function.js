// FIRST-CLASS FUNCTION
// QUANDO É PERMITIDO ARMAZENAR FUNÇÃO DENTRO DE VARIÁVEIS

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

// FIRST-CLASS FUNCTION COM ARROW FUNCTION
const multiply = (x, y) => x * y;

const divide = (x, y) => x / y;

console.log(add(10, 20));
console.log(subtract(10, 20));
console.log(multiply(10, 20));
console.log(divide(10, 20));
