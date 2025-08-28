function Gerar() {
    let lines = prompt("Digite um numero:");

    var soma = 0;
    var aux = 0
    for (let i = 1; i <= lines; i++) {
        aux = (aux * 10) + 1;
        soma = soma + aux;
    }

    console.log("A soma é: " + soma);

}