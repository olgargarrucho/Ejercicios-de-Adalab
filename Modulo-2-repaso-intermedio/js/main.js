'use strict';

const main = document.querySelector('.js_main');
const div = document.querySelector('.js_div');
const select = document.querySelector('.js_select');
const button = document.querySelector('.js_button');

const getRandom = (max) => {
    return parseInt(Math.random()*max);
};

const changeBackground = () => {
    const randomNumber = getRandom(100);
    console.log(randomNumber);
    if(randomNumber % 2 === 0){
        main.classList.add('yellow');
        main.classList.remove('orange');
    } else {
        main.classList.remove('yellow');
        main.classList.add('orange');
    }
};

console.log(getRandom(100));
function updateMain() {
    const selectValue = select.value;
    div.innerHTML = selectValue;
};

function handleclick(e) {
    e.preventDefault();
    updateMain();
    changeBackground();
};

button.addEventListener ('click', handleclick);