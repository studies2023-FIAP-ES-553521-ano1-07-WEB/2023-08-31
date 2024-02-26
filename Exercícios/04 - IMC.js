/*
4. Crie um programa que solicite ao usuário o peso e a altura e, em seguida, use operadores matemáticos para calcular o IMC e exibi-lo na tela.
*/

const prompt = require('prompt-sync')();

const weight = parseFloat(prompt('Digite seu peso'));
const height = parseFloat(prompt('Digite sua altura'));

const imc = weight / (height * height);

console.log('Seu IMC é ' + imc + '.');