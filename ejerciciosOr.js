// Crear funcion acumular que recibe un array y entonces va acumulando en cada posición lo que tiene mas lo que hay en la posición anterior del mismo array.

function acumular(arr){
    for(let i = 1; i < arr.length; i++){
        arr[i]=arr[i-1]+arr[i];
    }

}
let arr = [1,2,3,3,5,8];
acumular(arr);
console.log(arr);


// Crear función desacumular que haga la función contraria a Acumular, si recibe un arreglo, que trabaje de la última posición hacia abajo y vaya dejando el resultado de lo que hay en esa posición mas lo que hay en la posición anterior.

function desacumular(array){
    for (let i = array.length -1; i > 0; i--){
        array[i] = array[i-1] - array[i];
    }
}
let array = [1,3,6,9,14,22];
desacumular(array);
console.log((array));

// Crea una clase llamada profesor que tenga nombre, numero de trabajador, año de ingreso y tenga un enlace de siguiente y anterior.

class Profesor{
    constructor(nombre, numeroTrabajador, añoIngreso){
        this.nombre = nombre;
        this.numeroTrabajador = numeroTrabajador;
        this.añoIngreso = añoIngreso;
        this.siguiente = null;
        this.anterior = null;
    }
}

function multiplicarAcumulado(ar){
    for (let i = 1; i < ar.length; i++){
        ar[i] = ar[i-1] * ar[i];
    }
}
let ar = [2,3,4,5];
multiplicarAcumulado(ar);
console.log(ar);

function desmultiplicarAcumulado(ar2){
    for (let i = ar2.length -1; i > 0; i--){
        ar2[i] = ar[i] / ar[i-1];
    }
}
let ar2 = [2,6,24,120];
desmultiplicarAcumulado(ar2);
console.log(ar2);

class Alumno{
    constructor(nombre, numeroDeControl, carrera){
        this.nombre = nombre;
        this.numero = numeroDeControl;
        this.carrera = carrera;
        this.siguiente = null;
        this.anterior = null;
    }
}
function diferenciasAcumuladas(arrays){
    for(let i = arrays.length -1; i > 0; i--){
        arrays[i] = arrays[i] - arrays[i-1];
    }
}
let arrays = [10,15,25,40];
diferenciasAcumuladas(arrays);
console.log(arrays);

function rotarALaIzquierda(n, arrays1){
        for(let i = arrays1.length -1; i > n; i--){
        arrays1[i] = arrays1[i-1];
    }
}
let arrays1 = [1,2,3,4,5];
rotarALaIzquierda(arrays1);
console.log(2,arrays1);