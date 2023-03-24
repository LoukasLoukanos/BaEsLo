// IFE autoexecutável para evitar conflitos com outras bibliotecas
(() => {
  'use strict';

  // Seleciona todos os formulários com a classe 'needs-validation'
  const forms = document.querySelectorAll('.needs-validation');

  // Adiciona um evento de envio a cada formulário selecionado
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      // Se o formulário não for válido, previne o envio padrão e interrompe a propagação do evento
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      // Adiciona a classe 'was-validated' ao formulário
      form.classList.add('was-validated');
    }, false);
  });
})();

// Seleciona os elementos com os IDs 'select-1' e 'select-2' e adiciona um evento de clique a cada um
$("#select-1, #select-2").click(function () {
  // Exibe um alerta quando o elemento é clicado
  alert("ao clicar, mudar a estilização do card e fazer aparecer o campo de pagamento. → usar React, não com JQuery...");
});
