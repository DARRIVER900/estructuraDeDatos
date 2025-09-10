class Dado1 {
    lanzar1() {
     return parseInt(Math.floor(Math.random() * 6 + 1));
    }
 }

 const dado1 = new Dado1();
 //console.log(typeof(dado1.lanzar1()));



 let datos = [0,0,0,0,0,0,0,0,0,0,0];
 
 for(let i = 0; i < 100; i++) {
    let lanzar1 = dado1.lanzar1();
    let lanzar2 = dado1.lanzar1();
    let sum = lanzar1 + lanzar2;
    //console.log(typeof(sum));
    datos[sum-2]++;
 }

 for(let i = 0; i < datos.length; i++) {
   console.log("Suma de dados: " + (i+2),  "y salio " + datos[i]);

 }
 console.log(datos);
 
