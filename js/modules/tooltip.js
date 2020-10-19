export default function initTooltip() {
  // 1- Seleciona os tooltips
  const tooltips = document.querySelectorAll('[data-tooltip]');
  

  // 3 - Evento que ira adicionar um tooltipbox
  function onMouseOver(event) {
    const tooltipBox = criarTooltipBox(this);
    // adiciona nos estilo a posicao do mouse referente a pagina
    tooltipBox.style.top = event.pageY + 'px';
    tooltipBox.style.left = event.pageX + 'px';


    // atribui na propriedade do obj a tooltipbox
    onMouseLeave.tooltipBox = tooltipBox;
    // atribui na propriedade do obj o this desta function
    onMouseLeave.element = this;
    // Evento para quando o mouse sair..
    this.addEventListener('mouseleave', onMouseLeave);


    // atribui na propriedade do obj a tooltipbox
    onMouseMove.tooltipBox = tooltipBox;
    // Evento que fara a tooltip acompanhar o movimento do mouse
    this.addEventListener('mousemove', onMouseMove);
  }


  // 4 - Para cada vez que passar o mouse por cima, criará uma div no body
  function criarTooltipBox(element) {
    // criar uma div
    const tooltipBox = document.createElement('div');
    // pegar o texto
    const text = element.getAttribute('aria-label');
    // atribuir uma classe para estilizar css
    tooltipBox.classList.add('tooltip');
    // adciona na div o texto 
    tooltipBox.innerText = text;
    // adicionar ao final do documento
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }


  // 5 "Objeto/function" que acompanhará o mouse em movimento
  const onMouseMove = {
    handleEvent(event) {
    this.tooltipBox.style.top = event.pageY + 20 + 'px';
    this.tooltipBox.style.left = event.pageX + 20 +'px';
    }
  }


  // 6 - "Objeto/function" que ira remover a tooltipbox
  const onMouseLeave = {

    // propriedades pré definidas(opcional)
    tooltipBox: '',
    element: '',

    // metodo obrigatorio
    handleEvent() {
      // remove a tooltipbox
      this.tooltipBox.remove();
      // Remover o evento onMouseLeave
      this.element.removeEventListener('mouseleave', onMouseLeave);
      // Remover o evento onMouseMove
      this.element.removeEventListener('mousemove', onMouseMove);
    }
  }

  // 2- Adiciona um evendo a todos tooltips
  tooltips.forEach((tooltip) => {
    tooltip.addEventListener('mouseover', onMouseOver)
  });

}

