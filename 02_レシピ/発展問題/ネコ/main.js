const image = document.getElementById("cat-image")

fetch("https://api.thecatapi.com/v1/images/search")
  .then((res) => {
    return res.json() // 結果を json として読み込んで、次の then に渡す
  })
  .then((data) => {
    console.log(data)
    image.src = data[0].url // 画像を表示する
  })
