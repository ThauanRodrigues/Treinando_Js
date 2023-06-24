/*
Solicite ao usuário um valor numérico, inteiro ou real, e verifique se ele é maior ou
menor que 10. O programa deve escrever a mensagem correspondente (maior ou
menor) e informar o valor digitado pelo usuário.
*/

const valor = prompt("Informe um número:");

if (valor > 10) {
  alert(`O ${valor} é maior que 10.`);
} else {
  alert(`${valor} é menor que 10`);
}
