const number = document.getElementById("number")
const plus = document.getElementById("plus")

let count = 0

plus.onclick = function() {
  count += 1
  number.textContent = count
}
