/*
Jgd 1 digitar um n° e jgd 2 digita outro n° se os numeros forem iguail é empate.
sortear um número 0 ou 1.
*/

let num1 = parseInt(prompt("Informe um número:"));
let num2 = parseInt(prompt("Informe um número:"));

if (num1 === num2) {
  alert(`${num1} é igual a ${num2}, empate.`);
} else {
  let nSorteado = parseInt(Math.random() * 2);
  if (nSorteado === 0) {
    if (num1 < num2) {
      alert("Jogador 1 ganhou");
    } else {
      alert("Jogador 2 ganhou");
    }
  } else {
    if (num1 > num2) {
      alert("Jogador 1 ganhou");
    } else {
      alert("Jogador 2 ganhou");
    }
  }
}
