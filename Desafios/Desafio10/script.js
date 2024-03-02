const resultado = document.querySelector('.resultado')
const score1 = document.querySelector('#score1')
const score2 = document.querySelector('#score2')

let numeroScore1 = 0
let numeroScore2 = 0


const human = (escolha) => {
    play(escolha, machine())

}
const machine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const play = (human, machine) => {

    console.log('Humano: ' + human + " Maquina: " + machine)

    if (human === machine) {
        resultado.innerHTML = "Empate!"

    } else if (human === 'paper' && machine === 'rock' || 
                human === 'rock' && machine === 'scissors' || 
                human === 'scissors' && machine === 'paper') {
        numeroScore1++
        score1.innerHTML = numeroScore1
        resultado.innerHTML = "Parabéns, tu ganhou!"

    } else {
        numeroScore2++
        score2.innerHTML = numeroScore2
        resultado.innerHTML = "Bah, tu perdeu pra Alexa!"

    }
}


