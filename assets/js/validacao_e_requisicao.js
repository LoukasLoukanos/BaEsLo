// declaração da função "valida" que recebe um parâmetro "input"
export function valida(input) {
    // extrai o tipo de input do atributo "data-tipo" do input recebido
    const tipoDeInput = input.dataset.tipo;

    // verifica se há um validador para o tipo de input extraído
    if (validadores[tipoDeInput]) {
        // se houver um validador, chama a função correspondente passando o input como parâmetro
        validadores[tipoDeInput](input);
    }
}

// Cria um objeto com validadores para diferentes tipos de input
const validadores = {
    dataServico: input => validaData(input),
    cep: input => recuperarCEP(input)
}

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

// função "recuperarCEP" que recebe um input como parâmetro
function recuperarCEP(input) {
    // extrai o valor do input, removendo qualquer caractere que não seja um dígito
    const cep = input.value.replace(/\D/g, '');

    // constrói a URL de busca do CEP, concatenando o valor extraído com a URL base
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    // objeto com as opções da requisição HTTP
    const options = {
        method: 'GET', // método de requisição HTTP
        mode: 'cors', // modo de operação do CORS
        headers: { // cabeçalho da requisição HTTP
            'content-type': 'application/json;charset=utf-8'
        }
    }

    // verifica se o input não possui erros de validação
    if (!input.validity.patternMismatch && !input.validity.valueMissing) {
        // faz uma requisição HTTP GET para a URL de busca do CEP, passando as opções definidas
        fetch(url, options)
            .then(response => response.json()) // transforma a resposta em um objeto JSON
            .then(data => { // recebe o objeto JSON como parâmetro
                if (data.erro) { // verifica se a busca retornou algum erro
                    // define uma mensagem de erro personalizada para o input
                    input.setCustomValidity('Não foi possível buscar o CEP.')
                    return
                }
                // limpa a mensagem de erro personalizada do input
                input.setCustomValidity('')
                // preenche os campos de endereço, cidade e estado com os dados do CEP
                preencheCamposComCEP(data)
                return
            });
    }
}

// função "preencheCamposComCEP" que recebe um objeto "data" como parâmetro
function preencheCamposComCEP(data) {
    // busca os campos de endereço, cidade e estado a partir dos atributos "data-tipo"
    const estado = document.querySelector('[data-tipo="estado"]');
    const cidade = document.querySelector('[data-tipo="cidade"]');
    const endereco = document.querySelector('[data-tipo="endereco"]');

    // preenche os campos com os dados do objeto "data"
    endereco.value = data.logradouro;
    cidade.value = data.localidade;
    estado.value = data.uf;
}
