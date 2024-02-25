const cart = [10, 30, 52, 655, 398, 344, 365]

let valorFinal = 0

function calcularDesconto(preço, desconto) {
    const resultado = (preço * desconto) / 100
    return resultado
    console.log(resultado)
}

cart.forEach(valor => {
    if (valor > 30) {
        const desconto = calcularDesconto(valor, 10)
        valorFinal = valorFinal + (valor - desconto)
    } else {
        valorFinal = valorFinal + valor
    }
});

console.log(valorFinal)












