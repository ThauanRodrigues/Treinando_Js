const car1 = prompt("Informe o nome do primeiro veiculo:");
let velocidadeCar1 = parseFloat(
  prompt("Informe a velocidade do primeiro veiculo")
);

const car2 = prompt("Informe o nome do segundo veiculo:");
let velocidadeCar2 = parseFloat(
  prompt("Informe a velocidade do segundo veiculo:")
);

if (velocidadeCar1 > velocidadeCar2) {
  alert(`O ${car1} tem velocidade maior que o ${car2}.`);
} else if (velocidadeCar2 > velocidadeCar1) {
  alert(`O ${car2} tem velocidade maior que o ${car1}.`);
} else {
  alert(`O ${car1} e o ${car2} tem velocidades iguais.`);
}
