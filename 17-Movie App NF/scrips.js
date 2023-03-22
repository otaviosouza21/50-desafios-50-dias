const URLjson =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';
  const URLsearch = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';
  const form = document.querySelector('form');
  const input = form[0];
  const catalogo = document.querySelector(".filmes")




class ContainerFilme { // classe que constroi o container de filme
  constructor(filmes) {
    this.img = filmes.img;
    this.titulo = filmes.titulo;
    this.nota = filmes.nota;
    this.overview = filmes.overview;
  }

  filme() {
    //criando container do filme
    const container = document.createElement('div');
    container.classList.add('filme');

    //criando imagem
    const containerImagem = document.createElement('div');
    containerImagem.classList.add('filme-imagem');
    const imgFilme = document.createElement('img');
    imgFilme.src = this.img;

    //criando descrição e nota
    const containerDescricao = document.createElement('div');
    containerDescricao.classList.add('filme-descricao');
    const filmeTitulo = document.createElement('h1');
    filmeTitulo.innerText = this.titulo;
    const filmeNota = document.createElement('span');
    filmeNota.innerText = this.nota;

    //criando sinopse
    const containerOverview = document.createElement('div');
    containerOverview.classList.add('overview');
    const overview = document.createElement('h2');
    overview.innerText = 'Overview';
    const filmesSinopse = document.createElement('p');
    filmesSinopse.innerText = this.overview;

    //colocar a imagem dentro do container
    container.appendChild(containerImagem);
    containerImagem.appendChild(imgFilme);

    //coloca a descrição dentro do container
    container.appendChild(containerDescricao);
    containerDescricao.appendChild(filmeTitulo);
    containerDescricao.appendChild(filmeNota);

    //coloca o overview dentro do container
    container.appendChild(containerOverview);
    containerOverview.appendChild(overview);
    containerOverview.appendChild(filmesSinopse);

    return container;
  }
}


//faz a requisição da api e envia para a funcao criarFilmes()
async function setFilmes() {
  try{
  const promiseFilmes = await fetch(URLjson);
  const filmesJSON = await promiseFilmes.json()
  criaFilmes(filmesJSON.results);
  } 
  catch{
   catalogo.innerText = "ERRO AO BUSCAR FILMES, CONSULTE O SUPORTE"
  }
}

async function setRandom(url){
  const promiseRandom = await fetch(url);
  const searchJSON = await promiseRandom.json();


}



//percorre todos os filmes, armazena em filmesArray e coloca na tela
const criaFilmes = function (jsonFilmes) {
  jsonFilmes.forEach((filmes, index) => {
    filmeArray = {
      titulo: filmes.original_title,
      nota: filmes.vote_average,
      overview: filmes.overview,
      img: `https://image.tmdb.org/t/p/w1280/${filmes.poster_path}` 
    };
    const filme = new ContainerFilme(filmeArray);
   catalogo.appendChild(filme.filme())

  });
};


setFilmes();

form.addEventListener(("submit"),(e)=>{
  e.preventDefault()
  const pesquisa = input.value

  if(pesquisa !==""){
    setSearch(pesquisa)
  } 

})

function setSearch(pesquisa){

}