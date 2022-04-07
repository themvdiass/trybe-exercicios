// Exercicio 1

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for(let index = 0; index < numbers.length; index += 1) {
//   console.log(numbers[index]);
// }

// Exercicio 2

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let resultado = 0;

// for(index = 0; index < numbers.length; index += 1) {
//   resultado += numbers[index]
// }

// console.log(resultado);

// Exercicio 3

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let contagem = numbers.length;
// let resultado = 0;

// for(let index = 0; index < numbers.length; index += 1) {
//   resultado += numbers[index] / contagem
// };

// console.log(resultado)

// Exercicio 4

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let contagem = numbers.length;
// let resultado = 0;

// for(let index = 0; index < numbers.length; index += 1) {
//   resultado += numbers[index] / contagem
// };

// if(resultado > 20) {
//   console.log("É maior que 20")
// } else { 
//   console.log("É menor que 20")
// }

//Exercicio 5

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let numeroMaior = numbers[0];
// for(let index = 1; index < numbers.length; index += 1) {
//   if(numbers[index] > numeroMaior) {
//     numeroMaior = numbers[index]
//   }
// }

// console.log(numeroMaior);

// Exercicio 6

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numerosImpares = 0;

for(let index = 0; index < numbers.length; index += 1) {
  if(numbers[index] % 2 !== 0) {
    numerosImpares += 1;
  }
};

if(numerosImpares !== 0) {
  console.log(numerosImpares)
} else {
  console.log("Nenhum valor ímpar encontrado")
};




