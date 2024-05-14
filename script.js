
// let menu = document.querySelector("#menu")

let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconesX = document.querySelector("#icones-x")

function abrirFecharMenu() {
    
    // Se o menu está fechado
    if (menu.classList.contains("menu-fechado")) {
        // Abrir o menu
        menu.classList.remove("menu-fechado")

        // Mostrar icone X
        iconesX.style.display = "unset"

        // Esconder icone Barras
        iconeBarras.style.display = "none"
    } else{
        // Fechar o menu
        menu.classList.add("menu-fechado")

         // Esconder icone X
         iconesX.style.display = "none"

         // Mostrar icone Barras
         iconeBarras.style.display = "unset"
    }

}

window.onresize = () => {
    menu.classList.remove("menu-fechado")
    iconesX.style.display = "inline"
    iconeBarras.style.display = "none"
}

// Função Carrossel

let slides = [
    'primeiro-banner',
    'segundo-banner',
    'terceiro-banner'
]

let slideAtual = 0

let numSlides = slides.length

let banner = document.querySelector(".banner")

banner.classList.add(slides[slideAtual])

const mostrarProximoSlide = () => {
    // Remove slide anterior
    banner.classList.remove(slides[slideAtual])

   if (slideAtual < (numSlides - 1)) {
    slideAtual++
   }else{
    slideAtual = 0
   }


    // Renderiza o slideAtual
    banner.classList.add(slides[slideAtual])
}

const mostrarSlideAnterior = () => {

    banner.classList.remove(slides[slideAtual])

    if (slideAtual > 0 ) {
        slideAtual--
       }else{
        slideAtual = numSlides - 1
       }

    banner.classList.add(slides[slideAtual])
}


