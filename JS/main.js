 let elemento1 = window.document.getElementById('titulo')
 elemento1.style.color = 'green';

 let elementos = document.getElementsByClassName('elementos')[1]
 elementos.style.color = 'blue';
let elementos = document.getElementsByClassName('elementos')
for (let cont = 0; cont < elementos.length; cont++) {
    elementos[cont].style.color = 'green'
}
