const randomNumber = Math.floor(Math.random() * 20) + 1;

console.log(randomNumber);

function verify() {
    let num = parseFloat(document.getElementById("numberInput").value);

    if (num < 1 || num > 20 || isNaN(num)) {
        alert("Por favor, insira um número válido entre 1 e 20.");
        return;
    }
    if (num === randomNumber) {
        var out = `Parabens! Você acertou. O número era: <Strong>${randomNumber}</Strong>`;
    } else if (num < randomNumber) {
        out = "Tente um número maior!";
    } else {
        out = "Tente um número menor!";
    }

    document.getElementById("result").innerHTML = out;
}