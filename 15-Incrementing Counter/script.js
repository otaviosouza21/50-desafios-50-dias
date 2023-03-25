const numero = document.querySelectorAll("[data-inc]")
let contador = 0

numero.forEach((num)=>{
  const total = num.innerText;
  const incremento = Math.floor(total / 100);
 const interval = setInterval(()=>{
    contador+= incremento
    num.innerText = contador;

  if(+total < contador){
    clearInterval(interval)
    num.innerText = total
  }

  },100 * Math.random())


})