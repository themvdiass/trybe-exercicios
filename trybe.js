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

const peca = "Bispo";
if(peca.toLowerCase() == "peão") {
  console.log("Uma casa pra frente")
} else if (peca.toLowerCase() == "torre") {
  console.log("Vertical e horizontal")
} else if (peca.toLowerCase() == "bispo") {
  console.log("Diagonal") 
} else if (peca.toLowerCase() == "cavalo") {
    console.log("Em L")
} else if (peca.toLowerCase() == "rei") {
  console.log("Uma casa para cada direção")
} else if (peca.toLowerCase() == "rainha") {
  console.log("Em qual quer direção")
} else { 
  console.log("Peça Inválida")
}

const nota = 102;
if(nota >= 90 && nota <= 100) {
  console.log("A")
} else if (nota >= 80 && nota < 90) {
  console.log("B")
} else if (nota >= 70 && nota < 80) {
  console.log("C")
} else if (nota >= 60 && nota < 70) {
  console.log("D")
} else if (nota >= 50 && nota < 60) {
  console.log("E")
} else if (nota < 50 && nota > 0) {
  console.log("F")
} else {
  console.log("ERROR")
}

const numeroUm = 3;
const numeroDois = 5;
const numeroTres = 44;
if(numeroUm % 2 == 0 || numeroDois % 2 == 0 || numeroTres
 % 2 == 0) {
  console.log(true)
} else {
  console.log(false)
}

const numeralUm = 6;
const numeralDois = 5;
const numeralTres = 44;
if(numeralUm % 2 > 0 || numeralDois % 2 > 0 || numeralTres
 % 2 > 0) {
  console.log(true)
} else {
  console.log(false)
}

const custo = 50;
const venda = 100;
let quantidade = 9;
let valorCusto = custo * quantidade;
const porCento = valorCusto * 0.20;
let lucroBruto = venda * quantidade;
let valorCustoTotal =  valorCusto + porCento;
let lucroLiquido = lucroBruto - valorCustoTotal;
if(quantidade > 0) {
  console.log(lucroLiquido)
} else {
  console.log("Erro! Quantidade insuficiente")
}

