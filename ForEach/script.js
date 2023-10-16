function exibirElemento(elemento, indece, array) {
  console.log({
    elemento,
    indece,
    array,
  });
}

const frutas = ["Maça", "Banana", "Acerola", "Abacaxi"];

//ForEach

frutas.forEach(exibirElemento);

//Em vez disso:

// for (let i = 0; i < frutas.length; i++) {
//   exibirElemento(frutas[i], i, frutas);
// }
