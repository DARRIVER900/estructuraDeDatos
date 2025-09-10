class Dado {
   lanzar() {
    return Math.floor(Math.random() * 6 + 1);
   }
}

const d1 = new Dado();
console.log(d1.lanzar());