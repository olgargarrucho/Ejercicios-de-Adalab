'use strict';

const listPalette = document.querySelector('.js-list-palette');
let palettes = [];
let favorites = [];

const inputFilter = document.querySelector('.js-input');

const handleFilter = (ev) =>{
    const inputValue =inputFilter.value.toLowerCase();

    const paletteFilter = palettes.filter((palette)=>palette.name.toLowerCase().includes(inputValue));
    renderPalettes(paletteFilter);

}

inputFilter.addEventListener('keyup', handleFilter);

function handleClick(event){
    const idSelected = event.currentTarget.id;
    const paletteFound = palettes.find((palette)=>palette.id === idSelected);
    const favoritesFound = favorites.findIndex((fav)=> fav.id === idSelected);

    if(favoritesFound === -1) {
        favorites.push(paletteFound);
    } else {
        favorites.splice(favoritesFound, 1);
    }
    
    renderPalettes(palettes);
    

}

function listenerPalettes(){
    const liPalettes = document.querySelectorAll('.js-palette');
    for (const li of liPalettes) {
        li.addEventListener('click', handleClick);
    }
}

function renderPalettes(arrayPalettes){
    let html = '';
    let classFavorite = '';

    for (const onePalette of arrayPalettes) {
            const favoriteFoundIndex = favorites.findIndex((fav)=>onePalette.id === fav.id);
            if (favoriteFoundIndex !== -1){
                classFavorite = 'palette--favorite';
            } else {
                classFavorite = '';
            }

            html += `<li class="palettes js-palette ${classFavorite}" id="${onePalette.id}">`;
            html += `<h2>${onePalette.name}</h2>`;
            html += `<div class="palette__colors">`;
            for (const paletteColor of onePalette.colors) {
                html += `<div class="palette__color" style="background-color:#${paletteColor}"></div>`;
            }        
            html += `</div></li>`;
        }
    listPalette.innerHTML = html;
    listenerPalettes();
};


function getDataApi(){

    fetch('https://beta.adalab.es/ejercicios-de-los-materiales/js-ejercicio-de-paletas/data/palettes.json')
        .then((response) => response.json())
        .then((data) => {
            palettes = data.palettes;
            localStorage.setItem('data', JSON.stringify(palettes));
            renderPalettes(palettes);
        });
};

function onLoad() {
    const dataLocalStorage = JSON.parse(localStorage.getItem('data'));

    if (dataLocalStorage){
        palettes = dataLocalStorage;
        renderPalettes(palettes);

    } else{
        getDataApi();
        
    }
};

onLoad();



//# sourceMappingURL=main.js.map
