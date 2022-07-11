const button = document.querySelector('.js-buton');
const result = document.querySelector('.js-result');


function getEmoji() {
    fetch('https://api.rand.fun/number/integer?min=0&max=100')
      .then((response) => response.json())
      .then((data) => {
        result.innerHTML = data.result;
      });
  }
  button.addEventListener('click', getEmoji);