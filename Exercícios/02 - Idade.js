/*
2. Crie um programa que solicite ao usuário sua idade e, em seguida, use operadores matemáticos e lógicos para calcular e exibir as seguintes informações:
    - Se a pessoa é menor de idade
    - Se a pessoa é maior de idade
    - Se a pessoa está na faixa etária de 18 a 25 anos
*/

const prompt = require('prompt-sync')();

const age = parseInt(prompt('Digite sua idade'));

if (age < 18) {
  console.log('Você é menor de idade.');
}
else {
  console.log('Você é maior de idade.');

  if (age >= 18 && age <= 25) {
    console.log('Você está na faixa etária de 18 a 25 anos.');
  }
}