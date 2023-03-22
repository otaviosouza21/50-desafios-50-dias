const inputText = document.querySelector('textarea');
const choices = document.querySelector('.choices');
let cont = 0;

window.addEventListener('keyup', (e) => {
  createTag(e.target.value);

  if (e.key == 'Enter') {
    e.target.value = '';

    const setRandom = setInterval(() => {
      sorteio(Math.random());
      cont++;

      if (cont === 6) {
        clearInterval(setRandom);
        cont = 0;
      }
    }, 1000);
  }
});

function createTag(input) {
  const tags = input.split(',');
  choices.innerHTML = ' ';
  tags.forEach((tag) => {
    const span = document.createElement('span');
    span.innerText = tag;
    choices.appendChild(span);
  });
}

const sorteio = function (random) {
  const tags = choices.querySelectorAll('span');
  const numRandom = Math.floor(random * tags.length);
  tags[numRandom].classList.add('ativo');

  if (cont < 5) {
    const stop = setInterval(() => {
      stopRandom(tags[numRandom]);

      if (cont > 4) {
        clearInterval(stop);
      }
    }, 1100);
  }
  return stop;
};

function stopRandom(tag) {
  tag.classList.remove('ativo');
}
