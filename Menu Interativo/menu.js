// Escreva um programa em javascript que simule um menu interativo com 5 opções diferentes.
// O programa deverá iniciar mostrando as 5 opções disponíveis,
// as quatro primeiras não precisam de nenhuma funcionalidade específica,
// a última opção deve ser a opção “Encerrar”. Ao clicar em alguma das quatro primeiras opções uma mensagem
// deve ser exibida na tela indicando qual foi a opção escolhida e depois o programa deve exibir novamente
// o menu com as 5 opções. Isso deve continuar acontecendo até que o usuário escolha a opção “Encerrar”.
// Ao escolhe-la uma mensagem dizendo que o sistema está sendo encerrado deve ser exibida na tela e então o programa
// é finalizado.

let opcao = "";

do {
  opcao = prompt(
    "Seja bem-vindo(a)!\n" +
      "Escolha sua opção:\n" +
      "\n1. Opção um" +
      "\n2. Opção dois" +
      "\n3. Opção três" +
      "\n4. Opção quatro" +
      "\n5. Encerrar"
  );
  switch (opcao) {
    case "1":
      alert("Opção 1 selecionada!");
      break;
    case "2":
      alert("Opção 2 selecionada!");
      break;
    case "3":
      alert("Opção 3 selecionada!");
      break;
    case "4":
      alert("Opção 4 selecionada!");
      break;
    case "5":
      alert("Programa Encerrado!");
      alert("Encerrando...");
      break;
    default:
      alert("Entrada inválida! Escolha uma das cinco opções.");
  }
} while (opcao !== "5");
