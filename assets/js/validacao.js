export function valida(input) {
    const tipoDeInput = input.dataset.tipo

    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }
}

const validadores = {
    dataServico:input => validaData(input)
}

function validaData(input) {
    const dataRecebida = new Date(input.value)
    let mensagem = ''

    if(!selecionaData(dataRecebida)) {
        mensagem = 'Insira a data corretamente.'
    }

    input.setCustomValidity(mensagem)
}

function selecionaData(data) {
    const dataAtual = new Date()
    const dataSelecionada = new Date(data.getUTCFullYear(), data.getUTCMonth(), data.getUTCDate())
    const dataMaxima = new Date(data.getUTCFullYear(), data.getUTCMonth() + 3, data.getUTCDate())

    return (dataSelecionada >= dataAtual) && (dataSelecionada <= dataMaxima)
}

