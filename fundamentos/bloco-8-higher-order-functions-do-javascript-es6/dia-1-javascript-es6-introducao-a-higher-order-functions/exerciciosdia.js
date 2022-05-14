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

// Exrcicio 2: Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
    // Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const contagem = (par1, par2) => {
  let pontos = 0;
  for (let index = 0; index <= 10; index += 1) {
    if (par1[index] === par2[index]) {
      pontos += 1
    } else {
      pontos -= 0.5
    }
  }
  return pontos
}


const match = (gabarito, respostas, check) => {
  let acertos = 0;
  for (let i = 0; i <= 10; i += 1) {
    if (gabarito[i] === respostas[i]) {
      acertos += 1
    }
  }
  let cont = {
    Acertos: acertos,
    Pontuação: check(gabarito, respostas),
  }
  return cont;
};

console.log(match(RIGHT_ANSWERS, STUDENT_ANSWERS, contagem))
