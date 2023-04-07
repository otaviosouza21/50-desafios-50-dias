const shadow = document.querySelector(".shadow")
const btn = document.querySelector("button")

btn.addEventListener("click",(e)=>{

  const x = e.clientX;
  const y = e.clientY;

  const buttonTop = e.target.offsetTop
  const buttonLeft = e.target.offsetLeft

const xInside = x - buttonLeft ;
const yInside = y - buttonTop ;

const circle = document.createElement('span')
circle.classList.add('shadow');
circle.style.left = xInside + 'px';
circle.style.top = yInside + 'px'

btn.appendChild(circle)

setInterval(()=>{
  circle.remove()
},500)



  

})


