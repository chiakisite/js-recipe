const image = document.getElementById("dog-image")
const button = document.getElementById("change-button")

const change = function() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      image.src = data.message
    })
}

window.onload = change
button.onclick = change
