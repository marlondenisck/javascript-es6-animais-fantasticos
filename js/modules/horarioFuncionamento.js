export default function initHorarioFuncionamento() {
  const horarioFuncionamento = document.querySelector('[data-semana]');

  // pega o dia da semana do html usando dataset
  // utiliza split para tranformar em array
  // usa o map passando o constructor Number p/ tranformar em tipo Number
  const diasSemana = horarioFuncionamento.dataset.semana.split(',').map(Number);
  
  const horarioSemana = horarioFuncionamento.dataset.horario.split(',').map(Number);
  

  const dataDeAgora = new Date();
  const diaDeHoje = dataDeAgora.getDay();
  const horarioDeAgora = dataDeAgora.getHours();
  
  // pega o diadehoje e repassaca para procurar no index do array
  // se o result for -1 significa que nao esta presente no array 
  const estaAbertoNaSemana = diasSemana.indexOf(diaDeHoje) !== -1;
 
  const estaAbertoNoHorario = (horarioDeAgora >= horarioSemana[0] && horarioDeAgora < horarioSemana[1]);
  
  if(estaAbertoNaSemana && estaAbertoNoHorario) {
    horarioFuncionamento.classList.add('aberto');
  }
}