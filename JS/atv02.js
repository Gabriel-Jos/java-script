function calcularMedia() {
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);

    if (!isNaN(nota1) && !isNaN(nota2)) {
        var media = (nota1 + nota2) / 2;
        document.getElementById('resultado').innerText = 'A média é: ' + media.toFixed(2);
    } else {
        document.getElementById('resultado').innerText = 'Por favor, insira valores numéricos válidos.';
    }
}

function calculoMedia(){
    let nota1 = Number(document.querySelector('#nota1'))
    let nota2 = Number(document.querySelector('#nota2'))

}