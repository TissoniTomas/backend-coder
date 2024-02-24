const fs = require("fs");
const path = require("path")


class UserManager {
    constructor(rutaArchivo){
        this.path = rutaArchivo

    }

     async getUsuarios(){
        if(fs.existsSync(this.path)){
            return JSON.parse(await fs.promises.readFile(this.path, {encoding:"utf-8"})) // El return de funciones asincronas seran siempre promesas
        }
        else{
            return []
        }
       
    }
}

// let um =new UserManager("./archivos/usuarios.json"); // Ruta relativa
// let um = new UserManager(__dirname + "archivos/usuarios.json" );
let um = new UserManager(path.join(__dirname, "/archivos/usuarios.json"))

// console.log(__dirname);
// um.getUsuarios().then(res=> console.log(res));

const app = async()=>{
    let usuarios = await um.getUsuarios();
    console.log(usuarios);

}
app()