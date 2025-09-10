// leer un numero y mostrar el factorial 
let num = parseInt(prompt("Dame un numero para obtener el factorial: "));
factorial = 1;

for(let i = 1; i <= num; i ++) {
    factorial *= i;
}

console.log(factorial);