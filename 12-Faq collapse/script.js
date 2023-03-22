const activeFaq = document.querySelectorAll('.faq img:nth-child(2)')
const desableFaq = document.querySelectorAll('.faq img:nth-child(3)')
const descricao = document.querySelectorAll('.faq dd');
const containerFaq = document.querySelectorAll('.faq');


function AddAtivo(idx,elemento){
    console.log(this)
    elemento[idx].classList.add('ativo')
}





activeFaq.forEach((seta,idx)=>{
    seta.addEventListener('click',()=>{
   
   descricao[idx].classList.add('ativo')
   containerFaq[idx].classList.add('ativo')
   activeFaq[idx].classList.add('ativo')
   desableFaq[idx].classList.add('ativo')
   
   
   desableFaq.forEach((close)=>{
       close.addEventListener('click',()=>{
           descricao[idx].classList.remove('ativo')
           containerFaq[idx].classList.remove('ativo')
           desableFaq[idx].classList.remove('ativo')
           activeFaq[idx].classList.remove('ativo')
       })
    
   })
   
    })
    
   
   })
    
   
