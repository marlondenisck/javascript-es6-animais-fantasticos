export default function initAnimateScrollSections() {
  // 1 Seleciona as sections
  const sections = document.querySelectorAll('[data-anime="scroll"]');

  if(sections.length) {
    // 2 Pega o valor do topo aos 60%
    const windowHalf60Percent = window.innerHeight * 0.6;

    // 4 Quando no scroll a section estiver aos 60% do topo
    // adiciona classe ativo
    function sectionScrollAnimated() {
      sections.forEach((section) => {

        // qual distancia do topo esta cada section?
        const sectionTopValue = section.getBoundingClientRect().top;

        // com o valor do topo faremos o calculo 60% do topo 
        // comparando se menor que 0, retorna true ou false
        const isSectionVisible = sectionTopValue - windowHalf60Percent < 0;
        // se true
        if(isSectionVisible ) {
          section.classList.add('ativo');
        }
      });
    }

    // 5 inicia a funcao logo no carregamento da pagina
    sectionScrollAnimated()

    // 3 Adiciona evento chamando uma funcao
    window.addEventListener('scroll', sectionScrollAnimated);
  }
}