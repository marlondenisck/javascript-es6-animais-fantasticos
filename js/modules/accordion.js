export default function initAccordion() {
  // 1º Seleciona o elemento dt
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');

  // variavel a ser usada em varios locais
  const activeClass = 'ativo';
  
  // 2º verificar se existe o elemento
  if(accordionList.length) {

    // Ja inicia com um em aberto
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    // 3º evento
    function activeAccordion() {
      // ao clicar adicionar ativo no elemento clicado e ao proximo 
      // elemento da lista
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    };

    // 4º a cada item da lista adiciona um evento
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion)
    });

    }
}
