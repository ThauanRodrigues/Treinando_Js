/*
Peça dois n° e converta ele em numero inteiro. Mostrar um alerta com o resto da divisão 
e um numero elevado ao outro.
*/

let n1 = parseInt(prompt("Informe um número:"));
let n2 = parseInt(prompt("Informe um número:"));

let restoDaDivisao = n1 % n2;
let numeroElevadoa = n1 ** n2;

alert(`O resta da divisão de ${n1} por ${n2} é: ${restoDaDivisao}`);
alert(`O  ${n1}  elevado a ${n2} é: ${numeroElevadoa}`);
