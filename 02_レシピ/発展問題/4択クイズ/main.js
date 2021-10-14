const quizTitle = document.getElementById("quiz-title")
const quizImage = document.getElementById("quiz-image")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const choice4 = document.getElementById("choice-4")
const feedback = document.getElementById("feedback")

const Quiz = {
  title: "アンジュルムのサブリーダー・川村文乃ちゃんの出身地は？",
  image: "AyanoKawamura.png",
  choices: [
    {
      text: "徳島",
      feedback: "残念！踊るのは阿波おどりじゃなくて…？",
      image: "tokushima.png",
    },
    {
      text: "高知",
      feedback: "正解！カツオをさばくのが得意なんだー！",
      image: "kouchi.png",
    },
    {
      text: "香川",
      feedback: "違う、もっと遠いよー！",
      image: "kagawa.png",
    },
    {
      text: "愛媛",
      feedback: "惜しい！出身地ではないんだよ！",
      image: "ehime.png",
    },
  ],
}

const reloadQuiz = function() {
  quizTitle.textContent = "Q." + Quiz.title
  quizImage.src = "./images/" + Quiz.image
  choice1.textContent = Quiz.choices[0].text
  choice2.textContent = Quiz.choices[1].text
  choice3.textContent = Quiz.choices[2].text
  choice4.textContent = Quiz.choices[3].text
}
const photo = function(number) {
  quizImage.classList.remove("image")
  quizImage.src = "./images/" + Quiz.choices[number].image
}

const choose = function(number) {
  photo(number)
  feedback.textContent = Quiz.choices[number].feedback
}

choice1.onclick = function() {
  choose(0)
}
choice2.onclick = function() {
  choose(1)
}
choice3.onclick = function() {
  choose(2)
}
choice4.onclick = function() {
  choose(3)
}

reloadQuiz()
