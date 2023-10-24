let ALUNOS = [
    {
        id: "AB1",
        Nome:"CALDO DE CANO",
        idade:16,
    },
    {
        id:"CD1",
        Nome:"CNPJOTO",
        idade:25,
    },
    {
        id:"EF1",
        Nome:"LUDMILO",
        idade:25,
    },
]
let idades = alunos.map((coletarIdade)=> {
    return coletarIdade.idade
})
console.log(typeof idades);
console.log(idades);

let nome = alunos.map((coletarNome)=>{
    return coletarNome.nome
})
console.log(typeof nome);
console.log(nome);