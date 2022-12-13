const form = document.getElementById('submit-form')

const valorA = document.getElementById('number1');
const valorB = document.getElementById('number2');
const mensagemSucesso = `Parabéns, no valor digitado em A é menor que B, sendo A: <b>${valorA.value}</b> e B: <b>${valorB.value}</b>`;
const mensagemErro = `Tente novamente. O valor de A maior que B! Sendo A: <b>${valorA.value}</b> e B: <b>${valorB.value}</b>`;
let formValido = false;

function validaform(n1, n2){
    if(valorA.valueAsNumber<valorB.valueAsNumber){
    validacao=true;        
    }else{
        validacao=false;
    }
    return validacao;    
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    formValido=validaform(valorA,valorB)

    if (formValido){
        const conatainerMensagemSucesso = document.querySelector('.success-message');
        conatainerMensagemSucesso.innerHTML = mensagemSucesso;
        conatainerMensagemSucesso.style.display = 'block';
        valorA.value='';
        valorB.value='';


    }else{
        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
        valorA.value='';
        valorB.value='';
    }
})

console.log(form)



