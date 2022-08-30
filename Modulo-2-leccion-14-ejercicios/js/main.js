'use strict';

const input = document.querySelector('.js-input');
const buton = document.querySelector('.js-btn');

const ul = document.querySelector('ul');

let people = [];

const renderPeople = ()  =>{
  let html = '';
  for ( const person of people){
  html +=  `<li>Personaje: ${person.name}
  </br>Género: ${person.gender}</li>`;
  }
  ul.innerHTML = html;
};

const handleClick =(ev) =>{
  ev.preventDefault();
  const peopleSearch = input.value;
  fetch(`https://swapi.py4e.com/api/people/?search=${peopleSearch}&?format=wookiee`)
  .then((response) => response.json())
  .then((data) => {
    people = data.results;
    renderPeople();
  })
  ;

};


buton.addEventListener('click', handleClick);


