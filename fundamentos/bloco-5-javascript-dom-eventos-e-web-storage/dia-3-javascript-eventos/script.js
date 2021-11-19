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
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  function diasDoCalendario (dezDaysList){
      let ul = document.getElementById('days');
      for (let index = 0; index < dezDaysList.length; index += 1){
          let dias = dezDaysList[index];
          let diasLista = document.createElement('li');
          if (dias == 24 || dias == 31){
            diasLista.className = 'day holiday';
            diasLista.innerText = dias;
            ul.appendChild(diasLista);
          }
          else if (dias == 4 || dias == 11 || dias == 18){
            diasLista.className = 'day friday';
            diasLista.innerText = dias;
            ul.appendChild(diasLista);
          }
          else if (dias == 25){
            diasLista.className = 'day holiday friday';
            diasLista.innerText = dias;
            ul.appendChild(diasLista);
          } else {
            diasLista.className = 'day';
            diasLista.innerText = dias;
            ul.appendChild(diasLista);
          }
          
      }  
}
diasDoCalendario (dezDaysList);
// Questão 2
function botao (string) {
    let tagBotao = document.createElement('button');
    tagBotao.id = 'btn-holiday';
    let pai = document.getElementsByClassName('buttons-container')[0];
    pai.appendChild(tagBotao);
    tagBotao.innerText = string;
}
botao ('Feriados');


