const hikakin = {
  name: "ヒカキン",
  age: 24,
  hobbies: ["ゲーム", "動画編集", "猫と遊ぶこと"],
  isHappy: true,
  address: {
    country: "日本",
    city: "東京",
  },
  sayHello: function() {
    console.log("ブンブンハロー YouTube")
  },
}

console.log(hikakin)

const wakanya = {
  name: "松本わかな",
  age: 14,
}

console.log(wakanya)

const kawamu = {
  name: "川村文乃",
  age: 22,
  fishCanCook: ["まぐろ", "かつお", "うなぎ", "他にもいろいろ！"],
  ishappy: true,
  syussin: {
    pref: "高知県",
    city: "高知市",
  },
  hougen: function() {
    console.log("キラキラしちゅう")
  },
}

console.log(kawamu)
console.log(wakanya.name)
console.log(wakanya["age"])

const readerJun = {
  0: "あやか",
  1: "あかり",
}
console.log(readerJun[1])
const Name = "name"
console.log(kawamu[Name])
console.log(kawamu.name)
kawamu.hougen()
// 練習問題
// hikakin オブジェクトに入っている sayHello メソッドを実行してください。
hikakin.sayHello()
