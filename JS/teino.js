// let idade = 0;

//  while (contador <=10){
//      console.log(`valor do contador: ${contador}`);
//      contador += 2                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
// }   

// let idade;

// do {
//     idade = parseInt(prompt("Por favor, insira sua idade:"));
// } while (idade <= 0 || isNaN(idade));

// console.log("Idade válida inserida: " + idade);

// for (let tabuada = 1; tabuada <= 10; tabuada++) {
//     let resultado = 7 * tabuada;
//     console.log(`7 * ${tabuada} = ${resultado}`);
// }

let contador = 0;
let primeiroNumero = 0;
let segundoNumero = 1;
let proximoNumero;

while (contador < 10) {
    if (contador <= 1) {
        proximoNumero = contador;
    } else {
        proximoNumero = primeiroNumero + segundoNumero;
        primeiroNumero = segundoNumero;
        segundoNumero = proximoNumero;
    }
    console.log(proximoNumero);
    contador++;
}



for (let i = 2; i <= 20; i++) {
    let isPrimo = true;

    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrimo = false;
            break;
        }
    }

    if (isPrimo) {
        console.log(i);
    }
}
