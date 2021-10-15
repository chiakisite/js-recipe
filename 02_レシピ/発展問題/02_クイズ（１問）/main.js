const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const feedback = document.getElementById("feedback")

const button = function(n) {
  const newButton = document.createElement("button")
  let newText
  if (n === 0) {
    newText = document.createTextNode("ゴリアテ")
  } else if (n === 1) {
    newText = document.createTextNode("ゼニガメ")
  } else if (n === 2) {
    newText = document.createTextNode("ガニメデ")
  }
  newButton.appendChild(newText)
  newButton.setAttribute("id", `choice-${n}`)
  const choices = document.getElementById("choices-container")
  choices.appendChild(newButton)
  return document.getElementById(`choice-${n}`)
}

//クイズの内容
const quiz = {
  text: "この星の名前は何でしょう？",
  image: "Ganymede.jpg",
  choices: [
    {
      text: "ゴリアテ",
      feedback:
        "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ",
      button: button(0),
    },
    {
      text: "ゼニガメ",
      feedback: "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
      button: button(1),
    },
    {
      text: "ガニメデ",
      feedback: "正解！ガニメデは、木星の第三惑星だよ！",
      button: button(2),
    },
  ],
}

//クイズの表示処理
const reloadQuiz = function() {
  //問題文
  quizText.textContent = "Q." + quiz.text

  //画像
  quizImage.src = "./images/" + quiz.image

  //選択肢
}

reloadQuiz()

//選択する処理
const choose = function(choiceString) {
  //フィードバックの表示
  feedback.textContent = quiz.choices[choiceString].feedback
} //選択する処理

quiz.choices[0].button.onclick = function() {
  choose(0)
}

quiz.choices[1].button.onclick = function() {
  choose(1)
}

quiz.choices[2].button.onclick = function() {
  choose(2)
}
