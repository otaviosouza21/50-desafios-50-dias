const imagens = document.querySelectorAll(".galeria")
const titulo = document.querySelectorAll(".galeria h3");


imagens.forEach((item,index)=>{
  item.addEventListener("click",()=>{


 imagens.forEach((i)=>{
  i.classList.remove("ativo")
  i.innerHTML = "";
 })


item.innerHTML = titulo[index].innerText
item.classList.add("ativo")

})
})
