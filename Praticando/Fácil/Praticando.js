// Escreva uma função que recebe dois números como argumento e retorna a soma deles.

function somaDoisNumeros(a, b) {
  return a + b;
}

console.log(somaDoisNumeros(5, 3));
//-------------------------------------------------------------------------

// Crie uma função que recebe três números como entrada e retorna o maior entre eles.

function maiorTresNumeros(a, b, c) {
  return Math.max(a, b, c);
}

console.log(maiorTresNumeros(10, 50, 5));

//-------------------------------------------------------------------------

// Escreva um programa que imprime todos os números pares de 1 a 50.
for (let i = 2; i <= 50; i += 2) {
  console.log(i);
}

// for (let i = 2; i <= 50; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

//-------------------------------------------------------------------------

// Crie uma função que recebe um número como argumento e retorna a soma de todos os múltiplos
// de 3 ou 5 menores que esse número.

function multiplos3ou5(num) {
  let soma = 0;
  for (let i = 1; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      soma += i;
    }
  }
  return soma;
}

console.log(multiplos3ou5(10));

//-------------------------------------------------------------------------
// Crie uma função que recebe um número como entrada e imprime uma contagem regressiva a partir desse número até 1.

function contagemRegressiva(numero) {
  for (let i = numero; i >= 1; i--) {
    console.log(i);
  }
}
contagemRegressiva(5);
