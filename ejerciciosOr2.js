class Nodo{
    constructor(dato, prioridad){
        this.dato = dato;
        this.prioridad = prioridad;
        this.siguiente = null;
        this.anterior = null;
    }
}
class ColaConPrioridad{
    constructor(){
        this.inicio = null;
    }

    agregar(nuevo){

        // si no hay nada en la cola, se debe agregar un nodo ya sea que sea 1 o 0
        if(this.inicio == null){
            this.inicio = nuevo; 
            return true;
        }
        
        // si el nodo prioridad 1 no existe (se va al inicio)
        if(this.inicio.prioridad < nuevo.prioridad){
            nuevo.siguiente = this.inicio;
            this.inicio.anterior = nuevo;
            this.inicio = nuevo;
            return true;  
        }

        // si el nodo tiene prioridad 1 y si existe, busco si existe uno con prioridad de 1 e inserto despues de este

        let aux = this.inicio;
        while(aux.siguiente !== null){
            if(aux.siguiente.prioridad < nuevo.prioridad){
                nuevo.siguiente = aux.siguiente;
                aux.siguiente.anterior = nuevo;
                aux.siguiente = nuevo;
                nuevo.anterior = aux;
                return true;
            }
            aux = aux.siguiente;
        }
            // si el nodo es prioridad 0, recorro hasta el final y lo agrego
            
                aux.siguiente = nuevo;
                nuevo.anterior = aux;
                return true;
            }   
}

let n1 = new Nodo(1, 0);
let n2 = new Nodo(0, 1);
let n3 = new Nodo(0, 0);
let n4 = new Nodo(1, 1);

let cola = new ColaConPrioridad();

cola.agregar(n1);
cola.agregar(n2);
cola.agregar(n3);
cola.agregar(n4);

let aux = cola.inicio;
while(aux !== null){
    console.log(`Dato: ${aux.dato}, Prioridad:  ${aux.prioridad}`);
    aux = aux.siguiente;
}