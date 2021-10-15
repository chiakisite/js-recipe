const display = document.getElementById("display")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const mul = document.getElementById("mul")

let number = 0
let number2 = 1

const result = function(num) {
  display.textContent = num
}

const click = function(choice) {
  if (choice === 0) {
    number += 1
    result(number)
  } else if (choice === 1) {
    number -= 1
    result(number)
  } else if (choice === 2) {
    number2 *= 2
    result(number2)
  }
}

plus.onclick = function() {
  click(0)
}

minus.onclick = function() {
  click(1)
}

mul.onclick = function() {
  click(2)
}
