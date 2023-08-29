let saldo = parseFloat(prompt("Informe quanto de saldo você tem:"));
let opcao = "";

do {
  opcao = prompt(
    "Saldo disponível: R$" +
      saldo +
      "\nEscolha qual opção você deseja \n" +
      "\n1. Depositar dinheiro." +
      "\n2. Sacar dinheiro." +
      "\n3. Sair."
  );

  switch (opcao) {
    case "1":
      let adicionar = parseFloat(prompt("Informe o valor a ser depositado:"));
      if (!isNaN(adicionar) && adicionar > 0) {
        saldo += adicionar;
      } else {
        alert("Valor inválido");
      }
      break;
    case "2":
      let remover = parseFloat(prompt("Informe o valor do saque:"));
      if (!isNaN(remover) && remover > 0 && remover <= saldo) {
        saldo -= remover;
      } else {
        alert("Valor indisponível para saque.");
      }
      break;
    case "3":
      alert("Obrigado por utilizar nosso serviço, volte sempre!");
      alert("Saindo...");
      break;
    default:
      alert("Opção Inválida!");
  }
} while (opcao !== "3");
