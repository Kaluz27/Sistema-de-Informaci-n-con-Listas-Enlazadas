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

        registro._agregarArticulo(articulo);

    }) 
    }
}
let m = new Main;