let elemento1 = window.document.getElementById('elemento')
elemento1.style.color = 'green'

let elemento2 = window.document.getElementById('elemento2') //essa serve para id
elemento2.style.color = 'orange'

let elemento3 = document.getElementsByClassName('mesmoNome')[0] //essa tag serve para colocar na class
elemento3.style.color = 'red'
elemento3.innerHTML = 'Drake de sp'

let elemento4 = document.getElementsByName('toninho')[0] //essa tag verde serve para colocar name em algum elemento
elemento4.style.color = 'blue'

let elemento5 = document.getElementsByTagName('li')[0] //essa tag verde serve para o elemento proprio
elemento5.style.color = 'pink'