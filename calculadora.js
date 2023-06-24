/*
## Calculadora de 4 Operações

Escreve um programa em javascript que permita inserir dois valores numéricos
e então calcule o resultado das quatro operações básicas (soma, subtração, multiplicação e divisão).
Após calcular os resultados o programa deve exibi-los na tela.
*/

const input1 = prompt("Informe o primeiro número:");
const input2 = prompt("Informe o segundo número:");

const x = parseFloat(input1);
const y = parseFloat(input2);

const soma = x + y;
const subtracão = x - y;
const multiplicacão = x * y;
const divisao = x / y;

alert(
  "Resultado:\n" +
    `Soma: ${soma}\n` +
    `Subtração: ${subtracão}\n` +
    `Multiplicação: ${multiplicacão}\n` +
    `Divisão: ${divisao}`
);
