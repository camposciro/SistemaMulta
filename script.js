function verificar() {
    let velocidadeVeiculo = document.querySelector('input#txtvelocidade')
    let resultadoVelocidade = document.querySelector('div#resultado')
    let velocidadeNumero = Number(velocidadeVeiculo.value)

    resultadoVelocidade.innerHTML = `<p>Sua velocidade atual é de ${velocidadeNumero}</p>`
    if (velocidadeNumero > 60) {
        resultadoVelocidade.innerHTML += `<p>Você foi <strong style="color: red;">MULTADO !</strong></p>`
    }
    resultadoVelocidade.innerHTML += `<p>Use sempre o <strong style="color: #0A8CBF;">CINTO DE SEGURANÇA.</strong></p>`
}

document.querySelector('button').addEventListener('click', verificar)