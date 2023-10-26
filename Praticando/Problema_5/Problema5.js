/* Pedir ao usuário digite um numero de 1 a 6 e o programa mostrar na tela 
uma mensagem diferente para cada alternativa.
*/

let numero = parseInt(prompt("Escolha um número de 1 a 6"));

switch (numero) {
  case 1:
    alert("Você escolheu o número 1!");
    break;
  case 2:
    alert("Você escolheu o número 2!");
    break;
  case 3:
    alert("Você escolheu o número 3!");
    break;
  case 4:
    alert("Você escolheu o número 4!");
    break;
  case 5:
    alert("Você escolheu o número 5!");
    break;
  case 6:
    alert("Você escolheu o número 6!");
    break;
  default:
    alert("Opção Inválida...");
    break;
}
