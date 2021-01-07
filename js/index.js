function confirmar() {
    var n = window.document.getElementById('senha')
    var unlock = window.document.getElementById('unlocked')
    var s = Number(n.value)
    if(s == 209){
        unlock.innerHTML = '--> <a href="./secreto.html" target="_blank"><input type="button" value="Clique Aqui!" onclick="aqui()"></a> <--'
    } else {
        unlock.innerHTML = 'Senha Errada!'
    }
}

function dica() {
    var w = window.document.getElementById('wey')
    w.innerHTML = 'Segundos...'
}

/* Sem olhar os codigo ricardo :( */