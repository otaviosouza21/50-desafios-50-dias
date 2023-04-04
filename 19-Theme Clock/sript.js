const horas = document.querySelector('.horas');
const minutos = document.querySelector('.minutos');
const segundos = document.querySelector('.segundos');

const horasDig = document.querySelector('#horaDig');
const minutosDig = document.querySelector('#minutosDig');
const amPm = document.querySelector('#am-pm');

const week = document.querySelector('#week');
const day = document.querySelector('#day');
const month = document.querySelector('#month');

const meses = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

const weeks = [
  'Domingo',
  'Segunda-Feira',
  'Terça-Feira',
  'Quarta-Feira',
  'Quinta-Feira',
  'Sexta-Feira',
  'Sabado',
];

setInterval(() => {
  const data = new Date();
  const horaAtual = data.getHours();
  const minutoAtual = data.getMinutes();
  const segundoAtual = data.getSeconds();

  const diaAtual = data.getDate();
  const mesAtual = data.getMonth();
  const weekAtual = data.getDay();

  segundos.style.transform = `rotate(${segundoAtual * 6}deg)`;
  minutos.style.transform = `rotate(${minutoAtual * 6}deg)`;
  horas.style.transform = `rotate(${horaAtual * 30}deg)`;

  if(horaAtual < 12){
    amPm.innerText = "AM"
  }else {
    amPm.innerHTML = "PM"
  }

  horasDig.innerText = horaAtual.toString().padStart(2, '0');
  minutosDig.innerText = minutoAtual.toString().padStart(2, '0');

  day.innerText = diaAtual;
  month.innerText = meses[mesAtual];
  week.innerText = weeks[weekAtual];
}, 1000);

/*mudar tema*/
const btn = document.querySelector("button")

class mudaTema{
  temaClaro(elemento){
    elemento.classList.toggle("temaClaro")
  }
}

const tema = new mudaTema();

btn.addEventListener("click",()=>{
tema.temaClaro(document.body)
tema.temaClaro(horas)
tema.temaClaro(minutos)
tema.temaClaro(btn)
tema.temaClaro(document.querySelector(".clock-ponteiros"))
})