function run(fn) {
  return `Result: ${fn()}`
}

function sayHello() {
  console.log("hello");
}

run(sayHello);

run(function () {
  console.log("run now");
});

const result = run(Math.random)
console.log(result)