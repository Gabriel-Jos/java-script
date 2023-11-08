let elemento1 = window.document.getElementById('titulo')
elemento1.style.backgroundColor = 'pink';

let elementos = document.getElementsByClassName('elementos')
for (let cont = 0; cont < elementos.length; cont++) {
   elementos[cont].style.color = 'red'
}
let elementos2 = document.getElementsByClassName('paragreifo')
for (let cont = 0; cont < elementos.length; cont++) {
   elementos2[cont].style.color = 'green'
}
