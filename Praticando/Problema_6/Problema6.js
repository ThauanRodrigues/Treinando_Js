/*Pedir para o usuário digitar um n° e mostrar a tabualda de 1 a 10 desse numero. */

let numero = parseInt(prompt("Informe um número:"));

//Onde vc quer começar
let i = 0;
//Enquanto i maior igual 10 faça..
while (i <= 10) {
  alert(`${i} x ${numero} = ${numero * i}`);
  i++; //Incrementa
}
