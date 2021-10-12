const input = document.getElementById("memo-input")
const add = document.getElementById("add-button")
const container = document.getElementById("memo-container")

add.onclick = function() {
  const text = input.value

  const card = document.createElement("div")
  card.textContent = text

  container.append(card)
  console.log(text)

  input.value = ""
}
