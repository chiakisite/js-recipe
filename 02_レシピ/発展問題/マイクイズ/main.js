const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feedback = document.getElementById("feedback")

const words = ["アンジュルム", "アップアップガールズ(仮)", "つばきファクトリー"]

//クイズの内容
const quiz = {
  text: "次のうち、ハロプロのグループでないのはどれ？",
  image: "idol_woman.jpg",
  choices: [
    {
      text: words[0],
      feedback: `残念！ ${words[0]}は、昔スマイレージ、って名前で活動していたハロプロのアイドルグループだよ！`,
    },
    {
      text: words[1],
      feedback: `正解！${words[1]}は、アップフロント所属だけどハロプロではないんだ！`,
    },
    {
      text: words[0],
      feedback: `残念！${words[2]}は、Berryz工房や℃-uteのスピリットを受け継ぐハロプロのグループだよ！`,
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
const choose = function(choiceString) {
  //フィードバックの表示
  feedback.textContent = quiz.choices[choiceString].feedback
} // 選択する処理
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
