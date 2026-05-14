let soma = 0;
let resposta = "s";

while (resposta == "s") {
    let numero = Number(prompt("Digite um número inteiro:"));

    soma = soma + numero;

    resposta = prompt("Deseja inserir outro número? (s/n)");
}

alert("Soma total: " + soma);