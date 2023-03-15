const search = document.getElementsByTagName("label");
const input  = document.querySelector("#search")

search[0].addEventListener("click",()=>{

  input.classList.toggle("ativo")
})