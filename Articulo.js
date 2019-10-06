export default class Articulo {
    constructor(objArticulo) {
        
        this._codigo = objArticulo.codigo;
        this._nombre = objArticulo.nombre;
        this._precio = objArticulo.precio;
        this._cantidad = objArticulo.cantidad;
        this._descripcion = objArticulo.descripcion;
        this._siguiente = null;
        this._anterior = null;

    }

    get codigo() {
        return this._codigo;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(val) {
        val = this._nombre;
        return val
    }
    get precio() {
        return this._precio;
    }
    set precio(val) {
        if (val == null) {
            val = 0;
        } else {
            val = this._precio;
        }
    }
    get cantidad() {
        return this._cantidad;
    }

    set cantidad(val) {
        if (val == null) {
            val = 0;
        } else {
            val = this._precio;
        }
    }

    get descripcion() {
        return this._descripcion;
    }

    get siguiente() {
        return this._siguiente;
    }

    get anterior() {
        return this._anterior;
    }

    set siguiente(val) {
        val = this._siguiente;
        return val;
    }
    set anterior(val) {
        val = this._anterior;
        return val;
    }

    toString() {
        let resultado = `El codigo del articulo ${this._codigo}`
        return resultado
    }
}