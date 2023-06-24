/*
As maçãs custam 1,30 cada, se forem compradas menos de uma dúzia, e 1,00 se
forem compradas pelo menos 12. Escreva um programa que leia o número de maçãs
compradas, calcule e escreva o custo total da compra.
*/

const quantidade = prompt(
  "Informe a quantidade de maçãs que você deseja comprar."
);

if (quantidade >= 12) {
  alert(`${quantidade} maças custou: R$ ${quantidade * 1} reais`);
} else {
  alert(`${quantidade} maças custou: R$ ${quantidade * 1.3} reais`);
}
