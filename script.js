function toogleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a imagem
  if (html.classList.contains("light")) {
  // se tiver light mode, adicionar a imagem light
img.setAttribute('src','./assets/dia.png')
  } else {
    img.setAttribute ("src","./assets/noite.png")
  }
   //se tiver sem light toogleMode, manter imagem normal
}