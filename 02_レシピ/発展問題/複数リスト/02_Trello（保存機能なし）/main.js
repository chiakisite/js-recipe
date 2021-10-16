for (let i = 0; i < 3; i++){
  const inputToDo[i] = document.getElementById(`input-todo${i}`)
  const cardsContainer[i] = document.getElementById(`cards-container${i}`)
  const addButton[i] = document.getElementById(`add-button${i}`)
  const mainContainer[i] = document.getElementById(`main-container${i}`)
}


addButton.onclick = function(n) {
  const card = createCard(inputToDo[n].value)
  cardsContainer.append(card)

  inputElement.value = ""
}


const createCard = function(text) {
  const card = document.createElement("div")
  card.className = "card"

  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card.append(todo)

  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  cardsContainer.append(card)
  card.append(todo)
  card.append(deleteButton)

  deleteButton.onclick = function() {
    card.remove()
  }
  return card
}


for (let i = 0; i < 3; i++){
  const addCategory = document.getElementById(`add-category${i}`)
}




let number = 1

const newCreateCard = function() {
  const listContainer = document.createElement("div")
  listContainer.className = "list-container"
  listContainer.id = "list-container"
  mainContainer.append(listContainer)

  const header = document.createElement("div")
  header.className = "list-header"
  header.id = "list-header"
  header.textContent = number += 1
  listContainer.append(header)

  const cardsContainer = document.createElement("div")
  cardsContainer.className = "cards-container"
  cardsContainer.id = "cards-container"
  header.after(cardsContainer)

  const listFooter = document.createElement("div")
  listFooter.className = "list-footer"
  listFooter.id = "list-footer"
  cardsContainer.after(listFooter)

  const inputContainer = document.createElement("div")
  inputContainer.className = "input-container"
  inputContainer.id = "input-container"
  listFooter.append(inputContainer)

  const inputTodo = document.createElement("input")
  inputTodo.className = "input-todo"
  inputTodo.id = "input-todo"
  inputContainer.append(inputTodo)

  const inputButton = document.createElement("div")
  inputButton.className = "input-button"
  inputButton.id = "add-button"
  inputButton.textContent = "追加"
  inputTodo.after(inputButton)

  const category = document.createElement("div")
  category.className = "category"
  category.id = "category"
  listFooter.after(category)

  const addCategory = document.createElement("div")
  addCategory.className = "add-category"
  addCategory.id = "add-category"
  addCategory.textContent = "＋カードを追加"
  category.append(addCategory)

  inputButton.onclick = function() {
    const card = createCard(inputTodo.value)
    cardsContainer.append(card)

    inputTodo.value = ""
  }
  //Enterキーで追加可能処理
  inputTodo.onkeydown = function(event) {
    if (event.key === "Enter") {
      const card = createCard(inputTodo.value)
      cardsContainer.append(card)

      inputTodo.value = ""
    }
  }

  const createCard = function(text) {
    const card = document.createElement("div")
    card.className = "card"

    const todo = document.createElement("div")
    todo.className = "todo"
    todo.textContent = text

    const deleteButton = document.createElement("div")
    deleteButton.className = "delete"

    cardsContainer.append(card)
    card.append(todo)
    card.append(deleteButton)

    deleteButton.onclick = function() {
      card.remove()
    }
    return card
  }

  addCategory.onclick = function() {
    newCreateCard()
  }
}

addCategory.onclick = function() {
  newCreateCard()
}
