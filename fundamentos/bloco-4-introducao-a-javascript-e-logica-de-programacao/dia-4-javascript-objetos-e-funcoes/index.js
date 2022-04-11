// Exemplo 1

let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: { 
    golden: 2, 
    silver: 3
  },
  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
};

let nomeCompleto = player.name + ' ' + player.lastName;


console.log('A jogadora ' + player.name + ' ' + player.lastName + ' ' + 'tem ' + player.age + ' ' + 'anos de idade.');

console.log('********************');

console.log('A jogadora ' + nomeCompleto + ' ' + 'foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' ' + 'vezes.');