function calcularIMC(peso, altura) 
    
    let imc = peso / (altura * altura);


    if (imc < 18.5) {
        return "Muito abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        return "Abaixo do peso";
    } else if (imc >= 25 && imc < 30) {
        return "peso normal";
    } else if (imc >= 25 && imc < 35){
        return "acima do peso"
    } else if (imc >= 25 && imc < 35){
        return "acima do peso"
}
    


let peso = 70; 
let altura = 1.75; 

let resultado = calcularIMC(peso, altura);
console.log("Seu IMC é: " + resultado);
