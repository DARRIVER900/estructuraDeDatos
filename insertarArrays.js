function insertar(arr, nuevodato, posicionnueva) {
    for(let i = arr.length; i > posicionnueva; i--) {
        arr[i] = arr[i - 1];
       
    }
    arr[posicionnueva] = nuevodato;

}

function eliminar(arr) {
    let posicionnueva2 = arr.length;
    let eliminar = 1;
    for(let i = eliminar; i < posicionnueva2 - 1; i ++) {
        arr[i] = arr[i + 1];
    }
    arr.length = arr.length - 1;
}

let numeros=[1,2,3,4];
let edades=[2,3,4,5,6,7,8,9,10];

console.log(edades);
insertar(edades,20,3);

console.log(edades);

console.log(numeros);
eliminar(numeros);
console.log(numeros);
