// Exemplo 1

console.log(document.getElementById('elementoOndeVoceEsta'))

// Exemplo 2
document.getElementById('elementoOndeVoceEsta').parentElement.style.color = "red"

//  Exemplo 3

document.getElementById('primeiroFilhoDoFilho').innerText = "Novo Texto"

//  Exemplo 4

console.log(document.getElementById('pai').firstElementChild)

//  Exemplo 5

console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling)

// Exemplo 6

console.log(document.getElementById('elementoOndeVoceEsta').nextSibling)

//  Exemplo 7 

console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling)

// Exemplo 8

console.log(document.getElementById('pai').lastElementChild.previousElementSibling)