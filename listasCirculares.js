class Proceso {
    constructor(ciclos){
        this.ciclos = ciclos;
        this.siguiente = null;
        this.anterior = null;
    }

ejecutar() {
        this.ciclos--;
    }
}

class ListaCircular {
    constructor(){
        this.primero = null;
    }
    agregar(nuevoNodo) { 
        // Si no tiene nada, se agrega al final
        if (this.primero == null) { 
            this.primero = nuevoNodo;
            nuevoNodo.siguiente = nuevoNodo; // Apunta a sí mismo
            nuevoNodo.anterior = nuevoNodo; // Apunta a sí mismo
            return true;
        } else {
            nuevoNodo.siguiente = this.primero; // Apunta al primero
            nuevoNodo.anterior = this.primero.anterior; // Apunta al último nodo
            this.primero.anterior.siguiente = nuevoNodo; // El antiguo último apunta al nuevo
            this.primero.anterior = nuevoNodo; // El primero ahora apunta al nuevo como último
        }
        return true; // O el valor que consideres adecuado
    }
    extraerInicio() {
        if (this.primero == null) {
            return null; // La lista está vacía
        }
    
        let inicio = this.primero; // Nodo a extraer
        if (this.primero.siguiente === this.primero) {
            // Solo hay un nodo en la lista
            this.primero = null; // Ahora la lista estará vacía
        } else {
            // Hay más de un nodo
            this.primero.anterior.siguiente = this.primero.siguiente; // El último apunta al segundo
            this.primero.siguiente.anterior = this.primero.anterior; // El segundo apunta al último
            this.primero = this.primero.siguiente; // Actualiza la cabeza
        }
    
        inicio.siguiente = null; // Desconecta el nodo extraído
        inicio.anterior = null; // Desconecta el nodo extraído
        return inicio; // Retorna el nodo extraído
    }
    
    avanzar(){
        this.inicio = this.inicio.siguiente;
    }
        
}
let tareas=new ListaCircular();
let cad="";
for (let i=1; i<=35; i++){
  cad=i + ": ";
  let prob=Math.ceil (Math.random() *100)
  if (prob<=15){
   
    let ciclos = Math.floor (Math.random()*11)+4;
    cad += "nuevo " + ciclos;
    let nuevo= new Proceso(ciclos);
    tareas.agregar(nuevo);
  }
  let proceso=tareas.inicio;
  if (proceso != null){
    cad += "(" + proceso.ciclos + ")";
    proceso.ejecutar();
    if (proceso.ciclos==0){
      cad += " eliminado "
      tareas.extraerInicio();
    }
    else
      tareas.avanzar();
  }
  console.log(cad);
}