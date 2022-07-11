'use strict';
const bookOne = document.querySelector('.js-firstbook');
const bookTwo = document.querySelector('.js-secondbook');
const btn = document.querySelector('.js-button');
const paragraph = document.querySelector('.js-p');

let books = [];

console.log(books);

function addBooks(book) {
    books.push(book);
}

const handleClick = (ev) => {
    ev.preventDefault();
    const bookFirst = bookOne.value;
    const bookSecond = bookTwo.value;
    addBooks(bookFirst);
    addBooks(bookSecond);
    console.log(books);
    for (const book of books){
        paragraph.innerHTML += "<li>A mí tmb me encantó " + `${book}` + " .Tenemos mucho en común, humana</li>";
    }
};
btn.addEventListener('click', handleClick);

