let cals= new Array(8);
let suma=0;
let promedio;
let lim = [0];

for (let i= 0; i < 8; i++){
   cals[i] = parseInt(prompt("Calificacion"));
   suma += cals[i];            
   console.log(cals[i]);
}

for(let i = 1; i < 8; i++) {
    if(cals[i] > lim) {
        lim = cals[i];
    }
}


promedio=suma / cals.length;
console.log(promedio);
console.log(lim);