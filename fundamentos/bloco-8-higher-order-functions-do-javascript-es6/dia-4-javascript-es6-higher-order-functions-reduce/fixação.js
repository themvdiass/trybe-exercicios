// Example 1
// (com for)
const numbers = [32, 15, 3, 2, -5, 56, 10];
let sumNumbers = 0;
// A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!

for (let index = 0; index < numbers.length; index += 1) {
  sumNumbers += numbers[index];
}
console.log(sumNumbers); // 113

// (com reduce)
const sumNumbers2 = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers2); // 113

// Ou seja:
const getSum = (result, number) => result + number;
const sumNumbers3 = numbers.reduce(getSum);
console.log(sumNumbers3); // 113

// Example 2
// Adicionando um valor inicial para acumular
const getSom = (result, number) => {
  console.log(result); // 10 32 47 50 52 47 103
  return result + number;
  };
const sumNumbers4 = numbers.reduce(getSum, 10); // Parâmetro adicionado ao reduce: o "10"
console.log(sumNumbers4); // 123

// Example 3
// Usando reduce para achar o maior valor

const numbers2 = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers2.reduce(getBigger, 0);
console.log(bigger); // 85

// ou
const test = () => numbers2.reduce( (maior, comp) => ((maior > comp) ? maior : comp))

console.log(test())
