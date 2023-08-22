const numero = prompt("Informe o número da tabuada que deseja:");
let resultado = "";

for (let i = 1; i <= 20; i++) {
  //resultado += "->" + numero + "*" + i + "=" + numero * i + "\n";
  resultado += `-> ${numero} x ${i}= ${numero * i}\n`;
}
alert(`Resultado da tabuado do ${numero}: \n\n ${resultado}`);
