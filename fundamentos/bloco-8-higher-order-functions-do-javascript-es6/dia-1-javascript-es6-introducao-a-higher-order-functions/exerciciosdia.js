// Exercicio 1: Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").


//FUNÇÃO QUE GERA UM NÚMERO ALEATÓRIO
const gerar = (max) => {
  let number = Math.random() * max + 1;
  return parseInt(number, 10)
};

//FUNÇÃO QUE VERIFICA SE GANHOU OU NÃO

const result = (num, func) => {
  if (num === func) {
    console.log(func);
    return 'Parabéns você ganhou'
  } else {
    console.log(func);
    return 'Tente novamente'
  };
};

console.log(result(2, gerar(5)));