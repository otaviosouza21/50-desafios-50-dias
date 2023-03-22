const buttons = document.querySelectorAll(".board-lista li")

buttons.forEach((botao)=>{

  botao.addEventListener("click",setAudio)
})


function setAudio(e){
buttons.forEach((button)=>{
  button.querySelector("audio").pause();
  button.querySelector("audio").currentTime =0;5
})
e.target.querySelector("audio").play()
}