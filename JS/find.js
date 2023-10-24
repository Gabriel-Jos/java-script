let alunos = [
    {
        id: "AB1",
        nome: "CALDO DE CANO",
        idade:16,
    },
    {
        id: "CD1",
        nome: "CNPJOTO",
        idade:25,
    },
    {
        id:"EF1",
        nome: "LUDMILO",
        idade:25,
    },
]
let idades = alunos.map((coletarIdade)=>{
    return coletarIdade.idade
})
console.log(idades);
//filtro de acordo com os valores que eu estipular.

let idadesMaiores = idades.filter((idadeAluno) =>{
    return idadeAluno >= 18
})
console.log(idadesMaiores);