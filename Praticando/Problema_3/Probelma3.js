/*
Pedir para o usuário digitar dois n° e mostrar uma mensagem informando 
se o número foi aprovado ou não. A nota de corte é 5.
*/

let n1 = parseFloat(prompt("Informe sua 1° nota:"));
let n2 = parseFloat(prompt("Informe a sua 2° nota:"));

let media = (n1 + n2) / 2;

if (media >= 5) {
  alert(`A média do aluno é ${media} e ele está APROVADO!`);
} else {
  alert(`A média do aluno é ${media} e ele está REPROVADO!`);
}
