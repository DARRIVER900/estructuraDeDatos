// Calcula la serie, si se ingresa 5 
e = 1/0! + 1/1! + 1/2! + 1/3! + 1/4! + 1/5! 

let lim = parseInt(prompt("Dame un numero para obtener el factorial: "));
let sum = 0;
for (let i= 1; i <= lim; i++) {
    let n = i - 1;
    let fact = 1;
}
for(let i = 1; i <= n; i++) {
    fact *= 1;
    sum += 1/fact;
}
console.log(sum);
