const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition

// cria uma instacia da api de voz do browser
const recognition = new SpeechRecognition()

// define a lingua portugesa como padrão
recognition.lang = 'pt-Br'
// liga o reconhecimento de voz
recognition.start()

recognition.addEventListener('result', onSpeack)

function onSpeack(voz) {
    chute = voz.results[0][0].transcript

    exibeChuteNaTela(chute)

    verificaSeOChutePossuiUmValorValido(chute)
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())