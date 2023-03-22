
const getJoke = document.querySelector(".joke")
const btn = document.querySelector('.btn')

btn.addEventListener('click',(e)=>{
   e.preventDefault()
   Joke();
})


async function Joke(){

   const config = {
       headers: {
           Accept: 'application/json',
       },
   }

   const promiseJoke = await fetch('https://icanhazdadjoke.com',config)
   const jokeResponse = await promiseJoke.json();

   getJoke.innerText = jokeResponse.joke

}
