function jogar(escolhapessoa) {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const escolhacomputador = opcoes[Math.floor(Math.random() * 3)];

    const imagemcomputador = document.createElement('img');
    imagemcomputador.src = `img/${escolhacomputador}_pc.PNG`;
    document.getElementById('computadorEscolha').innerHTML = '';
    document.getElementById('computadorEscolha').appendChild(imagemcomputador);

    let resultado = '';
    if (escolhapessoa === escolhacomputador) {
        resultado = 'Empate!';

    } else if (
        (escolhapessoa === 'pedra' && escolhacomputador === 'tesoura') ||
        (escolhapessoa === 'papel' && escolhacomputador === 'pedra') ||
        (escolhapessoa === 'tesoura' && escolhacomputador === 'papel')
    ) {
        resultado = 'Você venceu!';
        
    } else {
        resultado = 'Você perdeu!';
    }

    document.getElementById('resultado').innerText = `Computador escolheu ${escolhacomputador}. ${resultado}`;
    
}
