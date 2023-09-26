const pessoa = {
  nome: "Thauan",
  idade: 24,
  profissao: "Programador",
};

let produtos = {
  descricao: [],
  preco: [],
};

pessoa.nome = "Thauan Rodrigues";
pessoa["nome"] = "Thauan Guimarães";
produtos.preco = [1.89];
// add um produto sem subescrever spreed operador
produtos.preco = [...produtos.preco, 4.89, 5.56];
produtos.descricao = [...produtos.descricao, "Arroz", "Feijão", "Cuscuz"];

let frutas = {
  nome: [],
  preco: [],
};

frutas.nome = [...frutas.nome, "Maça", "Banana"];
frutas.preco = [...frutas.preco, 1.55, 5.22];
frutas.nome.push("Laranja");
// delete frutas.nome;

// delete frutas.nome = [...frutas.nome, [1]];
