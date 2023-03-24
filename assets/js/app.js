// Importa a função valida do módulo './requisicoes.js'
import { valida } from './validacao_e_requisicao';

// Seleciona todos os elementos <input> da página
const inputs = document.querySelectorAll('input');

// Para cada <input>, adiciona um evento 'blur' que chama a função valida ao perder o foco
inputs.forEach(input => {
    input.addEventListener('blur', (evento) => {
        valida(evento.target);
    });
});
