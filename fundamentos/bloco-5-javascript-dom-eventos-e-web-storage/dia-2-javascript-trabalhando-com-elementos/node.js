// Exercicio 1

const body = document.querySelector('body')

const H1 = document.createElement('h1')
H1.id = 'tagH1'
H1.innerText = "Exercício 5.2 - JavaScript DOM"
body.appendChild(H1)

// Exercicio 2

const main = document.createElement('main')
main.id = 'main'
body.appendChild(main)

// Exercicio 3

const section = document.createElement('section')
section.className = 'center-content'
body.appendChild(section)

// Exercicio 4

const parag = document.createElement('p')
parag.id = "parag1"
parag.innerText = "Este é um parágrafo vazio"
section.appendChild(parag)

// Exercicio 5

const section2 = document.createElement('section')
section2.className = "left-content"
main.appendChild(section2)

// Exercicio 6

const section3 = document.createElement('section')
section3.className = "right-content"
main.appendChild(section3)

// Exercicio 7

const img = document.createElement('img')
img.src = "https://picsum.photos/200"
img.className = "small-image"
section2.appendChild(img)

// Exercicio 8

const lista = document.createElement('ul')
section3.appendChild(lista)

function nomes (string) {
  const num = document.createElement('li')
  num.innerText = string
  return num
}

lista.appendChild(nomes('Um'))
lista.appendChild(nomes('Dois'))
lista.appendChild(nomes('Três'))
lista.appendChild(nomes('Quatro'))
lista.appendChild(nomes('Cinco'))
lista.appendChild(nomes('Seis'))
lista.appendChild(nomes('Sete'))
lista.appendChild(nomes('Oito'))
lista.appendChild(nomes('Nove'))
lista.appendChild(nomes('Dez'))

// Exercicio 9

function criarH3 (nome) {
  let h3 = document.createElement('h3')
  h3.id = nome
  return h3
}

main.appendChild(criarH3('h3-1'))
main.appendChild(criarH3('h3-2'))
main.appendChild(criarH3('h3-3'))