function verificar() {
    let a = document.querySelector('input#camp_a')
    let b = document.querySelector('input#camp_b')
    let res = document.querySelector('div#res')
    var valor1 = Number(a.value)
    var valor2 = Number(b.value)
    
    if (valor1 <= valor2) {
        res.innerHTML = `O formulário é <strong>válido</strong>!`
    } else {
        res.innerHTML = `O formulário está <strong>inválido</strong>!`
    }
    
}