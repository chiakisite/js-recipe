const figure = document.getElementById("figure")
document.addEventListener("keypress", keypress_ivent)

function keypress_ivent(e) {
  if (e.code === "Enter") {
    figure.classList.toggle("rounded")
  }
}
