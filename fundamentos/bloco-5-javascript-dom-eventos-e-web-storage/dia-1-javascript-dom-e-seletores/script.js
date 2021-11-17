document.getElementsByTagName('p');
for (let index = 0; index < document.getElementsByTagName('p').length; index += 1) {
    console.log(document.getElementsByTagName('p')[index].innerText) 
}

function mudaTexto (string){
    for (let index = 0; index < document.getElementsByTagName('p').length; index += 1) {
    document.getElementsByTagName('p')[index].innerText = '' 
}
document.getElementsByTagName('p')[0].innerText = string;
document.getElementsByTagName('p')[0].style="text-align:center";
}

function mudaCor (cor){
    document.getElementsByClassName('main-content')[0].style.backgroundColor = cor;
}

function mudaCorMeio (cor){
    document.getElementsByTagName('section')[0].style.backgroundColor = cor;
}

function corrijaOTexto (textoCorreto){
    document.getElementsByClassName('title')[0].innerText = textoCorreto;
}

function textoMaiusculo (){
    document.getElementsByTagName('p')[0].innerText = document.getElementsByTagName('p')[0].innerText.toUpperCase();
}

function exibirTodosParagrafos (){
    document.getElementsByTagName('p');
    for (let index = 0; index < document.getElementsByTagName('p').length; index += 1) {
    console.log(document.getElementsByTagName('p')[index].innerText) 
}
}
