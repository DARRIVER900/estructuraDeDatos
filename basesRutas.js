class Base {
    constructor(nombre, minutos) {
        this.nombre = nombre;
        this.minutos = minutos;
        this.siguiente = null;
        this.anterior = null;
    }

    // Método para obtener la información de la base
    info() {
        return `${this.nombre} - ${this.minutos} minutos`;
    }
}

class RutaTransporte {
    constructor() {
        this.primero = null;
    }

    // Método privado para buscar una base por nombre
    _buscar(nombre) {
        let actual = this.primero;
        if (!actual)
            return null;  // Si la lista está vacía, retornamos null

        // Verificamos el primer nodo
        do {
            if (actual.nombre === nombre)
                return actual;
            actual = actual.siguiente;
        } while (actual !== this.primero);  // Continuamos mientras no volvamos al inicio
        return null; // No encontrado
    }
    agregar(nombre, minutos) {
        const nuevaBase = new Base(nombre, minutos);

        if (this.primero === null) {  // Si la lista está vacía
            this.primero = nuevaBase;
            nuevaBase.siguiente = nuevaBase;
            nuevaBase.anterior = nuevaBase;
        } else {
            // Enlazar la nueva base al final 
            nuevaBase.anterior = this.primero.anterior;  // La nueva base apunta al último nodo
            nuevaBase.siguiente = this.primero;          // La nueva base apunta al primero
            this.primero.anterior.siguiente = nuevaBase; // El antiguo último nodo apunta a la nueva base
            this.primero.anterior = nuevaBase;            // El primer nodo apunta a la nueva base
        }

        return true;
    }
      // Método para eliminar una base por nombre
      eliminar(nombre) {
        let nodoAEliminar = this._buscar(nombre);
        if (nodoAEliminar === null)
            return false;  // Base no encontrada

        // Si es la única base en la lista
        if (nodoAEliminar.siguiente === nodoAEliminar) {
            this.primero = null;
            return true;
        }

        // Si es la primera base
        if (nodoAEliminar === this.primero) {
            this.primero = nodoAEliminar.siguiente;
        }

        // Ajustar los enlaces para eliminar el nodo
        nodoAEliminar.anterior.siguiente = nodoAEliminar.siguiente;
        nodoAEliminar.siguiente.anterior = nodoAEliminar.anterior;

        return true;
    }
     // Método para listar las bases en orden
     listar() {
        let resultado = "";
        let actual = this.primero;

        if (actual === null) return resultado;  // Lista vacía

        // Recorrer y listar las bases
        do {
            resultado += actual.info() + "\n";
            actual = actual.siguiente;
        } while (actual !== this.primero);

        return resultado;
    }
    buscar(nombre) {
        const nodo = this._buscar(nombre);
        if (nodo) {
            return nodo;
        } else {
            return `La base "${nombre}" no se encuentra en la ruta.`;
        }
    }

    // Método para crear una ruta dada una base de inicio y minutos a trabajar
    crearRuta(baseInicio, minutosAtrabajar) {
        const inicio = this._buscar(baseInicio);
        if (inicio == null)
            return "Base no encontrada";  // Si no existe la base, retornamos un mensaje
        
        let actual = inicio;
        let minutosAcumulados = 0;
        let ruta = "";

        // Recorrer las bases acumulando minutos
         do {
            ruta += `${actual.nombre} - Minutos acumulados: ${minutosAcumulados}\n`;
            minutosAcumulados += actual.minutos;
            actual = actual.siguiente;
        } while (minutosAcumulados < minutosAtrabajar);

        return ruta;
    }
}

let rutas = new RutaTransporte();
rutas.agregar('Base1', 15);      // Agregamos la base 1
rutas.agregar('Base2', 20);      // Agregamos la base 2
rutas.agregar('Base3', 10);      // Agregamos la base 3

// Probamos otros métodos
console.log(rutas.eliminar('Base3'));       // Eliminamos 'Base3'
console.log(rutas.listar());                // Listamos las bases
console.log(rutas.buscar('Base2'));         // Buscamos la base 'Base2'
console.log(rutas.crearRuta('Base1', 35)); 