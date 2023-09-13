const medida = prompt("Informe o valor em metros:");
let unidade;

do {
  unidade = prompt(
    "Para qual unidade de medida deseja converter?" +
      "\n1 - milímetros (mm)" +
      "\n2 - centímetros (cm)" +
      "\n3 - decímetros (dm)" +
      "\n4 - decâmetros (dam)" +
      "\n5 - hectômetro (hm)" +
      "\n6 - quilômetro (km)" +
      "\n7 - Sair"
  );

  switch (unidade) {
    case "1":
      alert("Resultado: " + medida + "m = " + medida * 1000 + "mm");
      break;
    case "2":
      alert("Resultado: " + medida + "m = " + medida * 100 + "cm");
      break;
    case "3":
      alert("Resultado: " + medida + "m = " + medida * 10 + "dm");
      break;
    case "4":
      alert("Resultado: " + medida + "m = " + medida / 10 + "dam");
      break;
    case "5":
      alert("Resultado: " + medida + "m = " + medida / 100 + "hm");
      break;
    case "6":
      alert("Resultado: " + medida + "m = " + medida / 1000 + "km");
      break;
    case "7":
      alert("Saindo....");
      break;
    default:
      alert("Opção inválida!");
  }
} while (unidade !== "7");
