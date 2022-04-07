// Exercicio 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(numbers);

// Exercicio 2

console.log(numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + numbers[7]+ numbers[8] + numbers[9]);

// Exercicio 3

let contagem = numbers.length;
console.log((numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + numbers[7]+ numbers[8] + numbers[9]) / contagem);

// Exercicio 4

let total = [];
total.push((numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + numbers[7]+ numbers[8] + numbers[9]) / contagem);
if(total > 20) {
  console.log("Valor maior que 20")
} else {
  console.log("Valor menor que 20")
};




