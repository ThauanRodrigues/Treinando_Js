const Lista = ["Maça", "Banana", "Melão", "Melancia", "Cajá"];
console.log(Lista);
//Adicionar elemento a lista "inicio"
Lista.push("Thauan");
console.log(Lista);
//Adicionar elemento a lista "final"
Lista.unshift("Thayanne");
console.log(Lista);
//Remover elemento a lista "inicio"
Lista.pop();
console.log(Lista);
//Remover elemento a lista "final"
Lista.shift();
console.log(Lista);
//Pesquisar elemento a lista
const inclui = Lista.includes("Banana"); // criando um variavel inclui e dps pesquisando
console.log(inclui);
//Pesquisar o index do elemento a lista
const indice = Lista.indexOf("Melão");
console.log(indice);
// Cortando um lista
const Lista2 = Lista.slice(0, 4);
console.log(Lista2);
// Concatenar uma lista
const Lista3 = [1, 5, 6, 7, 8, 9];
const concatenada = Lista2.concat(Lista3);
console.log(concatenada);
//Substituir elemento
const elementoRemovido = Lista.splice(Lista, 1, "Goiaba");
console.log(`Elemento Removido: ${elementoRemovido}`);
console.log(Lista);
