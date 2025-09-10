let lim = parseInt(prompt("Dame un numero para obtener el factorial"));
let sum = 0;
for(let i = 1; i <= lim; i++) {
    let n = i-1;
    let fact = 1;
    for(let i = 1; i <= n; i++) {
        fact *= i;
        sum += 1 / fact;
    }

    console.log(sum);
}