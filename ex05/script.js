let opcao;
let total = 0;

do {
    opcao = Number(prompt(
        "CAFETERIA\n\n" +
        "1 - Café Expresso (R$ 5,00)\n" +
        "2 - Cappuccino (R$ 7,00)\n" +
        "3 - Pão de Queijo (R$ 4,00)\n" +
        "0 - Finalizar Pedido"
    ));

    if (opcao == 1) {
        total = total + 5;
        alert("Café Expresso adicionado.");
    }

    else if (opcao == 2) {
        total = total + 7;
        alert("Cappuccino adicionado.");
    }

    else if (opcao == 3) {
        total = total + 4;
        alert("Pão de Queijo adicionado.");
    }

    else if (opcao != 0) {
        alert("Opção inválida.");
    }

} while (opcao != 0);

alert("Pedido finalizado. O total da sua conta é R$ " + total.toFixed(2));