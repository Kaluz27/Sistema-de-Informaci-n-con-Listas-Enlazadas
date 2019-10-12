export default class Articulo {
    constructor(articulo) {
        this._codigo = articulo.codigo;
        this._nombre = articulo.nombre;
        this._precio = articulo.precio;
        this._cantidad = articulo.cantidad;
        this._descripcion = articulo.descripcion;
        this._siguiente = null;
    }

    get codigo() {
        return this._codigo;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(val) {
        this._nombre = val
    }
    get precio() {
        return this._precio;
    }
    set precio(val) {
        this._precio = val;
    }
    get cantidad() {
        return this._cantidad;
    }

    set cantidad(val) {
        this._cantidad = val;
    }
    get descripcion() {
        return this._descripcion;
    }

    get siguiente() {
        return this._siguiente;
    }
    set siguiente(val) {
        this._siguiente = val;
    }

    toString() {
        let resultado = `El codigo del articulo ${this._codigo}`
        return resultado
    }
}