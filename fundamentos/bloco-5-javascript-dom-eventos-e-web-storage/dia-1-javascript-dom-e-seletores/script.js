document.getElementsByTagName('p');
for (let index = 0; index < document.getElementsByTagName('p').length; index += 1) {
    document.getElementsByTagName('p')[index].innerText = '' 
}
document.getElementsByTagName('p')[0].innerText = 'Ganhar 10k por mês!'
document.getElementsByTagName('p')[0].style="text-align:center"
// (rgb(76,164,109)
document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76,164,109)';

