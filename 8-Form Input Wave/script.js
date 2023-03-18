const labels = document.querySelectorAll(".login-input label");
const inputs =document.querySelectorAll(".login-input input")

inputs.forEach((input,index)=>{
  input.addEventListener("focus",()=>{
    const waves = setWaves(index)
    
   input.addEventListener('blur',()=>{
    desableWave(waves)
   })

  })
})

const setWaves = function(index){

  const labelText = labels[index].innerText;

  labels[index].innerHTML = labelText.split("").map((letra,idx)=>{
    return `<span style="animation-delay:${idx*70}ms">${letra}</span>`
  }).join("");
  
  const span = labels[index].querySelectorAll("span")

  span.forEach((letra)=>{
      letra.classList.add("ativo")
  })
  
return span
}


function desableWave(wave){
wave.forEach(letra=>{
  letra.classList.remove("ativo")
})
}
