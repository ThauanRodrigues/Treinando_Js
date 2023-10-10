// ### Calculadora Geométrica

// Escreva um programa em javascript para calcular a área de diferentes formas geométricas. O programa deve iniciar
//com um menu contendo as diferentes opções de cálculas. As opções devem ser:

// - área do triângulo: base * altura / 2
// - área do retângulo: base * altura
// - área do quadrado: lado²
// - área do trapézio: (base maior + base menor) * altura / 2
// - área do círculo: pi * raio² (considere pi = 3.14)

// Você deve escrever o programa usando funções sempre que possível para separar os procedimentos.
//O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu.

function areaTriangulo() {
  const base = prompt("Informe a base do triangulo:");
  const altura = prompt("Informe a altura do triangulo:");
  return (base * altura) / 2;
}

function areaRetangulo() {
  const base = prompt("Informe a base do retângulo:");
  const altura = prompt("Informe a altura do retângulo:");
  return base * altura;
}

function areaQuadrado() {
  const lado = prompt("Informe o tamanho do lado do quadrado:");
  return lado * lado;
}

function areaTrapezio() {
  const baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"));
  const baseMenor = parseFloat(prompt("Informe a base menor do trapézio:"));
  const altura = prompt("Informe a altura do trapézio:");
  return ((baseMaior + baseMenor) * altura) / 2;
}

function areaCirculo() {
  const raio = prompt("Digite o valor do raio");
  const PI = 3.14;
  return PI * raio * raio;
}

function exibirMenu() {
  return prompt(
    "Calculadora Geométrica\n" +
      "1. Calcular área de triângulo\n" +
      "2. Calcular área de retângulo\n" +
      "3. Calcular área de quadrado\n" +
      "4. Calcular área de trapézio\n" +
      "5. Calcular área de círculo\n" +
      "6. Sair\n"
  );
}

function executar() {
  let opcao = "";

  do {
    opcao = exibirMenu();
    let resultado;

    switch (opcao) {
      case "1":
        resultado = areaTriangulo();
        break;
      case "2":
        resultado = areaRetangulo();
        break;
      case "3":
        resultado = areaQuadrado();
        break;
      case "4":
        resultado = areaTrapezio();
        break;
      case "5":
        resultado = areaCirculo();
        break;
      case "6":
        alert("Saindo....");
        break;
      default:
        alert("Opção inválida!");
    }

    if (resultado) {
      alert(`O resultado é ${resultado}`);
    }
  } while (opcao !== "6");
}

executar();
