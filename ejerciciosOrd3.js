class Producto{
    constructor(codigo, nombre, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.siguiente = null;
        this.anterior = null;
    }
    info() {
        return `Producto ${this.codigo}: ${this.nombre}: ${this.precio}` ;
    }
}
class Inventario{
    constructor(){
        this.inicio = null;
    }
    _buscar(codigo){
        let actual = this.inicio;
        while(actual !== null){
            if(actual.codigo == codigo){
                return actual;
            }
            actual = actual.siguiente;
        }
        return null;
    }
    agregar(nuevo){
        if(this._buscar(nuevo.codigo) !== null){
            return false;
        }
        if(this.inicio == null){
            this.inicio = nuevo;
            return true;
        }
        while(nuevo.codigo < this.inicio.codigo){
            nuevo.siguiente = this.inicio;
            this.inicio.anterior = nuevo;
            this.inicio = nuevo;
            return true;
        }
        let actual = this.inicio;
        while(actual.codigo < nuevo.codigo){
            actual = actual.siguiente;
        }
        nuevo.siguiente = actual.siguiente;
        nuevo.anterior = actual;
        if(actual.siguiente !== null){
            actual.siguiente.anterior = nuevo;
        }
        actual.siguiente = nuevo;
        return true;
    }
    buscar(codigo){
        return this._buscar(codigo);
    }
    eliminar(codigo){
        let nodoEliminado = this.inicio;
        if(nodoEliminado == null){
            return false;
        }
        if(nodoEliminado == this.inicio){
            this.inicio = nodoEliminado.siguiente;
            if(this.inicio !== null){
                this.inicio.anterior = null;
            }
        } else {
            nodoEliminado.anterior.siguiente = nodoEliminado.siguiente;
            if(nodoEliminado.siguiente !== null){
                nodoEliminado.anterior.siguiente = nodoEliminado.anterior;
            }
        }
        return true;
    }
    insertar(nuevoProducto, posicion){
        if(posicion == 0){
            nuevoProducto.siguiente = this.inicio;
            if(this.inicio !== null){
                this.inicio.anterior = nuevoProducto;
            }
            this.inicio = nuevoProducto;
            return true;
        }
        let actual = this.inicio;
        let contador = 0;
        while(actual !== null){
            if(contador < posicion -1){
                actual = actual.siguiente;
                contador++;
            }
        }
        if(actual == null){
            return false;
        }
        nuevoProducto.siguiente = actual.siguiente;
        nuevoProducto.anterior = actual;
        while(actual !== null){
            actual.siguiente.anterior = nuevoProducto;
        }
        actual.siguiente = nuevoProducto;
        return true;
    }
    extraerPrimerElemento(){
        if(this.primero == null){
            return null;
        }
        let primerExtraido = this.inicio;
        this.inicio = this.inicio.siguiente;

        if(this.inicio !== null){
            this.inicio.anterior = null;
        }
        return primerExtraido;
    }
    extraerUltimoElemento(){
        if(this.inicio == null){
            return null;
        }
        let actual = this.inicio;
        while(actual.siguiente !== null){
            this.primero = null;
            return actual;
        }
        while(actual.siguiente.siguiente !== null){
            actual = actual.siguiente;
        }

        let ultimo = actual.siguiente;
        actual.siguiente = null;
        return ultimo;
    }
    listar(){
        let texto = '';
        let actual = this.primero;
        while(actual !== null){
            texto+= actual.info() + "\n";
            actual = actual.siguiente;
        }
        return texto;
    }
    listarInverso(){
        let actual = this.inicio;
        if(actual == null){
            return '';
        }
        while(actual.siguiente !== null){
            actual = actual.siguiente;
        }
        let texto = '';
        while(actual !== null){
            texto+= actual.info() + "\n";
            actual = actual.anterior;
        }
        return texto;
    }    
}

let producto = new Producto(3, 'Manzana', 10);
let producto2 = new Producto(1,'Platano', 5);
let producto3 = new Producto(2, 'Pera', 7);

let inventario = new Inventario();

inventario.agregar(producto);
inventario.agregar(producto2);
inventario.agregar(producto3);
inventario.eliminar(producto);
inventario.buscar(producto3);
inventario.extraerPrimerElemento();
inventario.extraerUltimoElemento();
inventario.listar();
inventario.listarInverso();

let aux = inventario.inicio;
while(aux !== null){
    console.log(`Codigo: ${aux.codigo}, nombre:  ${aux.nombre}, Precio: ${aux.precio}`);
    aux = aux.siguiente;
}