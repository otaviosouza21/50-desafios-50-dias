const background = document.querySelector(".imagens")
const imagem = document.querySelector(".arrows .transp img");
const arrows = document.querySelectorAll(".arrow")
console.log(background)

let cont = 1;

function rigthStep(){
background.style.background = `url('./img/img-${cont}.jpg') no-repeat`
}

function leftStep(){
  background.style.background = `url('./img/img-${cont}.jpg') no-repeat`
}


arrows.forEach((seta,index)=>{
seta.addEventListener('click',()=>{
  if(index == 1){
    if(cont<5){
      cont++
      rigthStep()
    }
  }else{
    if(cont>1){
      cont--
      leftStep()
    }
  }
})
})


