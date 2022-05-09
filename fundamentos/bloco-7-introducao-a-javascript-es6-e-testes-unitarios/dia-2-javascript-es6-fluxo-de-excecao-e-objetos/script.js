// Teste de Arrow Function

const sum = (value1, value2) => value1 + value2;
console.log(sum(2, 3));


// Teste de Arrow Function (com valores de tipos diferentes)

const sum2 = (value1, value2) => value1 + value2;
console.log(sum2(2, "3"));

// Teste de Condicional

const sum3 = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    return 'Os valores devem ser numéricos';
  }
  return value1 + value2;
};

console.log(sum3(2, '3'));

// Teste de Condicional com Throw

const sum4 = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos');
  }
  return value1 + value2;
};

console.log(sum4(2, '3'));

// Teste de Condicional com uso de catch

const verifyIsNumber = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos');
  }
};

const sum5 = (value1, value2) => {
  try {
    verifyIsNumber(value1, value2);
    return value1 + value2;
  } catch (error) {
    throw error.message;
  }
};

console.log(sum5(2, '3'));