class Trabajo{
    constructor(ciclos){
        this.ciclos = ciclos;
        this.siguiente = null;
    }   
}
class Fifo{
    constructor(){
        this.inicio = null;
        this.ultimo = null;
    }
    encueue(nuevo){
        if(this.inicio == null){ // si no existe un producto, agrego uno
            this.inicio = nuevo;
            this.ultimo = nuevo;
        } else if (this.inicio != null){ // si ya existe un producto(nuevo) agrego al final
            this.ultimo.siguiente = nuevo;
            this.ultimo = nuevo;

        } else if(this.inicio == nuevo){ // evita que se agregue cuando ya existe
            return false;
        }
        return true;
        }

    dequeue(){
    if(this.inicio == null){ // si no hay nada no te devuelvo nada
        return false;
    } else { // si ya hay algo en el inicio , me paso al siguiente pero te retorno inicio
        let aux = this.inicio;
        this.inicio = aux.siguiente;
        return aux;
    }
}
    peek(){
        if(this.inicio == null){ // si no tengo nada , no te retorno nada
            return false;
        } else { // si ya tengo algo , te retorno el inicio
            return this.inicio;
        }
    }    
}
let trabajos = new Fifo();
let trabajosNoCompletados = 0;
let trabajosterminados = 0;

let cad = "";
for(let i = 1; i <= 300; i++){
    let prob = Math.ceil (Math.random() * 100);
    if(prob <= 30){

        let ciclos = Math.floor ( Math.random()* 11) + 4;
        cad += " nuevo " + ciclos;
        let nuevo = new Trabajo(ciclos);
        trabajos.encueue(nuevo);
    }

    let trab = trabajos.peek();
    if(trab){
        trab.ciclos--;

        if(trab.ciclos <= 0){
            trabajos.dequeue();
            trabajosterminados++;

        } 
    } else {
            trabajosNoCompletados ++;
    }
}

console.log(`Trabajos no terminados:  ${trabajosNoCompletados}`);
console.log(`Trabajos completados :  ${trabajosterminados}`);
