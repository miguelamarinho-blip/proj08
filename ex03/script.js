let numeroSecreto = 7;
let tentativa = 0;
let contador = 0;

while (tentativa != numeroSecreto) {
    tentativa = Number(prompt("Tente adivinhar o número de 1 a 10:"));

    contador = contador + 1;
}

alert("Parabéns! Você acertou em " + contador + " tentativas.");