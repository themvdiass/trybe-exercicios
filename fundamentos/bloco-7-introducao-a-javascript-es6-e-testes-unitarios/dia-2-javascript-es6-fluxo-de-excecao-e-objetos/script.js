// Teste de Arrow Function

const sum = (value1, value2) => value1 + value2;
console.log(sum(2, 5));


// Teste de Arrow Function (com valores de tipos diferentes)

const sum2 = (value1, value2) => value1 + value2;
console.log(sum2(2, "5"));

// Teste de Condicional

const sum3 = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    return 'Os valores devem ser numéricos';
  }
  return value1 + value2;
};

console.log(sum3(2, '3'));