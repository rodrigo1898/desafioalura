
function criptografar(texto) {
    let cripto = texto.toLowerCase(); 
    cripto = cripto.replace(/e/g, 'enter');
    cripto = cripto.replace(/i/g, 'imes');
    cripto = cripto.replace(/a/g, 'ai');
    cripto = cripto.replace(/o/g, 'ober');
    cripto = cripto.replace(/u/g, 'ufat');
    return cripto;
}

function descriptografar(cripto) {
    let texto = cripto.toLowerCase(); // trazer letras maiusculas 
    texto = texto.replace(/enter/g, 'e');
    texto = texto.replace(/imes/g, 'i');
    texto = texto.replace(/ai/g, 'a');
    texto = texto.replace(/ober/g, 'o');
    texto = texto.replace(/ufat/g, 'u');
    return texto;
}
//copiar texto
function copiarTexto() {
    let textoResultado = document.getElementById('textoResultado');
    textoResultado.select();
    document.execCommand('copy');
    alert('Texto copiado para a área de transferência!');
}

//ao clicar no botão iniciar
function processarTexto() {
    let textoEntrada = document.getElementById('inputTexto').value;
    let opcao = document.querySelector('input[name="opcao"]:checked').value; //observar qual botao esta selecionado

    if (opcao === 'criptografar') {
        let textoCriptografado = criptografar(textoEntrada);
        document.getElementById('textoResultado').value = textoCriptografado;
    } else if (opcao === 'descriptografar') {
        let textoDescriptografado = descriptografar(textoEntrada);
        document.getElementById('textoResultado').value = textoDescriptografado;
    }
}
