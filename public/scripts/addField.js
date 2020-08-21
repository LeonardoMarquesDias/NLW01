// Procurar o botão
document.querySelector("#add-time")
.addEventListener('click', cloneField )
// Quando clicar no botão

// Executar uma ação
function cloneField() {
  
      // Duplicar os campos. que campos?
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)  
  
      // Antes de clonar ele na pagina, eu quero limpar os campos. pra clonar um novo
  const fields = newFieldContainer.querySelectorAll('input')

      // aqui seria um por um
          // fields[0].value = ""
          //fields[1].value = ""

      // para cada campo, limpar
  fields.forEach(function(field) {
      // pega o field no momento e limpa ele
      field.value = ""
  })

      // Colocar na página, onde? que lugar da pagina?
  document.querySelector('#schedule-itens').appendChild(newFieldContainer)

}
