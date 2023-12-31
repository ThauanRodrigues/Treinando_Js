const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
];

//Map permite obter um novo array a partir de um existente.

//Sem o map

// const nomes = [];
// for (let i = 0; i < nomes.length; i++) {
//   const personagem = personagens[i];
//   nomes.push(personagem.nome);
// }

//Com o map

const nomes = personagens.map(function (personagem) {
  return personagem.nome;
});

console.log(nomes);

// filter: permite obter um novo array contendo apenas elementos específicos de um array existente

//sem o filter

// const orcs = [];
// for (let i = 0; i < personagens.length; i++) {
//   const personagem = personagens[i];
//   if (personagens[i].raca === "Orc") {
//     orcs.push(personagens[i]);
//   }
// }

//com o filter

const orcs = personagens.filter(function (personagem) {
  return personagem.raca === "Orc";
});

console.log(orcs);

// reduce: serve para reduzir um array existente a um valor final qualquer,
// passando um valor entre cada iteração sobre esse array e retornando ele no final
//Exemplo criar um obj a partir da raça de cada personagens

const racas = personagens.reduce(function (valorAcumulado, personagem) {
  if (valorAcumulado[personagem.raca]) {
    valorAcumulado[personagem.raca].push(personagem);
  } else {
    valorAcumulado[personagem.raca] = [personagem];
  }
  return valorAcumulado;
}, {});

console.log(racas);

// sort: ordena os elementos de um array a partir de comparações entre duplas de elementos
personagens.sort(function (a, b) {
  return a.nivel - b.nivel;
});

console.log(personagens);
