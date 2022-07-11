"use strict";

const nameInput = document.querySelector('.js_name');

const lastnameInput = document.querySelector('.js_lastname');

const greetBtn = document.querySelector('.js_button');

const resultParagraph = document.querySelector('.js_result');

greetBtn.addEventListener('click', ()=> {

    const userName = nameInput.value;

    const userLastName = lastnameInput.value;

    const greetText = 'Hola' + userName + ' ' + userLastName + '!';

    resultParagraph.innerHTML = greetText;
})