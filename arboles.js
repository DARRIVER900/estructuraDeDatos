class Nodo {
    constructor(numero){
        this.numero = numero;
        this.hizquierdo = this.hizquierdo;
        this.hderecho = this.hderecho;
    }
}
class Base {
    constructor(){
        this.raiz = null;
    }

    buscar(numero) {
        this._buscarrecursivo(this.raiz, numero);
    }

    _buscarrecursivo(nodoX, numero){
        if(this.raiz == null){
            return null;
        } else if(numero == nodoX.numero){
            return nodoX;

        } else {
            if(numero < nodoX.numero){
                this._buscarrecursivo(nodoX.hizquierdo.numero);
            } else {
                this._buscarrecursivo(nodoX.hderecho.numero);
            }
        }
    }


    agregar(nuevo){
        if(this.raiz == null){
            this.raiz = nuevo;
        } else {
            this._agregar(nuevo, this.raiz);
        }
    }

    _agregar(nuevo, nodoX){
        if(nuevo.numero < nodoX.numero){
            if(nodoX.hizquierdo == null){
                nodoX.hizquierdo = nuevo;
            }else {
            this._agregar(nuevo, nodoX.hizquierdo);
            }
        } else {
            if(nodoX.hderecho == null){
                nodoX.hderecho = nuevo;
            }else {
            this._agregar(nuevo, nodoX.hderecho);
            }
        }
    }

    inorder() {  
        if (this.raiz == null) {
            return "";
        } else {
            return this._inorderrecursivo(this.raiz);
        }
    }

    _inorderrecursivo(nodoX) {
        let cad = "";
        if (nodoX.hizquierdo != null) {  
            cad += this._inorderrecursivo(nodoX.hizquierdo);
        }
        cad += ` ${nodoX.numero}`; 
        if (nodoX.hderecho != null) {
            cad += this._inorderrecursivo(nodoX.hderecho);
        }
        return cad;
    }

    preorder(){
        if(this.raiz == null) {
            console.log("");
        } else {
            this._preorderecursivo(this.raiz);
        }
    }

    _preorderecursivo(nodoX){
        console.log(nodoX.numero);
        if(nodoX.hizquierdo != null){
            this._preorderecursivo(nodoX.hizquierdo);
        } else {
            if(nodoX.hderecho != null){
                this._preorderecursivo(nodoX.hderecho);
            }
        }
    }

     
}


let nuevo = new Nodo(15);
let b1 = new Base();
b1.agregar(nuevo);
nuevo = new Nodo(7);
b1.agregar(nuevo);
b1.buscar(15);
b1.inorder();
b1.porsorder();
b1.preorder();


