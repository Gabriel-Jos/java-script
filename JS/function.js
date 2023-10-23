let nota1 = 8;
let nota2 = 6;
let media = (nota1 + nota2)/2;
console.log(`A media do aluno é: ${media}`);
function mediaAluno(n1 = 0, n2 =0) {
    return (n1 + n2) / 2 
}
console.log(`A media do aluno é: ${mediaAluno(5)}`);
const alunoMedia = (nt1,  nt2) => {
    return (nt1 + nt2) / 2
}
console.log(`a media do aluno é: ${alunoMedia(10,5)}`);