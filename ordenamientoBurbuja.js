function ordenarBurbuja(arr){
    for(let i = arr.length; i > 0; i--){ // conteo
        for(let j = 0; j < i - 1; j++){ // reviso posicion por posicionn
            if(arr[j] > arr[j + 1]){ // comparo y muevo de lugar
                let num = arr[j]; //  aux , estara vacia
                arr[j] = arr[j + 1];
                arr[j + 1] = num;
            }
        }
    }
    return arr;
}
let arr = [3, 1, 9, 5, 19, 2];
console.log(ordenarBurbuja(arr));


