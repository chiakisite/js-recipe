const empty = []
console.log(empty)
const sayumin = [7, 1, 3]
console.log(sayumin)
const kawamu = ["かわむー", 7, 22]
console.log(kawamu)
const Eri = "亀井絵里"
const Sayumi = "道重さゆみ"
const Reina = "田中れいな"
const Rokki = [Eri, Sayumi, Reina]
console.log(Rokki)
const Jyugoki = [
  { name: "北川莉央", birthday: 3.16, age: 17, color: "シーブルー" },
  { name: "岡村ほまれ", birthday: 5.9, age: 16, color: "デイジー" },
  { name: "山崎愛生", birthday: 6.28, age: 16, color: "ブライトグリーン" },
]
console.log(Jyugoki)
console.log(Jyugoki[2])
console.log(Jyugoki[0].color)
Jyugoki[1] = {
  name: "岡村ほまれ",
  birthday: 5.9,
  age: 16,
  color: "デイジー",
  nickname: "ほまたん",
}
console.log(Jyugoki[1])
console.log(Jyugoki[3])
console.log(Jyugoki.length)

for (let i = 0; i < Jyugoki.length; i++) {
  console.log(i + 1 + "人目は" + Jyugoki[i].name)
}
console.log(Jyugoki[Jyugoki.length - 1])

const num = ["One", "Two"]
num.push("Three")
console.log(num)
const last = num.pop()
console.log(num)
console.log(last)

const animal = ["Dog", "Cat", "Bird", "Frog", "Fish"]
animal.splice(1, 1)
console.log(animal)
animal.splice(2, 0, "Sneak")
console.log(animal)

const Jyunishi = [
  "ね",
  "うし",
  "とら",
  "う",
  "たつ",
  "み",
  "うま",
  "ひつじ",
  "さる",
  "とり",
  "いぬ",
  "い",
]
const indexOfInnu = Jyunishi.indexOf("いぬ")
console.log(indexOfInnu)
console.log(Jyunishi[indexOfInnu])
console.log(Jyunishi.indexOf("ねこ"))

const Hokkaido = [{ city: "札幌" }, { city: "旭川" }, { city: "函館" }]

const indexOfHakodate = Hokkaido.findIndex(function(Hokkaido) {
  return Hokkaido.city === "函館"
})
console.log(indexOfHakodate)
console.log(Hokkaido[indexOfHakodate])

const Rosen = [
  { Rail: "天北線" },
  { Rail: "名寄本線" },
  { Rail: "池北線" },
  { Rail: "標津線" },
]

const Three = Rosen.find((Rosen) => {
  return Rosen.Rail === "池北線"
})
console.log(Three)

const Gojyuon = ["あ", "か", "さ", "た", "な", "は", "ま", "や", "ら", "わ"]
console.log(Gojyuon.includes("あ"))
console.log(Gojyuon.includes("ん"))

const Jyogai = [{ Rail: "岩泉線" }, { Rail: "名松線" }]

const Nokori = Jyogai.some(function(Jyogai) {
  return Jyogai.Rail === "名松線"
})
console.log(Nokori)

const Beauty = [...Rokki, ...Jyugoki]
console.log(Beauty)

Jyugoki.forEach(function(Saikyo) {
  console.log(Saikyo)
})

Jyugoki.forEach((Saikyo) => {
  console.log(Saikyo)
})

const hitoketa = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const Jyubai = hitoketa.map((Baisu) => {
  return Baisu * 10
})
console.log(Jyubai)

const seisekibo = [
  { name: "とーや", taiiku: 1, bijutsu: 5, doutoku: 5 },
  { name: "りょーた", taiiku: 3, bijutsu: 3, doutoku: 3 },
  { name: "やすなり", taiiku: 5, bijutsu: 5, doutoku: 1 },
]

const undoudekiruSeito = seisekibo.filter((stu) => {
  return stu.taiiku >= 3
})

console.log(undoudekiruSeito)

const array = [1, 2, 3]
array.forEach((currentValue, index, array) => {
  console.log(currentValue, index, array)
})
// コンソールの出力
// 1, 0, [1, 2, 3]
// 2, 1, [1, 2, 3]
// 3, 2, [1, 2, 3]

const array2 = [1, 2, 3]
// 各要素に10を乗算した新しい配列を作成する
const newArray = array.map((currentValue) => {
  return currentValue * 10
})
console.log(newArray) // => [10, 20, 30]
// 元の配列とは異なるインスタンス
console.log(array2 !== newArray) // => true

const array3 = [1, 2, 3]
// 奇数の値を持つ要素だけを集めた配列を返す
const newArray2 = array.filter((currentValue) => {
  return currentValue % 2 === 1
})
console.log(newArray2) // => [1, 3]
// 元の配列とは異なるインスタンス
console.log(array3 !== newArray2) // => true

const array4 = [1, 2, 3]
// すべての要素を加算した値を返す
// accumulatorの初期値は`0`
const totalValue = array.reduce((accumulator, currentValue, index, array) => {
  return accumulator + currentValue
}, 0)
// 0 + 1 + 2 + 3という式の結果が返り値になる
console.log(totalValue) // => 6
