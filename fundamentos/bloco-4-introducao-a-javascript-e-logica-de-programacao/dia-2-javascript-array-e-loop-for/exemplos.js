// Exercicio 1 [Array]

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

// Exercicio 2 [Array]

let menuDois = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio =  menuDois.indexOf('Portfólio');
console.log(indexOfPortfolio);


// Exercicio 3 [Array]

let menuTres = ['Home', 'Serviços', 'Portfólio', 'Links'];
menuTres.push('Contato')
console.log(menuTres);

// Exercicio 1 [For]

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for(let index = 0; index < groceryList.lengh; index++) {
  console.log(groceryList[index])
}

// Exercicio 1 [For/of]

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for(let name of names) {
  console.log(name)
}