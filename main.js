import Articulo from "./Articulo.js";
import Registro from "./Registro.js";


export default class Main {
    constructor() {
        document.querySelector("#agregar").addEventListener("click", () =>{

        let registro = new Registro();
        let codigo = Number(document.querySelector("#codigo").value);
        let nombre = document.querySelector("#nombre").value;
        let precio = Number(document.querySelector("#precio").value);
        let cantidad = Number(document.querySelector("#cantidad").value);
        let descripcion = document.querySelector("#descripcion").value;
        
        let objArticulo={
             codigo:codigo,
             nombre:nombre,
             precio:precio,
             cantidad:cantidad,
             descripcion:descripcion
        }

        let articulo = new Articulo(objArticulo);

        registro.agregarArticulo(articulo);
        //console.log(registro._articuloInicial);
    }) 
    let btnBuscador = document.getElementById('btnBuscar');

    btnBuscador.addEventListener('click', () => {
        let codigo = document.getElementById('codigo').value;
        registro.buscarArticulo(codigo);

    })
    }
}
let m = new Main();