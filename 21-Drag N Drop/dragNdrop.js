export default class DragNDrop{
constructor(empty,fill){
  this.empty = document.querySelectorAll(empty)
  this.bloco = document.querySelector(fill)

 /*  this.dragStart = this.dragStart.bind(this)
  this.dragEnd = this.dragEnd.bind(this) */
  
  this.dragOver = this.dragOver.bind(this)
  this.dragEnter = this.dragEnter.bind(this)
  this.dragLeave = this.dragLeave.bind(this)
  this.dragDrop = this.dragDrop.bind(this)
 
}

dragEvents(){
  this.bloco.addEventListener("dragstart", this.dragStart);
  this.bloco.addEventListener("dragend",this.dragEnd);

  for(const vazios of this.empty){
    vazios.addEventListener('dragover', this.dragOver)
    vazios.addEventListener('dragenter', this.dragEnter)
    vazios.addEventListener('dragleave', this.dragLeave)
    vazios.addEventListener('drop', this.dragDrop) 
  } 
}



dragStart(e){
  e.target.className += ' hover'
  setTimeout(()=>this.className = 'invisible',0)
}

dragEnd(e){
  e.target.className= 'bloco'
}

dragOver(event){
  event.preventDefault();
}

dragEnter(event){
  event.preventDefault()
  const target = event.target
  target.className += ' hovered'
}

dragLeave(event){
  const target = event.target
  target.className = 'empity'
}

dragDrop(e){
  e.preventDefault()
const target = e.target
  this.className = 'empity'
  target.append(this.bloco)

}

init(){
  if(this.empty.length && this.bloco){
    this.dragEvents();
  }
  return this;
}

}