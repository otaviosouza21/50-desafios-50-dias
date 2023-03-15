const conteudo = document.querySelectorAll('.bloco');

for (let i = 0; i < 2; i++) {
  conteudo[i].classList.add('ativo');
}

//Pega metade da tela
const metadeTela = window.innerHeight * 0.6;

window.addEventListener('scroll', handleContent);

//função que adiciona o elemento de acordo com a sua posição no scroll
function handleContent() {
  conteudo.forEach((conteudo) => {
    topContent = conteudo.getBoundingClientRect().top - metadeTela; 

    //adiciona na tela se true, retira se false
    if (topContent < 0) {
      conteudo.classList.add('ativo');
    } else {
      conteudo.classList.remove('ativo');
    }
  });
}
