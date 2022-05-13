// // Exercicio 1

const sayHello = () => {
  return ('hello trybers');
}

const printGreeting = (callback) => {
    console.log(callback());
}

printGreeting(sayHello);


// console.log(sayHello());

const sumFixAmount = (amount) => {
  return (number) => amount + number;
}

const initialSum = sumFixAmount(15)
console.log(initialSum(5));


// Exercicio fixação

const wakeUp = (nome) => {
  return nome + ' Acordando!!';
}

const comendo = (nome) => {
  return nome + ' Bora tomar café!!';
}

const dormir = (nome) => {
  return nome + ' Partiu dormir!!';
}

const doingThings = (func) => console.log(func('Teste,'));

doingThings(wakeUp); 