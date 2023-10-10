// Se não explicitarmos qual deve ser a saída da função, sua saída será undefined
function calcularMedia(a, b) {
  const media = (a + b) / 3;
}

const resultado = calcularMedia(5, 4);
console.log(resultado);

function criarProduto(nome, preco) {
  const produto = { nome, preco, estoque: 1 };
  return produto;
}

const notebook = criarProduto("Acer nitro 5", 6500);
console.log(notebook);

// Também podemos jogar a saída de uma função dentro dos parâmetros de outra
console.log(criarProduto("Smartphone Samsung Galaxy", 1000));

// E o retorno não precisa ser uma variável,
// pode ser o resultado de qualquer expressão
function areaRetagular(base, altura) {
  return base * altura;
}

console.log(areaRetagular(8, 9));
// Uma função só pode ter uma saída, depois do return nada é executado
// Repare que o VS Code nos avisa que nosso código não será executado

function olaMundo() {
  let mensagem = "Olá mundo";
  return mensagem;

  //Código não executado
  mensagem = "...";
}
console.log(olaMundo());

// No entanto, diferentes ramificações dentro
// da função podem ter diferentes retornos

// function maioridade(idade) {
//   if (idade >= 18) {
//     return "Maior de idade";
//   } else {
//     return "Menor de idade";
//   }
// }
// console.log(maioridade(17));

function maioridade(idade) {
  if (idade < 18) {
    return "Menor de idade";
  }
  return "Maior de idade";
}
console.log(maioridade(16));
console.log(maioridade(29));
