// IIFE - FUNÇÃO IMEDIATAMENTE INVOCADA

// QUANDO USAR? - QUANDO VOCÊ PRECISA GARANTIR QUE DETERMINADOS VALORES
//ESTARÃO DENTRO DE UM ESCOPO MAIS RESTRITO
(function (a, b, c) {
  let x = 3;
  console.log(`Result: ${a + b + c}`);
  console.log(x);
})(2, 5, 9);

(function () {
  let x = 300;
  console.log(x);
})();

(() => {
  console.log("arrow #01");
})();

(() => console.log("arrow #02"))();
