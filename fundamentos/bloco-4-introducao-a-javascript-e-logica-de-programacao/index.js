// Exercicio 1

// let numero = 10;
// let fatorial = 1;
// for(let index = 1; index < 10; index += 1) {
//   fatorial = fatorial * index 
// }

// console.log(fatorial);

// Exercicio 2

// let word = 'tryber';
// let wordContrario = '';

// for(let index = 0; index < word.length; index += 1) {
//   wordContrario += word[word.length - 1 - index]
// };

// console.log(wordContrario);

// Exercicio 3

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];
let menorPalavra = array[0];

for(let index = 0; index < array.length; index += 1) {
  if(array[index].length > maiorPalavra.length) {
    maiorPalavra = array[index]
  }
  if(array[index].length < menorPalavra.length) {
    menorPalavra = array[index]
  }
}

console.log(maiorPalavra);

console.log(menorPalavra);

