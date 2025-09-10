class Dado {
    lanzar() {
        return Math.floor(Math.random() * 6 + 1 );
    }
}

const dado = new Dado();

let caras = [0, 0, 0, 0, 0, 0];

for(let i = 0; i < 10; i++) {
    let resultado = dado.lanzar();
    caras[resultado - 1]++;
}

for(let i = 0; i < 6; i++) {
    console.log("Cara " + (i + 1), "Cayo " + caras[i]);
}