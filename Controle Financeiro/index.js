let saldo = prompt("Informe quanto de saldo você tem:");
saldo = parseFloat(saldo);
let opcao = "";

do {
  opcao = prompt(
    "Saldo disponível: R$" +
      saldo +
      "\nEscolha qual opção você deseja \n" +
      "\n1.Adicionar dinheiro." +
      "\n2.Remover dinheiro." +
      "\n3.Sair."
  );

  switch (opcao) {
    case "1":
      saldo += parseFloat(prompt("Informe o valor a ser adicionado:"));
      break;
    case "2":
      saldo -= prompt("Informe o valor a ser removido:");
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Opção Inválida!");
  }
} while (opcao !== "3");
