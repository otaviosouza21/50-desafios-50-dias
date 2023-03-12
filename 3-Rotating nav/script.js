const menuRotate = document.querySelector(".roda");
const conteudo = document.querySelector(".container");
const menuHover = document.querySelectorAll(".menu-hover li")
menuRotate.addEventListener("click",handleMenu);

function handleMenu(){
conteudo.classList.toggle("ativo");
menuRotate.classList.toggle("ativo")
menuHover.forEach(itemMenu=>itemMenu.classList.toggle("ativo"))


}