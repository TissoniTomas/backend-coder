import fs from "fs";

export function getDatos(ruta){
    if(fs.existsSync(ruta)
    ){
        return JSON.parse(fs.readFileSync(ruta,"utf-8"));


    }else{
        return []
    }
}

export function saveDatos(ruta, data){
    fs.writeFileSync(ruta, JSON.stringify(data, null, 5))
}

