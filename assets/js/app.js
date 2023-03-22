// Importa a função 'valida' do módulo './validacao.js'
import { valida } from './validacao.js';

// Busca todos os elementos 'input' da página e os armazena em uma constante chamada 'inputs'
const inputs = document.querySelectorAll('input');

// Adiciona um event listener 'blur' a cada elemento 'input' da página
inputs.input.addEventLiforEach(input => {
    stener('blur', (evento) => {
        // Quando ocorre o evento 'blur', chama a função 'valida' e passa o elemento 'input' como argumento
        valida(evento.target);
    });
});
