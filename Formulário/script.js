const form = document.getElementById('form-campos');
const campoA = document.getElementById('campo-a');
const campoB = document.getElementById('campo-b');
const mensagem = document.getElementById('mensagem');


form.addEventListener('submit', function(submeter){
    submeter.preventDefault();

    const mensagemSucesso = "Certo! O número B é maior do que o número A";
    const mensagemErro =  "O número do campo B precisa ser maior que o campo A.";
    const mensagemIgual = " Os números são iguais!";

    if(campoA.value < campoB.value) {
        const containerMensagemSucesso = document.querySelector('.mensagem');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.border = '5px solid green';

    } else if(campoA.value === campoB.value){
        const containerMensagemIgual = document.querySelector('.mensagem');
        containerMensagemIgual.innerHTML = mensagemIgual;
        containerMensagemIgual.style.border = '5px solid orange';
    }
    else{
        const containerMensagemErro = document.querySelector('.mensagem');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.border = '5px solid red';
    }})