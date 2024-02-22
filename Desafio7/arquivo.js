const convertButton = document.querySelector(".convert-button");
const selectMoeda = document.querySelector(".select-convertido")

function converterValores() {
    const inputValor = document.querySelector(".input").value
    const valorConvert = document.querySelector(".valor-convert")
    const valorConvertido = document.querySelector(".valor")

    const dolar = 4.93
    const euro = 5.33
    const libra = 6.22
    const bitcoin = 251130.85
    const real = 1

    if (selectMoeda.value == "dolar") {
        valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValor / dolar)
    }

    if (selectMoeda.value == "euro") {
        valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValor / euro)
    }

    if (selectMoeda.value == "libra") {
        valorConvertido.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputValor / libra)
    }

    if (selectMoeda.value == "bitcoin") {
        valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputValor / bitcoin)
    }

    if (selectMoeda.value == "real") {
        valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValor / real)
    }


    valorConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValor)

}

function trocaMoeda (){
    const nomeMoeda = document.getElementById("nome")
    const imgMoeda = document.querySelector(".moedaImg")

    if (selectMoeda.value == "dolar") {
        nomeMoeda.innerHTML =  "Dólar Americano"
        imgMoeda.src= "./img/estados-unidos (1) 1.png"
    }

    if (selectMoeda.value == "euro") {
        nomeMoeda.innerHTML =  "Euro"
        imgMoeda.src= "./img/euro.png"
    }

    if (selectMoeda.value == "libra") {
        nomeMoeda.innerHTML =  "Libra Esterlina"
        imgMoeda.src= "./img/libra 1.png"
    }

    if (selectMoeda.value == "bitcoin") {
        nomeMoeda.innerHTML =  "Bitcoin"
        imgMoeda.src="./img/bitcoin 1.png"     
    }

    if (selectMoeda.value == "real") {
        nomeMoeda.innerHTML =  "Real Brasileiro"
        imgMoeda.src="./img/brasil 2.png"
    }

    converterValores()
}

selectMoeda.addEventListener("change", trocaMoeda);
convertButton.addEventListener("click", converterValores);