function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0)  {
        res.innerHTML = 'Impossivel contar!'
    } else{
        res.innerHTML = 'Contando: <br> '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f){  
        for(let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{27A1}`
        }
    } else{
        for (let c = i; c>= f; c-= p){
            res.innerHTML += `${c} \u{27A1}`
        }
    }res.innerHTML += `\u{1F3C1}`
    } 
}
