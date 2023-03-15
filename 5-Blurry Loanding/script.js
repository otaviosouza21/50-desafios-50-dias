const carregamento = document.querySelector('[data-carregamento]');
const background = document.querySelector("body")



let contador = 0;

let acc = setInterval(()=>{
  carregamento.innerText = contador + '%'
  contador++

  if (contador===100){
    clearInterval(acc)
    carregamento.innerText = 100 + '%'
  }
},50)

window.addEventListener('load',()=>{
  background.classList.add("ativo")
  carregamento.classList.add("ativo")
})