// incrementar

let datos = [2, 3, 5, 7, 9, 1, 4, 12, 15, 21];
let auxiliar = datos[datos.length -1];
for(let i = datos.length -1; i > 0; i--) {
    datos[i] = datos[i - 1];
}
datos[0] = auxiliar;
console.log(datos);

// decrementar

let aux = datos[0];
for(let i = 0; i < datos.length -1; i++) {
    datos[i] = datos[i + 1];
}
datos[datos.length -1] = aux;
console.log(datos);
