const display = document.getElementById("display")
const button = document.getElementById("button")

const c

let count = 0

const countup = function() {
  count += 1
  display.textContent = count / 100
}

let timer = null

button.onclick = function() {
  if (timer === null) {
    timer = setInterval(countup, 10)
    button.textContent = "stop"
  } else {
    clearInterval(timer)
    timer = null
    button.textContent = "start"
  }
}
