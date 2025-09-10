function contarVocales(string){
    let vocales = ["A", "E", "I", "O", "U"];
    let contador = 0;
    let texto = string.toUpperCase();
    texto = texto.split("");
    for(let i = 0; i < texto.length; i++){
        for(let j = 0; j < vocales.length; j++){
            if(texto[i] == vocales[j]){
                contador ++;
            }
        }
    }
    return contador;
}

let string = 'HolaMundo';
console.log(contarVocales(string));

function simpleArraySum(ar) {
    let n = ar[6];
    let sum = 0;
    for(let i = 0; i < ar.lenght; i++){
        sum += n[i];
    }
    return sum;
}
let ar = [1, 2, 3, 4, 10, 11];
console.log(simpleArraySum(ar));