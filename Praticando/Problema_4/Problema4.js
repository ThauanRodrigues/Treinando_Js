/*Pedir ao usuário digitar dois n° e mostrar se o usuário foi aprovado. Porém, se umas das notas for =0 automaticamente
o aluno estár reporvado.Obs:Nota de corte é 5  */

let num1 = parseFloat(prompt("Informe a 1° nota:"));
let num2 = parseFloat(prompt("Informe a 2° nota:"));

let media = (num1 + num2) / 2;

if (num1 === 0 || num2 === 0) {
  alert("Reprovado!");
} else {
  if (media >= 5) {
    alert(`Aprovado com média ${media}`);
  }
}
