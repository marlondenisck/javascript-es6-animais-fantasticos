export default function initScrollSuave() {
  // 1º  Seleciona os links que tenham href="#algumaSection"
  const linksInternos = document.querySelectorAll('[data-menu="scrollSuave"] a[href^="#"]');

  //3º evento
  function scrollToSection(event) {
    //3.1 previne comportamento padrao de scroll
    event.preventDefault();
    
    //3.2 pega o link só com com a #algumaSection
    const href = event.currentTarget.getAttribute('href');

    // 3.3 Seleciona a section que contenha o id do parametro passado
    const section = document.querySelector(href);
    
    // 3.4 Realizar scroll
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  // 2º para cada link da nodelist crie um evento 
  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}