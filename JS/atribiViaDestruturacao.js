const pessoa ={
    nome:"ludmilo",
    sobreNome:"souza",
    idade:18,
}
let{
    nome,
    sobreNome,
    idade,
} = pessoa

console.log(typeof pessoa);
console.log(nome);
console.log(sobreNome);
console.log(idade);

const carro1 = {
    fabricante:"woksvagen",
    modelo:"nivus",
    Ano:"2024",
    cor:"Cinza Moonstone",
    Placa:"bmn-3181",
    motor:{
        flex:true,
        gasolina:false,
        álcool:false,
    },
    
};

let{
    fabricante,
    modelo,
    Ano,
    cor,
    Placa,
    motor,
} = carro1
console.log(typeof carro1);
console.log(fabricante);
console.log(modelo);
console.log(Ano);
console.log(cor);
console.log(Placa);
console.log(motor);