let produto;

do {
    produto = prompt("Digite o nome do produto:");

    if (produto.length < 3) {
        alert("Nome inválido. O produto deve ter no mínimo 3 caracteres.");
    }

} while (produto.length < 3);

alert("Produto cadastrado com sucesso.");