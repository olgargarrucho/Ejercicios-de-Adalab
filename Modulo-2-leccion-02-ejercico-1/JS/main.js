'use strict';

const superWave = document.querySelector(".super-wave");

superWave.classList.add("wave");

console.log(superWave);

console.log((2 * 5) + (3 * 2) + (0.5* 4));

const comensales = 9;
const totalCuenta = 128;
const excesoAna = 2;
const totalDividir = totalCuenta - excesoAna;
const pagamosIndividual = totalDividir / comensales;
const anaPaga = pagamosIndividual + excesoAna;

console.log(pagamosIndividual, anaPaga);

const horasTotal = 525600;
const añosTotal = 60;
const horasAño = horasTotal / añosTotal;
const añosOlga = 30;
const horasOlga = horasAño * añosOlga;

console.log(horasOlga);