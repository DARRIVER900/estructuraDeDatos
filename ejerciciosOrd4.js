class Productos{
    constructor(codigo, nombre, cantidad){
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.siguiente = null;
    }
    info(){
        return `Codigo: ${this.codigo}, Nombre: ${this.nombre}, Cantidad ${this.cantidad}`;
    }
}
class Inventario{
    constructor(){
        this.inicio = null;
        this.ultimo = null;
    }
    _buscar(codigo){
        let actual = this.inicio;
        while(actual.siguiente !== null){
            return actual;
        }
        return null;
    }
    agregar(nuevo){
        let nodoABuscar = this._buscar(nuevo.codigo = codigo);
        while (nodoABuscar != null){
            return null;
        }
        let actual = this.inicio;
        if(this.inicio == null){
            this.primero = nuevo;
        } else {
            this._agregarOtroNuevo(nodoX, nuevoNodo.siguiente);
        }
        return true;
    }

    _agregarOtroNuevo(nodoX, nuevoNodo){
        if(nodoX.siguiente!== null){
            this._agregarOtroNuevo(nodoX, nuevoNodo.siguiente);
        } else {
            nodoX.siguiente = nuevo;
        }
    }
    listar(){
        let texto = "";
        let actual = this.inicio;
        while(actual !== null){
            texto += actual.info() + "\n";
            actual = actual.siguiente;
        }
        return true;
    }
    
    eliminar(codigo){
        let nodoAEliminar = this.inicio;
        while(this.inicio !== null){
            if(nodoAEliminar.codigo == codigo){
                nodoAEliminar = nodoAEliminar.siguiente;
                return true;
            }
            if(nodoAEliminar.siguiente == codigo){
                nodoAEliminar.siguiente = nodoAEliminar.siguiente;
                return true;
            }
            nodoAEliminar = nodoAEliminar.siguiente;
        }
        return false;
    }
    insertar(posicion, producto){
        if(this.primero == null && posicion != 0){
            return false;
        }
        if(posicion == 0){
            producto.siguiente = this.inicio;
            this.inicio = producto;
            return true;
        }
        let actual = this.inicio;
        let contador = 0;
        while(actual != null){
            if(contador == posicion -1){
                producto.siguiente = actual.siguiente;
                actual.siguiente = producto;
                return true;
            }
            actual = actual.siguiente;
            contador++;
        }
    }
    buscar(codigo){
        let nodoABuscar = this._buscar(codigo);
        while (nodoABuscar !== null){
            return nodoABuscar;
        }
        return null;
    }
    extraerPrimero(){
        if(this.inicio == null){
            return null;
        }
        let actual = this.inicio;
        this.inicio = this.inicio.siguiente;
        
        if(this.inicio == null){
            this.ultimo = null;
        }
        return actual;
    }
    extraerUltimo(){
        if(this.inicio == null){
            return null;
        }
        if(this.inicio == this.ultimo){
            let ultimo = this.ultimo;
            this.inicio = null;
            this.ultimo = null;
            return ultimo;
        }
        let actual = this.inicio;
        while(actual !== null){
            actual = actual.siguiente;
        }
        let ultimo = this.ultimo;
        this.ultimo = actual;
        this.ultimo.siguiente = null;
        return ultimo;
    }

}