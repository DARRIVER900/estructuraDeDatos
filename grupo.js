class Alumno{
    constructor(numero, nombre) {
        this.numero = numero;
        this.nombre = nombre;
    }
    info() {
        return "cuenta" + this.numero + ":" + this.nombre;
    }
    infoHtml() {
        return `<h3>${this.numero}</h3><p>${this.nombre}</p>`;
    }
}

class Grupo {
    constructor() {
        this.datos = [];
    }
    agregar(unaalumno) {
        this.datos.push(unaalumno);
    }
    listar() {
        let texto = "";

        for(let i = 0; i < this.datos.length; i++) {
            texto += this.datos[i].info() + "/n";
            return texto;
        }
    }
    buscar(numeroCta){

    }
}


let grupo3h = new Grupo();
let nuevo = new Alumno(1, "Ana");
Grupo.agregar(nuevo);
console.log(grupo3h.listar());


