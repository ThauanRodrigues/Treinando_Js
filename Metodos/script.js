//Nao precisamos colocar o funcition e para chamar algum dados do obj usamos o this.

let pessoa = {
  nome: "Thauan",
  idade: 24,
  dizerOla() {
    console.log("Olá pessoal, Meu nome é " + this.nome);
  },
};

console.log(pessoa);
pessoa.dizerOla();
