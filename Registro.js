export default class Registro{
    constructor(){
        this._articuloInicial = null;
        this._articuloFinal = null;
    }

    _agregarArticulo(objArticulo){
        if (this._articuloInicial == null) {
            this._articuloInicial = objArticulo;
            this._articuloFinal = objArticulo;
        }else{
            let libre = this._articuloFinal;
            this._articuloFinal.siguiente = objArticulo;
            this._articuloFinal= objArticulo;
            this._articuloFinal = libre;
        }

        console.log(this._articuloInicial);
        console.log(this._articuloFinal)

    }
}