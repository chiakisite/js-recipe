const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feedback = document.getElementById("feedback")

const words = ["ゴリアテ", "ゼニガメ", "ガニメデ"]

//クイズの内容
const quiz = {
  text: "この星の名前は何でしょう？",
  image: "Ganymede.jpg",
  choices: [
    {
      text: words[2],
      feedback: `正解！${words[2]}は、木星の第三惑星だよ！`,
    },
    {
      text: words[1],
      feedback: `残念！${words[1]}は、クサガメまたはニホンイシガメの幼体だよ。`,
    },
    {
      text: words[0],
      feedback: `残念！${words[0]}は、旧約聖書に登場するダビデに石で殺される巨人だよ。`,
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
  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text
}

//選択する処理
const choose =
  function(choiceString) {
    //フィードバックの表示
    feedback.textContent = quiz.choices[choiceString].feedback
  } / 選択する処理
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
