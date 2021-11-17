document.getElementsByTagName('p');
for (let index = 0; index < document.getElementsByTagName('p').length; index += 1) {
    document.getElementsByTagName('p')[index].innerText = '' 
}
document.getElementsByTagName('p')[0].innerText = 'Ganhar 10k por mês!'
document.getElementsByTagName('p')[0].style="text-align:center"
// (rgb(76,164,109)
document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76,164,109)';
document.getElementsByTagName('section')[0].style.backgroundColor = 'white';
document.getElementsByClassName('title')[0].innerText = 'Exercício 5.1 - JavaScript!';
document.getElementsByTagName('p')[0].innerText = document.getElementsByTagName('p')[0].innerText.toUpperCase();
document.getElementsByTagName('p');
for (let index = 0; index < document.getElementsByTagName('p').length; index += 1) {
    console.log(document.getElementsByTagName('p')[index].innerText) 
}