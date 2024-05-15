
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

const selecionarSlide = (indiceSlide) => {
    slides.forEach( slide => banner.classList.remove(slide) )
    slideAtual = indiceSlide
    banner.classList.add(slides[indiceSlide])
}

let listaCases = [
    {
        img: "https://unsplash.it/600/400?image=5",
        descricao: "Uma empresa de tecnologia lança um desafio de gamificação onde os funcionários devem propor e implementar ideias iovadoras."
    },
    {
        img: "https://unsplash.it/600/400?image=10",
        descricao: "Uma empresa de consultoria cria uma narrativa interativa de gamificação para seu programa de treinamento."
    },
    {
        img: "https://unsplash.it/600/400?image=15",
        descricao: "Uma empresa de vendas implementa uma competição gamificada entre equipes que competem pelo topo do ranking."
    },
    {
        img: "https://unsplash.it/600/400?image=20",
        descricao: "Uma empresa de saúde promove o bem-estar dos funcionparios através de um desafio de gamificação de condicionamento físico."
    }

]

const renderizarCases = () => {
    let elementoLista = document.getElementById("lista-cards")
    
    // Template Strings
    let template = ""

    listaCases.forEach( cardCase => {
        template += ` <div class="card">

            <img src="${cardCase.img}" alt="">
            <p>${cardCase.descricao}</p>
            <button>Ver mais</button>

            </div>`
    })

    elementoLista.innerHTML = template 
}