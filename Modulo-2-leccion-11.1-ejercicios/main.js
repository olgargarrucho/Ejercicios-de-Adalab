'use strict';

/*const get100Numbers = () => {
    let numbers = [];
    for(let number=1; number<101; number++){
        
        numbers.push(number)
    }
    return numbers;
}

console.log(get100Numbers());

const getReversed100Numbers = () => {
    let numbers = [];
    for(let number=1; number<101; number++){
        
        numbers.push(number)
    }
    return numbers.reverse();
}

console.log(getReversed100Numbers());

let lostNumbers = [4, 8, 15, 16, 23, 42];

let numberPar = [];
console.log(numberPar);

function parNumber(){
    for (let i = 0; i<lostNumbers.length; i++){
    if (lostNumbers[i] % 2 === 0){
    let number = lostNumbers[i];
    numberPar.push(number);
    }}
    return numberPar;
};

console.log(parNumber());

let numberThree = [];

function threeNumber(){
    for (let i = 0; i<lostNumbers.length; i++){
        if (lostNumbers[i] % 3 === 0){
        let number = lostNumbers[i];
        numberThree.push(number);
    }}
    return numberThree;
};

console.log(threeNumber());

const bestLostNomber = () =>{
    const result = numberPar.concat(numberThree);
    return result;
}

console.log(bestLostNomber());*/

const list = document.querySelector('.js_list');
const checkbox = document.querySelector('.js_checkbox');

const tasks = [
    { name: "Recoger setas en el campo", completed: true },
    { name: "Comprar pilas", completed: true },
    { name: "Poner una lavadora de blancos", completed: true },
    {
      name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
      completed: false,
    },
  ];


const writeWorks = () =>{
  for (let i = 0; i<tasks.length; i++){
    let work = tasks[i].name;
    if (tasks[i].completed === true){
    list.innerHTML += `<li><input type="checkbox" class="js_checkbox" checked>${work.strike()}</li>`;
    }else {
    list.innerHTML += `<li><input type="checkbox" class="js_checkbox">${work}</li>`;
    }
    }
};


writeWorks();


/////////////////////////////////////
const workCompleted = () => {
    for (let i = 0; i<tasks.length; i++){
        let work = tasks[i].name;
        if(checkbox.checked === true){
            list.innerHTML += `<li>${work.strike()}</li>`; 
        }else {
    console.log("Es false");
}
    }
}



const handleClick = () => {
    workCompleted();
}

if(checkbox === true){
    console.log("Es true");
} else {
    console.log("Es false");
};

//checkbox.addEventListener('click', workCompleted);

document.attachEvent = function(evt, q, fn){
		
    checkbox.addEventListener('click', ( e ) => {
        console.log("jbdsjdj");
        if (e.target.matches( '.js_checkbox' ) ) {
         handleClick().apply( e.target, [e] );
     }
    });
   
 };







 function pyramid(numPisos) {
    console.log('*');
    for (let i = 0; i < numPisos; i++) {
      let piso = '';
      
      for (let j = 0; j < i + 1; j++) {
        piso = piso + '▲';
      }
      
      console.log(piso);
    }
    console.log('|');
  }

 pyramid(5);
  
 