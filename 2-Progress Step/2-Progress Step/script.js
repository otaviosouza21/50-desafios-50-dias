const prev = document.querySelector('button:first-child');
const next = document.querySelector('button:last-child');
const steps = document.querySelectorAll('.step');
const progress = document.querySelector('.line')


let barra = 0;
let contador= 1;
const tamanho = {
    0:180,
    1:280,
    2:370
}

next.addEventListener('click',()=>{
    barra += 90;
    contador++
update();
})


prev.addEventListener('click',()=>{
    barra -= 90;
    contador--;
    update() 
})




function update(){

steps.forEach((step,index)=>{

    if(index < contador){
        step.classList.add('ativo');

    } else {
          step.classList.remove('ativo');
    }
})

progress.style.width = barra+'px'
progress.classList.add('ativo')

}














/* next.addEventListener('click',()=>{
progress.style.width = barra+'px';
progress.classList.add('ativo')
barra += 90;


setTimeout(()=>{
    steps[contador].classList.add('ativo')
    contador++
},150)


});


prev.addEventListener('click',()=>{
    barra -= 90;
    progress.style.width = barra+'px';

    steps[steps.length-1].classList.remove('ativo');

    contador--;
  

})
 */
