function gerarnumero() {

    const min = Math.ceil(document.querySelector(".min").value)
    const max = Math.floor(document.querySelector(".max").value)

    const resultado = Math.floor(Math.random() * (max-min+1)) + min;

alert(resultado)
}