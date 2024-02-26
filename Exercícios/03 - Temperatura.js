/*
3. Crie um programa que solicite ao usuário a temperatura em graus Celsius e, em seguida, use operadores matemáticos para converter a temperatura para graus Fahrenheit e exibi-la na tela.
*/

const prompt = require('prompt-sync')();

const celsius = parseFloat(prompt('Digite uma temperatura em graus Celsius'));

const fahrenheit = (celsius * 1.8) + 32

console.log('A temperatura digitada em Fahrenheit é ' + fahrenheit + 'ºF.');