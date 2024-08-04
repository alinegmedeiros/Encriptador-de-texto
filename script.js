let textoCriptografado;
let textoDescriptografado;

document.getElementById('conteudo__apresentacao__output__resultado').style.visibility = "hidden";
document.getElementById('conteudo__apresentacao__output__vazio').style.visibility = "visible";

function criptografarTexto() {
    let textoInicial = document.querySelector('textarea').value;
    textoCriptografado = textoInicial.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat'); // para substituir a letra 'a' por 'b'.
    return textoCriptografado;
}

function descriptografarTexto() {
    let textoInicial = document.querySelector('textarea').value;
    textoDescriptografado = textoInicial.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    return textoDescriptografado;
}

function limparCampo() {
    campo = document.querySelector('textarea');
    campo.value = '';
}

function exibirTextoNaTela(classe, texto) {
    let campo = document.querySelector("." + classe); // Seleciona elemento por classe
    campo.innerHTML = texto;
}

function exibirMensagemCriptografada() {
    exibirTextoNaTela('conteudo__apresentacao__output__resultado__texto', textoCriptografado);
    limparCampo();
    document.getElementById('conteudo__apresentacao__output__vazio').style.visibility = "hidden";
    document.getElementById('conteudo__apresentacao__output__resultado').style.visibility = "visible";
}

function exibirMensagemDescriptografada() {
    exibirTextoNaTela('conteudo__apresentacao__output__resultado__texto', textoDescriptografado);
    limparCampo();
    document.getElementById('conteudo__apresentacao__output__vazio').style.visibility = "hidden";
    document.getElementById('conteudo__apresentacao__output__resultado').style.visibility = "visible";
}

function copiarTexto() {
    let textoDoResultado = document.getElementById('textoFinal');
    let range = document.createRange();
    range.selectNodeContents(textoDoResultado);
    let selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    try {
        document.execCommand('copy');
        console.log('Texto copiado para a área de transferência');
    } catch (err) {
        console.log('Erro ao copiar texto: ', err);
    }
}

// Adiciona os eventos de clique aos botões
document.getElementById('botaoCriptografar').addEventListener('click', function() {
    criptografarTexto();
    exibirMensagemCriptografada();
});

document.getElementById('botaoDescriptografar').addEventListener('click', function() {
    descriptografarTexto();
    exibirMensagemDescriptografada();
});

document.getElementById('botaoCopiar').addEventListener('click', function() {
    copiarTexto();
});