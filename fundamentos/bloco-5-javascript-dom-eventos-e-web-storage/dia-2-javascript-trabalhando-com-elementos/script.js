// Exercício 1
let h1 = document.createElement('h1');
h1.innerText = 'Exercício 5.2 - JavaScript';
document.body.appendChild(h1);

// Exercício 2
let main = document.createElement('main');
main.className = 'main-content';
document.body.appendChild(main);

//Exercício 3
let section = document.createElement('section');
section.className = 'center-content';
main.appendChild(section);

//Exercício 4
let p = document.createElement('p');
p.innerText = 'Algum texto'
section.appendChild(p);

//Exercício 5
let section2 = document.createElement('section');
section2.className = 'left-content';
main.appendChild(section2);

//Exercício 6
let section3 = document.createElement('section');
section3.className = 'right-content';
main.appendChild(section3);

//Exercício 7
let img = document.createElement('img');
img.src = "https://picsum.photos/200";
img.className = 'small-image';
section2.appendChild(img);

//Exercício 8




