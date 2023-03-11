const imagens = document.querySelectorAll(".galeria")
const titulo = document.querySelectorAll(".galeria h3");


imagens.forEach((item,index)=>{
  item.addEventListener("click",()=>{


 imagens.forEach((i)=>{
  i.classList.remove("ativo")
  i.innerHTML = "";

 })

setTimeout(()=>{
  item.innerHTML = titulo[index].innerText;
},1000)
item.classList.add("ativo")

})

})
