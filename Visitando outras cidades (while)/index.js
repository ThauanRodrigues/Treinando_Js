const turista = prompt("Iae Turista, Qual é o seu nome?");
let cidades = "";
let contagem = 0;
let continuar = prompt("Você já visitou alguma cidades? (Sim/Não)");

while (continuar === "Sim") {
  let cidade = prompt("Qual o nome da cidade visitada ?");
  cidades += "-" + cidade + "\n";
  contagem++;
  continuar = prompt("Você já visitou alguma cidades? (Sim/Não)");
}

alert(`Turista: ${turista} 
Quantidade de cidades visitadas: ${contagem}
Nomes das cidades:  \n ${cidades}`);
