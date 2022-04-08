// Exercicio 1

// let numero = 10;
// let fatorial = 1;
// for(let index = 1; index < 10; index += 1) {
//   fatorial = fatorial * index 
// }

// console.log(fatorial);

// Exercicio 2

let word = 'tryber';
let wordContrario = '';

for(let index = 0; index < word.length; index += 1) {
  wordContrario += word[word.length - 1 - index]
};

console.log(wordContrario);