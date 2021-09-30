const FizzBuzz = function(Number) {
  for (let i = 1; i <= Number; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz")
    } else if (i % 3 === 0) {
      console.log("Fizz")
    } else if (i % 5 === 0) {
      console.log("Buzz")
    } else {
      console.log(i)
    }
  }
}

const inputNumber = document.getElementById("Element")

const Enter = function() {
  FizzBuzz(inputNumber)
}

inputNumber.onkeydown = Enter
