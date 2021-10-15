const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")
document.addEventListener("keypress", keypress_ivent)

const putCard = function() {
  //カード作成関数
  const card = createCard(inputElement.value)
  //cardコンテナに追加
  container.append(card)
  //値を空にする
  inputElement.value = ""
}

function keypress_ivent(e) {
  if (e.code === "Enter") {
    putCard()
  }
}

addButton.onclick = function() {
  putCard()
}

const createCard = function(text) {
  //カード作成
  const card = document.createElement("div")
  card.className = "card"

  //todo作成
  const todo = createToDo(text)
  card.append(todo)

  //削除ボタン作成
  const deleteButton = createDelete(card)
  card.append(deleteButton)

  return card
}

const createToDo = function(text) {
  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  return todo
}

const createDelete = function(card) {
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"
  //削除ボタンを押すと
  deleteButton.onclick = function() {
    card.remove()
  }
  return deleteButton
}
