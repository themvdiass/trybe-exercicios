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

