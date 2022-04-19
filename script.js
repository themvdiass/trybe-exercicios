function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek() 

function createDaysOfTheMonth () {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  document.getElementById('days')
  
  for (let index = 0; index < dezDaysList.length; index += 1) {
  let dia = dezDaysList[index];
  let criar = document.createElement('li');
  criar.className = 'day'

  if (dia == 24 || dia == 31) {
    criar.className += ' ' + 'holiday'
  } else if (dia == 4 || dia == 11 || dia == 18) {
    criar.className += ' ' + 'friday'
  } else if (dia == 25) {
    criar.className += ' ' + 'holiday' + ' ' + 'friday'
  } else (criar.className = 'day') 

  criar.innerText = dia;
  days.appendChild(criar)
  }
}

createDaysOfTheMonth();

function feriados (feriados) {
  let div1 = document.querySelector('.buttons-container')

  const bot = document.createElement('button')
  bot.id = "btn-holiday" 
  bot.innerText = feriados
  div1.appendChild(bot) 
}

feriados('Feriados')



