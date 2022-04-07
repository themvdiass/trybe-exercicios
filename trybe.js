const a = 8;
const b = 4;

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

const primeiroNumero = 90;
const segundoNumero = 150;
if(primeiroNumero > segundoNumero){
  console.log(primeiroNumero)
} else if (primeiroNumero < segundoNumero){
  console.log(segundoNumero)
} else {
  console.log("São Iguais")
}

const numUm = 35;
const numDois = 25;
const numTres = 35;
if(numUm > numDois && numUm > numTres){
  console.log(numUm)
} else if (numDois > numUm && numDois > numTres){
  console.log(numDois)
} else if (numTres > numUm && numTres > numDois) {
  console.log(numTres)
} else if (numUm == numDois & numUm > numTres) {
  console.log(numUm + " " + "(Números 1 e 2 possuem o mesmo valor)")
} else if (numUm == numTres & numUm > numDois) {
  console.log(numUm + " " + "(Números 1 e 3 possuem o mesmo valor)")
} else if (numDois == numTres & numDois > numUm) {
  console.log(numDois + " " + "(Números 2 e 3 possuem o mesmo valor)")
} else {console.log("São iguais")
}

const numero = 0;
if(numero > 0) {
  console.log("positive")
} else if (numero < 0) {
  console.log("negative")
} else {
  console.log("zero")
}

const angUm = -80;
const angDois = 40;
const angTres = 60;
const triangulo = 180;

if(angUm + angDois + angTres == triangulo) {
  console.log(true)
} else if (angUm < 0 || angDois < 0 || angTres < 0) {
  console.log("Erro! Ângulo inválido")
} else {
  console.log(false)
}

const peca = "torre";
if(peca == "peão") {
  console.log("Uma casa pra frente")
} else if (peca == "torre") {
  console.log("Vertical e horizontal")
} else if (peca == "bispo") {
  console.log("Diagonal") 
} else if (peca == "cavalo") {
    console.log("Em L")
} else if (peca == "rei") {
  console.log("Uma casa para cada direção")
} else if (peca == "rainha") {
  console.log("Em qual quer direção")
} else { 
  console.log("Peça Inválida")
}

