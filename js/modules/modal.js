export default function initModal() {
  // Selecionar todos os botoes
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  // Só funcionara se existir estes elementos em tela
  if(botaoAbrir && botaoFechar && containerModal) {

    //  FUNCOES
    function toggleModal(event) {
      event.preventDefault();
      containerModal.classList.toggle('ativo');
    }

    function clickOutside(event) {
      // o this representa a section e nao o seu filho (caixinha do modal)
      if(event.target === this) toggleModal(event);
    }

    // EVENTOS
    botaoAbrir.addEventListener('click', toggleModal);
    botaoFechar.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', clickOutside);

  }

  
}
