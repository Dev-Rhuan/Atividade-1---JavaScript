function Tabuada() {
    let number = parseInt(document.getElementById("numberInput").value);
    
    for (let i = 1; i <= 10; i++) {
        let result = number * i;
        console.log(`${number} x ${i} = ${result}`);
    }

}