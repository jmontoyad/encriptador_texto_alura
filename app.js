const textoEntradaUsuario = document.getElementById('textoEntradaUsuario')
const botonEncriptar = document.getElementById('botonEncriptar')
const botonDesencriptar = document.getElementById('botonDesencriptar')
const botonCopiar = document.getElementById('botonCopiar')
const resultadoFinal = document.getElementById('resultadoFinal')
const muneco = document.getElementById('muneco')
const infoDerecha = document.getElementById('infoDerecha')
const right = document.getElementById('right')

let reemplazar = [
    ["e","enter"],
    ["o","ober"],
    ["i","imes"],
    ["a","ai"],
    ["u","ufat"],
]

const remplace = (nuevoValor) => {
    resultadoFinal.innerHTML = nuevoValor
    muneco.style.display = 'none'
    textoEntradaUsuario.value = ""
    infoDerecha.style.display = 'none'
    botonCopiar.style.display = 'block'
    right.classList.add('ajustar');
    resultadoFinal.classList.add('ajustar')
}


botonEncriptar.addEventListener('click', () => {
    const texto = textoEntradaUsuario.value.toLowerCase()
    function encriptar(newText) {
        for (let i = 0; i < reemplazar.length; i++){
            if(newText.includes(reemplazar[i][0])){
                newText = newText.replaceAll(reemplazar[i][0], reemplazar[i][1]);
            };
        };
        return newText
    }
    // const textoEncriptado = encriptar(texto)
    remplace(encriptar(texto))
    resultadoFinal.innerHTML = encriptar(texto);
});

botonDesencriptar.addEventListener('click', () => {
    const texto = textoEntradaUsuario.value.toLowerCase();
    function desencriptar(newText) {
        for (let i = 0; i < reemplazar.length; i++){
            if(newText.includes(reemplazar[i][1])){
                newText = newText.replaceAll(reemplazar[i][1], reemplazar[i][0]);
            };
        };
        return newText
    }
    remplace(desencriptar(texto))
})

botonCopiar.addEventListener('click', () => {
    let texto = resultadoFinal;
    //navigator.clipboard.writeText(texto.value);
    texto.select();
    document.execCommand('copy')
    alert('Texto Copiado');
    resultadoFinal.innerHTML = '';
    muneco.style.display = 'block';
    infoDerecha.style.display = 'block';
    botonCopiar.style.display = 'none'
    right.classList.remove('ajustar');
    resultadoFinal.classList.remove('ajustar')
    textoEntradaUsuario.focus();
})