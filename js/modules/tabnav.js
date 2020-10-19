export default function initTabNav() {
  // 1º Seleciona todas as li`s
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');

  // 2º Seleciona as section para se relacionar as li`s
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  // 2.1º verifica se realmente existe essa section e a li para evitar o lancamento
  // de erros no console  
  if(tabMenu.length && tabContent.length) {

    // 3º Deixa uma classe ativo na primeira section
    tabContent[0].classList.add('ativo');

    // 4º funcao que primeiro percorre a nodelist
    // remove o que tiver ativo para dai entao adicionar no indice
    // passado por parametro a classe ativo na section
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      });
      // pega do atributo datajs qual sera a direcao para animar
      const direcao = tabContent[index].dataset.anime;
      // adiciona classe ativo e a direcao para animacao
      tabContent[index].classList.add('ativo', direcao);
    };

    // 5º Adicionar um evento que ao clicar no elemento
    // ele repasse por parametro o indice para active tab
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}