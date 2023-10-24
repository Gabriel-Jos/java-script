let sala = ["kaka" ,"jeje" ,"bibi" ,"didi","sara","torinha" ]
// for (let contador = 0; contador < sala.length; contador++) {
//     console.log(`olá ${sala[contador]} ! o ios te deseja boas vindas!`);
// }

sala.forEach((nome,num,sala) =>{
    console.log(`olá ${nome} ! o ios te deseja boas festa e feliz natal!`);
    console.log(`olá ${nome} ! voce é o numero : ${num} de convidado`);
    console.log(`seus colegas são: ${sala}!`);
})