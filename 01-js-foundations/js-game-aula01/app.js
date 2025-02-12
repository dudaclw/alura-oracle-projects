let listaNumSorteados = [];
let numMAX = 100 ;
let numSecreto = gerarRandomNum();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if(chute == numSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let msgTentativas = `Você descobriu com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', msgTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute > numSecreto){
            exibirTextoNaTela('h1', 'Hmm...');
            exibirTextoNaTela('p', 'O número é menor!');
        } else {
            exibirTextoNaTela('h1', 'Hmm...');
            exibirTextoNaTela('p', 'O número é maior!');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarRandomNum() {
    let numEscolhido = parseInt(Math.random() * numMAX + 1);
    let qtdElementosEscolhidos = listaNumSorteados.length;

    if (qtdElementosEscolhidos == numMAX) {
        listaNumSorteados = [];
    }
    if (listaNumSorteados.includes(numEscolhido)) {
        return gerarRandomNum();
    } else {
        listaNumSorteados.push(numEscolhido);
        console.log(listaNumSorteados)
        return numEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numSecreto = gerarRandomNum();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}
