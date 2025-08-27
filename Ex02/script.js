
var choose = prompt("Escolha uma opção:\n1 - PEDRA\n2 - PAPEL\n3 - TESOURA");
var pc = Math.floor(Math.random() * 3) + 1;

if (choose < 1 || choose > 3 || isNaN(choose)) {
    alert("Insira uma opção entre 1 e 3.");
}

if (choose == pc) {
    var out = `Empate! Ambos escolheram ${choose}`;
}else if (choose == 1 && pc == 2) {
    out = "Voce perdeu! Papel cobre Pedra";
} else if (choose == 1 && pc == 3) {
    out = "Voce ganhou! Pedra quebra Tesoura";
} else if (choose == 2 && pc == 1) {
    out = "Voce ganhou! Papel cobre Pedra";
} else if (choose == 2 && pc == 3) {
    out = "Voce perdeu! Tesoura corta Papel";
} else if (choose == 3 && pc == 1) {
    out = "Voce perdeu! Pedra quebra Tesoura";
}   else if (choose == 3 && pc == 2) {
    out = "Voce ganhou! Tesoura corta Papel";
}

alert(out);
console.log(`PC escolheu: ${pc}`);



