let fila = []; //Criando um array vazio.
let opcao = "";

//Criando um loop Menu
do {
  let paciente = ""; // Lista de paciente no Menu
  //Criando o Loop
  for (let i = 0; i < fila.length; i++) {
    paciente += i + 1 + "º - " + fila[i] + "\n"; // Essa lista ira começar no 1 (i + 1).
  }
  //Criando um menu para aparecer na tela
  opcao = prompt(
    `Pacientes: \n ${paciente} 
    \nEscolhe uam opção:\n1 - Novo paciente\n2 - Consultar paciente\n3 - Sair`
  );

  switch (opcao) {
    case "1":
      const novoPaciente = prompt("Qual é o nome do paciente?");
      fila.push(novoPaciente); //Adicionando o novo paciente no final da fila.
      break;

    case "2":
      const pacienteConsultado = fila.shift(); //tirando o primeiro paciente da fila e guardadnod na variavel
      if (pacienteConsultado) {
        alert(`${pacienteConsultado} foi removido da fila.`);
      } else {
        alert(`Não há mais nenhum paciente na fila`);
      }
      break;

    case "3":
      alert("Até a próxima!");
      alert("Encerrando!");
      break;
    default:
      alert(`Opção inválida!`);
  }
} while (opcao !== "3");

//https://onebitcode.notion.site/35-Resolu-o-do-Exerc-cio-7-8b9fda91bc2c44cbae183430c080b540
