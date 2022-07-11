'use strict';

const inputText = document.querySelector('.js-input');
const button = document.querySelector('.js-button');
const nameUser = document.querySelector('.js-name');
const avatarUser = document.querySelector('.js-img');
const repositoryNumberUser = document.querySelector('.js-repository');




function getUser() {
  const user = inputText.value;
  fetch(`https://api.github.com/users/${user}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.name);
      avatarUser.src = data.avatar_url;
      nameUser.innerHTML = data.login;
      repositoryNumberUser.innerHTML = data.public_repos;
    });
}

button.addEventListener('click', getUser);