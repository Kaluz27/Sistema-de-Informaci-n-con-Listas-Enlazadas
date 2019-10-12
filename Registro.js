export default class Registro {
    constructor() {
        this._primerArticulo = null;
        this._ultimoArticulo = null;
    }

    agregarArticulo(articulo) {
        if (this._primerArticulo == null) {
            this._primerArticulo = articulo;
        } else {
            this._ultimoArticulo._next = articulo;
        }
        this._ultimoArticulo = articulo;
        console.log(this._primerArticulo);
        console.log(articulo);
    }

    buscarArticulo(codigo) {
        if (this._primerArticulo != null) {
            let encontrado = false;
            let temp = this._primerArticulo;
            while (!encontrado && temp != null) {
                if (codigo == temp.codigo) {
                    encontrado = true;
                } else {
                    temp = temp.next;
                }
            }
            return temp;
        } else {
            return null;
        }
}