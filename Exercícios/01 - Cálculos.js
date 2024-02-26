/*
1. Crie um programa que solicite ao usuário dois números e, em seguida, use operadores matemáticos e lógicos para calcular e exibir as seguintes informações:
    - A soma dos dois números
    - A diferença dos dois números
    - O produto dos dois números
    - A divisão dos dois números
    - O resto da divisão dos dois números
    - Se os dois números são iguais, diferentes, maiores ou menores
*/

const prompt = require('prompt-sync')();

const number1 = parseInt(prompt('Digite um número'));
const number2 = parseInt(prompt('Digite um número'));

console.log('A soma dos números é: ' + (number1 + number2));
console.log('A diferença dos números é: ' + (number1 - number2));
console.log('O produto dos números é: ' + (number1 * number2));
console.log('A divisão dos números é: ' + (number1 / number2));
console.log('O resto da divisão dos números é: ' + (number1 % number2));
if (number1 == number2) {
  console.log('Os números são iguais.');
}
else {
  console.log('Os números são diferentes.');
  if (number1 > number2) {
    console.log('O número ' + number1 + ' é maior que o número ' + number2 +  '.');
  }
  else {
    console.log('O número ' + number1 + ' é menor que o número ' + number2 +  '.');
  }
}