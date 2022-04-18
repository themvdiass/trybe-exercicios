// Exemplo 1

const eOE = document.getElementById('elementoOndeVoceEsta')

console.log(eOE)

// Exemplo 2

eOE.parentElement.style.color = "red"

//  Exemplo 3

document.getElementById('primeiroFilhoDoFilho').innerText = "Novo Texto"

//  Exemplo 4

const eP = document.getElementById('pai')

console.log(eP.firstElementChild)

//  Exemplo 5

console.log(eOE.previousElementSibling)

// Exemplo 6

console.log(eOE.nextSibling)

//  Exemplo 7 

console.log(eOE.nextElementSibling)

// Exemplo 8

console.log(eP.lastElementChild.previousElementSibling)

console.log(' ')

// Parte 2

// Exemplo 1

let div1 = document.createElement('div')
div1.id = "div1"
div1.innerText = "Novo Texto"
eP.appendChild(div1)

// Exemplo 2

let div2 = document.createElement('div') 
div2.id = "div2"
eOE.appendChild(div2)

// Exemplo 3

let div3 = document.createElement('div')
div3.id = "div3"
document.getElementById('primeiroFilhoDoFilho').appendChild(div3)

// Exemplo 4

console.log(div3.parentElement.parentElement.nextElementSibling)





