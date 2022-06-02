const API_URL = "https://api.coincap.io/v2/assets";

function criarLi(info) {
 info.map((moeda) => {
    const ul = document.querySelector('ul');

    const li = document.createElement('li');

    const divNome = document.createElement('div');

    divNome.innerHTML = `${moeda.name} (${moeda.symbol}): ${moeda.priceUsd}`
  
  li.appendChild(divNome)

  ul.appendChild(li)
  })
}

async function fetchCoin() {
  try {
    const response = await fetch(API_URL);

    const data = await response.json();

    const dataAtt = data.data;

    console.log(dataAtt);

    criarLi(dataAtt);

  } catch (error) {
    console.log('Vish deu erro')
  }
}

window.onload = fetchCoin;
