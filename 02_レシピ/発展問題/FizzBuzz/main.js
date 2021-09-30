let inputNumber

const FizzBuzz = function(inputNumber) {
  for (let i = 1; i <= inputNumber; i++) {
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

window.document.onkeydown = function(event) {
  if (event.key === "Enter") {
    inputNumber = document.getElementById("Element")
  }
}

FizzBuzz(inputNumber)
