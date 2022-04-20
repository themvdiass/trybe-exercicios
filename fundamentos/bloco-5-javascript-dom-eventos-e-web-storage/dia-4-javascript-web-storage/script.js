const body = document.getElementById('body')
const bot = document.getElementById('caixaBot')
const txt = document.getElementById('section')

const colorWhite = document.createElement('button')
colorWhite.className = 'sumir'
bot.appendChild(colorWhite)

function branco () {
  if (body.style.backgroundColor != 'Buuu') {
    body.className = 'colorWhite'
    colorWhite.className = 'sumir'
    darkMode.className = 'botStyle darkMode'
    tT.className = "textos"
    tM.className = "textos"
  }
  if (txt.className != 'texto') {
    txt.className = 'texto'
  }
}

colorWhite.addEventListener('click' , branco)



const darkMode = document.createElement('button')
darkMode.className = 'botStyle darkMode'
bot.appendChild(darkMode)

function dark () {
  if (body.style.backgroundColor != 'Buuu') {
    body.className = 'darkMode'
    darkMode.className = 'sumir'
    colorWhite.className = 'botStyle colorWhite'
    tT.className = 'textoB'
    tM.className = 'textoB'
  }
  if (txt.className != 'textoB') {
    txt.className = 'textoB'
  }
}

darkMode.addEventListener('click' , dark)

const tT = document.createElement('p')
tT.id = 'tamanho';
tT.innerText = "A"
let tam = 20;
let pix = 'px';
txt.style.fontSize = tam + pix
bot.appendChild(tT)

function aumentaLetra () {
  tam += 5;
  txt.style.fontSize = tam + pix
}

tT.addEventListener('click' , aumentaLetra)

const tM = document.createElement('p')
tM.id = 'tamanhoM';
tM.innerText = "a"
txt.style.fontSize = tam + pix
bot.appendChild(tM)

function diminuiLetra () {
  tam -= 5;
  txt.style.fontSize = tam + pix
}

tM.addEventListener('click' , diminuiLetra)



