// 要素を取得する
const element = document.getElementById("elementId")
console.log("「要素を取得する」で取得した要素 →", element)

// 要素を取得する - 発展：子要素を取得する
const buttons = document.getElementById("buttons")
for (const button of buttons.children) {
  button.onclick = function() {
    alert("clicked: " + button.textContent)
  }
}

// 要素を変更する - textContent
const elementTextContent = document.getElementById("element-textContent")
elementTextContent.textContent = "こんばんは"

// 要素を変更する - style
const elementStyle = document.getElementById("element-style")
elementStyle.style.fontWeight = "bold"

// 要素を変更する - className
const elementClassName = document.getElementById("element-className")
elementClassName.className = "nice-element"

// 要素を変更する - classList
const elementClassList = document.getElementById("element-classList")
elementClassList.classList.add("great-element")

const Ele = document.getElementById("elementnoId")
console.log(Ele)

// 要素を追加する - appendChild
const elementAppendChild = document.getElementById("element-appendChild")
const div1 = document.createElement("div")
div1.textContent = "こんばんは"
elementAppendChild.appendChild(div1)

// 要素を追加する - 最新の方法
const elementPrepend = document.getElementById("element-prepend")
const div2 = document.createElement("div")
div2.textContent = "おはよう"
elementPrepend.prepend(div2)

// 要素を削除する - remove
const elementRemove = document.getElementById("element-remove")
elementRemove.remove()

const btns = document.getElementById("buttons")
const button0 = buttons.children[0]
console.log(btns)
console.log(button0)

const E = document.getElementById("E")
E.textContent = "かむちゃん"
const F = document.getElementById("F")
F.style.color = "red"
console.log(E)
const G = document.getElementById("G")
G.className = "zou Y"
F.classList.add("hello")
G.classList.remove("Y")

const Keronnu = document.getElementById("keronnu")
const kero = document.createElement("div")
kero.className = "nnu"
kero.textContent = "ケロンヌ"

const A = document.createElement("div")
A.textContent = "アマガエル"

const B = document.createElement("div")
B.textContent = "ガマガエル"

const C = document.createElement("div")
C.textContent = "ヒキガエル"

const D = document.createElement("div")
D.textContent = "ウシガエル"
Keronnu.appendChild(kero)
Keronnu.before(A)
Keronnu.prepend(B)
Keronnu.append(C)
Keronnu.after(D)
F.remove()

const kerokero = document.getElementById("kaeru")
kerokero.textContent = ""
