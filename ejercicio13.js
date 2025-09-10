 /*class Carrera {
    constructor() {
        this._posicion1 = 0;
        this._posicion2 = 0;
        this._metaLimite = 100;
    }
    iniciarCarrera() {

        for (let i = this._posicion1, j = this._posicion2; i < this._metaLimite && j < this._metaLimite; i++, j++) {

            this._posicion1 += Math.floor(Math.random() * 6 + 1 );
            this._posicion2 += Math.floor(Math.random() * 6 + 1);

            console.log(`C1 esta en ${this._posicion1}, C2 esta en ${this._posicion2}`);

        }

        if(this._posicion1 >= this._metaLimite && this._posicion2 >= this._metaLimite) {
            return "Empate";
        } else if (this._posicion1 >= this._metaLimite) {
            return "C1 gano";
        } else {
            return "C2 gano";
        }
    }
}

const carrera = new Carrera();
console.log(carrera.iniciarCarrera()); 


*/

class Dado {
    lanzar() {
     return Math.floor(Math.random() * 6 + 1);
    }
 }

 let dado = new Dado();

class Corredor {
    constructor() {
        this.posicion = 0;
    }

    correr(dado) {
        let cara = dado.lanzar();
        if (cara == 1 || cara == 2) {
            this.posicion += 1;
        } else if (cara == 3) {
            this.posicion += 3;
        } else {
            this.posicion += 2;
        }
    }
}
    let corredor1 = new Corredor();
    let corredor2 = new Corredor();
    
        while (corredor1.posicion < 100 && corredor2.posicion < 100) {
            corredor1.correr(dado);
            corredor2.correr(dado);
            console.log(corredor1.posicion + " " + corredor2.posicion);
        }
    
        if(corredor1.posicion >= 100 && corredor2.posicion >= 100) {
            console.log("Empate");
        } else if(corredor1.posicion >= 100) {
            console.log("Corredor1 gano");
        } else {
            console.log("Corredor2 gano");
        }
