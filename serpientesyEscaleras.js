class Dado { // aqui hago la clase del dado, que retorna un valor aleatorio de entre 1-6
    lanzar() {
        return Math.floor(Math.random() * 6 + 1 );
    }
}

let dado = new Dado(); // creo el objeto dado

class Jugador { // aqui hago la clase jugador, el cual tiene un nombre y una posicion
    constructor(nombre) {
        this.nombre = nombre;
        this.posicion = 0;
    }

    avanzar(resultado) { // metodo para que el jugador avance, a la posicion se le va a incrementar el resultado
        this.posicion += resultado;
    }

    comprobar(tablero) { // aqui es para que el jugador revise en que posicion esta con base al tablero
        this.posicion = tablero.checarCasilla(this.posicion);
    }
}

class Tablero { // hago un array indefinido y hago un ciclo que pare hasta 100
    constructor() {
        this.casillas = [];
        for(let i = 0; i < 100; i++) {
            this.casillas[i] = i;
        }

        // estas van a ser las serpientes oki? no es ciertooo, son las escaleras jaja

        this.casillas[3] = 22;
        this.casillas[10] = 29;
        this.casillas[25] = 46;
        this.casillas[50] = 69;
        this.casillas[59] = 98;
        this.casillas[64] = 85;

        // estas si seran las serpientes

        this.casillas[28] = 9;
        this.casillas[48] = 15;
        this.casillas[60] = 24;
        this.casillas[67] = 57;
        this.casillas[94] = 68;
        this.casillas[92] = 72;
    }
    checarCasilla(numero) { // revisa en que casilla esta, y va retornar un numero, y si es una escalera o una serpiente
        return this.casillas[numero] || numero;
    }
}
let tablero = new Tablero();

let jugador1 = new Jugador("Ana");
let jugador2 = new Jugador("Juan");

// aqui empieza el juego

console.log(`${jugador1.nombre} está en la posición: ${jugador1.posicion}`);
console.log(`${jugador2.nombre} está en la posición: ${jugador2.posicion}`);

while(jugador1.posicion < 100 && jugador2.posicion < 100) {
    let resultado = dado.lanzar();
    console.log(`${jugador1.nombre} lanzó el dado y obtuvo: ${resultado}`);
    jugador1.avanzar(resultado);
    jugador1.comprobar(tablero);
    console.log(`${jugador1.nombre} está ahora en la posición: ${jugador1.posicion}`);
    let resultado2 = dado.lanzar();
    console.log(`${jugador2.nombre} lanzó el dado y obtuvo: ${resultado2}`);
    jugador2.avanzar(resultado2);
    jugador2.comprobar(tablero);
    console.log(`${jugador1.nombre} está ahora en la posición: ${jugador1.posicion}`);
}

if (jugador1.posicion >= 100) {
    console.log(`${jugador1.nombre} ha ganado!`);
} else if (jugador2.posicion >= 100) {
    console.log(`${jugador2.nombre} ha ganado!`);
} else {

}
