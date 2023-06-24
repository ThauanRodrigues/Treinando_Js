/*
Solicite ao usuário um valor numérico, inteiro ou real, e escrever se é positivo ou
negativo (considere o valor zero como positivo).
*/

const valor = prompt("Informe um número:");

if (valor > 0) {
  alert(`O ${valor} é Positivo!`);
} else {
  alert(`O ${valor} é Negativo!`);
}
