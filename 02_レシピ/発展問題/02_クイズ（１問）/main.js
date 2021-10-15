const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const feedback = document.getElementById("feedback")

const words = ["ゴリアテ", "ゼニガメ", "ガニメデ"]

const buttonmaker = function(n, text) {
  const newButton = document.createElement("button")
  const buttonText = document.createTextNode(text)
  newButton.appendChild(buttonText)
  newButton.setAttribute("id", `button-${n}`)
  const choicesContainer = document.getElementById("choices-container")
  if (n === 0) {
    choicesContainer.insertBefore(newButton, choicesContainer.firstChild)
    return document.getElementById(`button-${n}`)
  } else {
    const before = document.getElementById(`button-${n - 1}`)
    choicesContainer.insertBefore(newButton, before.nextSibling)
    return document.getElementById(`button-${n}`)
  }
}

//クイズの内容
const quiz = {
  text: "この星の名前は何でしょう？",
  image: "Ganymede.jpg",
  choices: [
    {
      text: words[0],
      button: buttonmaker(0, quiz.choices[0].text),
      feedback: `残念！${words[0]}は、旧約聖書に登場するダビデに石で殺される巨人だよ。`,
    },
    {
      text: words[1],
      button: buttonmaker(1, quiz.choices[1].text),
      feedback: `残念！${words[1]}は、クサガメまたはニホンイシガメの幼体だよ。`,
    },
    {
      text: words[2],
      button: buttonmaker(2, quiz.choices[2].text),
      feedback: `正解！${words[2]}は、木星の第三惑星だよ！`,
    },
  ],
}

//クイズの表示処理
const reloadQuiz = function() {
  //問題文
  quizText.textContent = "Q." + quiz.text

  //画像
  quizImage.src = "./images/" + quiz.image
}

//選択肢
const choice1 = quiz.choices[0].button
const choice2 = quiz.choices[1].button
const choice3 = quiz.choices[2].button

//選択する処理
const choose = function(choiceString) {
  //フィードバックの表示
  feedback.textContent = quiz.choices[choiceString].feedback
} //選択する処理

choice1.onclick = function() {
  choose(0)
}

choice2.onclick = function() {
  choose(1)
}

choice3.onclick = function() {
  choose(2)
}

reloadQuiz()
