class Alumno {
    constructor(ncta, nombre){
        this.ncta = ncta;
        this.nombre = nombre;
        this.siguiente = siguiente;
    }

    info(){
        return " El numero de cuenta del alumno es " + this.ncta +  " y su nombre es " + this.nombre;
    }

}

class Grupo {
    constructor(){
        this.primero = null;
        this.ult = null;
    }
    agregar(nuevo){
        if(this.primero == null){
            this.primero = nuevo;
            this.ultimo = nuevo;
        } else {
            this.ultimo.siguiente = nuevo;
            this.ultimo.nuevo;
        }
        console.log(this.primero);
    }

    listar(){
        let resultado = "";
        let aux = this.primero;
        while(aux != null ){
            resultado += aux.info();
            aux = aux.siguiente;
        }
        return resultado;
    }

    listarInverso(){ // lista simple
        let resultado = "";
        let aux = this.primero;
        while(aux == null){
            aux.info() + 
        }

    }


    eliminar(ncta){
        
    }
    buscar(ncta){
        let aux = this.primero;
        while(aux != null){
            if(aux.ncta == ncta){
                return aux;
            }
            aux = aux.siguiente;
        }

        return null;
    }
    extraerPrimero(){
        if(this.primero == null){
            return null;
        }
        let primerAl = this.primero;
        this.primero = this.primero.siguiente;

        if(this.primero == null){
            this.ultimo = null;
        }
        return primerAl;
    }

    extraerUltimo(){
        if(this.primero == null){
            return null;
        }
        if(this.primero === this.ultimo){
            let ult = this.ultimo;
            this.primero = null;
            this.ultimo = null;
            return ult;
        }
        let aux = this.primero;
        while(aux.siguiente != this.ultimo){
            aux = aux.siguiente;
        }
        
        let ultAl = this.ultimo;
        this.ultimo = aux;
        this.ultimo.siguiente = null;

        return ultAl;
    }

}

let gpo = new Grupo();
let n = new Alumno(2345, "Mariana");
gpo.agregar(n);
gpo.listar(n);
n = new Alumno(4567, "Paco");
gpo.agregar(n);
gpo.listar(n);