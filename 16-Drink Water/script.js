const doses = document.querySelectorAll('.doses li');
const agua =document.querySelector(".agua")
let medida = 0;
const infoCopo = document.querySelector(".drink-copo")
const bebidos = document.querySelector(".bebidos h3")

console.log(infoCopo)

const handleClick = (dose,index) =>{
  doses.forEach(dose=>dose.classList.remove("ativo"))

  for(let i = 0; i<index;i++){
    doses[i].classList.add("ativo");
  }
  medida = 0;
  medida = 250 *(index+1)
  dose.classList.add("ativo");
  agua.style.height = medida/20+'%'

infoCopo.querySelector("h2").innerText = medida+" ml"
bebidos.innerText = medida/20 + " %"

if(medida>=1000){
  infoCopo.querySelector("h2").innerText = medida/1000+" L"
}

}



doses.forEach((dose,index) =>{
  dose.addEventListener("click",()=>{
    handleClick(dose,index)
  })
})

