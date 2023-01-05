// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()



// Substituir JQuery por React ↓ (cirar novo arquivo .js so para isso)
$("#select-1, #select-2").click(function(){
  alert("ao clicar, mudar a estilização do card e fazer aparecer o campo de pagamento. → usar React, não com JQuery...");
  // code
})
