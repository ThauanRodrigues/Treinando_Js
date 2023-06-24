/* 

## Cadastro de Recrutas

Escreva um programa em javascript que permita salvar informações de um recruta.
As informações a serem salvas são:

- o primeiro nome
- o sobrenome
- o campo de estudoz 
- o ano de nascimento

Depois o programa deve exibir o nome completo do recruta,
seu campo de estudo e sua idade (apenas baseada no ano de nascimento).
*/

const nome = prompt("Informe seu nome:");
const sobrenome = prompt("Informe seu sobrenome:");
const campoDeEstudo = prompt("Qual o seu campo de Estudo ?");
const anoDeNascimento = prompt("Informe o ano do seu nascimento:");

alert(
  "Cadastro realizado com sucesso!\n" +
    "\nNome Completo:" +
    nome +
    " " +
    sobrenome +
    "\n Campo de Estudo:" +
    campoDeEstudo +
    "\n Idade:" +
    (2023 - anoDeNascimento)
);
