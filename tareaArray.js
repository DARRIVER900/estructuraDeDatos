// invertir

let elementos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let aux1 = elementos.length;

for(let i = 0; i < aux1 / 2; i++) {
    elementos[i] = elementos[elementos.aux1 - 1 - i];
    let aux2 = elementos[i];
    elementos[i] = elementos[aux1 - 1 - i];
    elementos[aux1 -1 - i] = aux2;
}
console.log(elementos);