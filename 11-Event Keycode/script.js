const eventKey = document.querySelector('.event-key p')
const eventKeyCode = document.querySelector('.event-keyCode p');
const eventCode = document.querySelector('.event-code p');

window.addEventListener('keydown',(e)=>{

   eventKey.innerText = e.key
   eventKeyCode.innerText = e.keyCode
   eventCode.innerText = e.code;
/*   eventKeyCode.innetText = e.keyCode */


})