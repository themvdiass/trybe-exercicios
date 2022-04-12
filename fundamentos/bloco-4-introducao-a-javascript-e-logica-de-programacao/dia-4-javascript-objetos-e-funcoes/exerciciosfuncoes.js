// Exercicio 1
// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

// let palavra = 'arara';

// function palindromo (palavra) {
  // for (index in palavra) {
//    if (palavra[index] != palavra[(palavra.length - 1) - index]) {
//     return false;
//     }
//   }
//   return true;
// }
// console.log(palindromo('arara'))

//Exercicio 2
//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function maiorIndice (array) {
  let maiorNumero = 0;
  for (index in array) {
    if (array[maiorNumero] < array[index]) {
      maiorNumero = index 
    } 
  }
  return maiorNumero
}

console.log(maiorIndice([2, 3, 6, 7, 10, 1]))