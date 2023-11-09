//api ponte de comunicação em banco de dados request enviar o dado e response para a resposta.
// let cep = document.querySelector('#cep')

 const buscarCep = async () => {
     const cep = document.querySelector('#cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`
    const valorViacep = await fetch(url)
     const valorObjeto = await valorViacep.json()
 }
     passandoValorDOM = (valorObjeto) => {
        let bairro = document.querySelector('#bairro')
        let endereco = document.querySelector('#endereco')
        bairro.value = valorObjeto.bairro;
        endereco.value = valorObjeto.endereco;
     }  
     
 
     
    


document.querySelector('#cep').addEventListener('focusout', buscarCep)

