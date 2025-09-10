class Ruleta {
    vuelta() {
        return Math.floor(Math.random() * 100 + 1);
    }
}
let ruleta = new Ruleta();

class Tortuga {
    constructor() {
        this.posicion = 0;
    }

    avanza(ruleta) {
        let tiro = ruleta.vuelta();
        if(tiro <= 50) {
            this.posicion += 3;
        } else if(tiro <= 80) {
            this.posicion += 1;
        } else {
            this.posicion -= 6;
        } 
    }
}

let tortuga = new Tortuga();

class Liebre {
    constructor() {
        this.posicion2 = 0;
    }

    avanza2(ruleta) {
        let tiro2 = ruleta.vuelta();
        if(tiro2 <= 35) {
            this.posicion2 += 1;
        } else if(tiro2 <= 55) {
            this.posicion2 += 9;
        } else if(tiro2 <= 75) {
            this.posicion2 += 0;
        } else if(tiro2 <= 90) {
            this.posicion2 -= 2;
        } else {
            this.posicion2 -=12;
        }
    }
}

let liebre = new Liebre();

while (tortuga.posicion < 100 && liebre.posicion2 < 100) {
    tortuga.avanza(ruleta);
    liebre.avanza2(ruleta);
    console.log(tortuga.posicion + " " + liebre.posicion2);
}

if(tortuga.posicion >= 100 && liebre.posicion2 >= 100) {
    console.log("Empate");
} else if(tortuga.posicion >= 100) {
    console.log("Tortuga gano");
} else {
    console.log("Liebre gano");
}