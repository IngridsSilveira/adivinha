// variavel para gerar um número aleatório de 1 a 100
var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
// variaveis para 'pegar' o conteudo dos paragrafos
var palpites = document.querySelector('.palpites');
var ultimoResultado = document.querySelector('.ultimoResultado');
var baixoOuAlto = document.querySelector('.baixoOuAlto');
// variaveis para 'pegar' o conteudo do campo e do botão
var envioPalpite = document.querySelector('.envioPalpite');
var campoPalpite = document.querySelector('.campoPalpite');
// variaveis para reiniciar e para a contagem
var contagemPalpites = 1;
var botaoReinicio;
campoPalpite.focus();

var botao;
// função para conferir o palpite
function conferirPalpite(){    
    var palpiteUsuario = Number(campoPalpite.value);
    if(contagemPalpites === 1){
        palpites.textContent = 'Palpites anteriores: ';
    }
    palpites.textContent += palpiteUsuario + ' ';

    if(palpiteUsuario === numeroAleatorio){
        ultimoResultado.textContent = 'Parabéns! Você acertou!';
        ultimoResultado.style.backgroundColor = 'green';
            baixoOuAlto.textContent = '';
            configFimDeJogo();
    } else if (contagemPalpites === 10){
        ultimoResultado.textContent  = '!!!FIM DE JOGO!!!';
            baixoOuAlto.textContent = '';
            configFimDeJogo();
    } else{
        ultimoResultado.textContent = 'Errado!';
        ultimoResultado.style.backgroundColor = 'red';

        if(palpiteUsuario < numeroAleatorio){
            baixoOuAlto.textContent= 'Seu palpite está muito baixo!';
        } else if(palpiteUsuario > numeroAleatorio){
            baixoOuAlto.textContent = 'Seu palpite está muito alto!';
        }
    }
    contagemPalpites++;
    campoPalpite.value = '';
    campoPalpite.focus();
}
envioPalpite.addEventListener('click', conferirPalpite);

function configFimDeJogo(){
    campoPalpite.disabled = true;
    envioPalpite.disabled = true;
    botaoReinicio = document.createElement('button');
    botaoReinicio.textContent = 'Iniciar novo jogo';
    document.body.appendChild(botaoReinicio);
    botaoReinicio.addEventListener('click', reiniciarJogo);
}

function reiniciarJogo(){
    contagemPalpites = 1;
    var reiniciarParas = document.querySelectorAll('.resultadoParas p');
    for (var i = 0; i < reiniciarParas.length; i++){
        reiniciarParas[i].textContent = '';
    }
    botaoReinicio.parentNode.removeChild(botaoReinicio);
    
    campoPalpite.disabled = false;
    envioPalpite.disabled = false;
    campoPalpite.value = '';
    campoPalpite.focus();

    ultimoResultado.style.backgroundColor = 'white';

    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}
