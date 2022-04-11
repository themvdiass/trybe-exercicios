// Exercicio 1

let palavra = 'arara';

function palindromo (palavra) {
  for (index in palavra) {
   if (palavra[index] != palavra[(palavra.length - 1) - index]) {
    return false;
    }
  }
  return true;
}
console.log(palindromo('arara'))