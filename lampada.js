var lamp = window.document.getElementById('lampada')

function lampadaQuebrada(){
    return lamp.src.indexOf('quebrada') > -1
}

function Ligar(){
    if (!lampadaQuebrada()){
        lamp.src = 'img/ligada.svg'
    }
}

function Desligar(){
    if (!lampadaQuebrada()){
        lamp.src = 'img/desligada.svg'
    }
}

lamp.addEventListener('click', Quebrar)
function Quebrar(){
    lamp.src = 'img/quebrada.svg'
}