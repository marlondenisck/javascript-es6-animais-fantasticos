export default function initAnimaNumeros() {
  const numeros = document.querySelectorAll('[data-numero]')
  
  function animaNumeros() {
    numeros.forEach((numero) => {
      // pega a sting contendo o valor e converte em numero
      const total = +numero.innerText;
  
      
      // contador comeca em 0
      let start = 0;
      // para ficar mais "bonito" adiciona ao valor corrente um incremento
      const incremento = Math.floor(total / 200);
      
      // cria um contador
      const timer = setInterval(() => {
        // start recebe seu valor + o incremento
        start += incremento;
        // atribui no texto html o timer
        numero.innerText = start;
  
        // se o valor da contagem der maior clearInterval
        if(start > total) {
          // ao usar o incremento o valor total esta passando do seu real
          // valor entao ao final da animacao se passou, reatribui seu 
          // valor real instantaneamente
          numero.innerText = total;
          clearInterval(timer);
        }
      })
    }, 0);  
  }

  
  /** ao rolar a pagina e chegar nesta section
   * o contador ja teria terminado sua contagem
   * Entao criamos um "observador da section numeros", 
   * sempre que a mesma tiver alguma alteracao ele 
   * inicia o a animacao do contador
   */

  // funcao callback
  function handleMutation(mutation) {
    // mutation é um array like
    // verifica se existe uma class ativo
    if(mutation[0].target.classList.contains('ativo')) {
      // se tiver, executa a animacao
      animaNumeros();
      // se ja ativou desativa o observer ao dar scroll
      // ou seja faz a animao uma unica vez
      observer.disconnect();
    }
  }

  // seleciona o alvo do observer
  const observeTarget = document.querySelector('.numeros');
  // cria a instancia do observer passando uma callback
  const observer = new MutationObserver(handleMutation);
  // metoto que recebe o target e objeto de configs,
  // no caso é para ficar observando as alteracoes dos atributos da section  
  observer.observe(observeTarget, { attributes: true });
}