function Gerar() {
    let lines = prompt("Digite um numero:");

    for (let i = 1; i <= lines; i++) {
        let linha = "";
        for (let j = 1; j <= i; j++) {
            linha = linha + "*";
        }
        console.log(linha);
    }

}