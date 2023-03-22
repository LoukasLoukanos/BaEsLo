// Exporta a função 'valida'
export function valida(input) {
    // Obtém o tipo de input a partir de um atributo 'data-tipo' do elemento HTML
    const tipoDeInput = input.dataset.tipo;

    // Verifica se existe um validador para o tipo de input e chama o validador correspondente, passando o input como argumento
    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input);
    }
}

// Cria um objeto com validadores para diferentes tipos de input
const validadores = {
    dataServico: input => validaData(input)
};

// Função de validação específica para data
function validaData(input) {
    // Converte o valor do input em um objeto Date e inicializa a variável de mensagem com uma string vazia
    const dataRecebida = new Date(input.value);
    let mensagem = '';

    // Verifica se a data selecionada é válida e define a mensagem de erro se não for
    if (!selecionaData(dataRecebida)) {
        mensagem = 'Insira a data corretamente.';
    }

    // Define a mensagem de erro personalizada no elemento HTML usando o método setCustomValidity
    input.setCustomValidity(mensagem);
}

// Função auxiliar para verificar se uma data está dentro do intervalo permitido
function selecionaData(data) {
    // Obtém a data atual e converte a data recebida para compará-las
    const dataAtual = new Date();
    const dataSelecionada = new Date(
        data.getUTCFullYear(),
        data.getUTCMonth(),
        data.getUTCDate()
    );

    // Define a data máxima permitida como três meses a partir da data atual
    const dataMaxima = new Date(
        data.getUTCFullYear(),
        data.getUTCMonth() + 3,
        data.getUTCDate()
    );

    // Retorna true se a data selecionada estiver dentro do intervalo permitido, caso contrário retorna false
    return (dataSelecionada >= dataAtual) && (dataSelecionada <= dataMaxima);
}