//FUNCTION DECLARATION

//FUNÇÃO QUE NÃO RECEBE PARAMETRO E NÃO RETORNA NADA
function sayHello() {
  console.log("hello");
}
sayHello();

//FUNÇÃO QUE RECEBE UM PARAMETRO E NÃO RETORNA NADA
function sayHelloTo(name) {
  console.log(`Hello ${name}`);
}
sayHelloTo("John");

//FUNÇÃO QUE NÃO RECEBE PARAMETRO E RETORNA ALGUMA COISA
function returnHi() {
  return "Hi";
}
const greeting = returnHi();
console.log(greeting);
console.log(returnHi());

//FUNÇÃO QUE RECEBE UM PARAMETRO E RETORNA ALGUMA COISA
function returnHiTo(name) {
  return `Hi ${name}`;
}
console.log(returnHiTo("lucas"));
