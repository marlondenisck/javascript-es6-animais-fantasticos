/** Navegacao por tabs */

  // 1º Seleciona todas as li`s
  const tabMenu = document.querySelectorAll('.js-tabmenu li');

  // 2º Seleciona as section para se relacionar as li`s
  const tabContent = document.querySelectorAll('.js-tabcontent section');

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
      tabContent[index].classList.add('ativo');
    };

    // 5º Adicionar um evento que ao clicar no elemento
    // ele repasse por parametro o indice para active tab
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }