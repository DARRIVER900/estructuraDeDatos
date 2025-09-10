// Calcular la serie de 4
s = 4 - 4/3 + 4/5 - 4/7 + 4/9 - 4/11 + 4/13 - 4/15 

let sum = 0;
let lim = parseInt(prompt("Dame un numero; "));

for(let i = 1, den = 1; i <= lim; i++, den +2) {
    if(i % 2 == 0) {
        sum -= 4/den;
    } else {
        sum += 4/den;
    }
   
}
console.log(sum);
