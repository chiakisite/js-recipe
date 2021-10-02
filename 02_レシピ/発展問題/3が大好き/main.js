const click = document.getElementById("click")

const genki = function() {
  const inputNumber = document.getElementById("input-number").value
  for (let i = 1; i <= inputNumber; i++) {
    let henkan = String(i)
    let hantei = henkan.indexOf("3")
    if (i % 3 === 0 || hantei !== -1) {
      console.log(`${i}!!!!!!!`)
    } else {
      console.log(i)
    }
  }
}

click.onclick = function() {
  genki()
}
