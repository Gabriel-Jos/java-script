 let elemento1 = window.document.getElementById('titulo')
 elemento1.style.color = 'pink';

let elementos = document.getElementsByClassName('elementos')
for (let cont = 0; cont < elementos.length; cont++) {
    elementos[cont].style.color = 'green'
}