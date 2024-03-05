import { Router } from "express";
import fs from "fs";
import path from 'path';
import dirname from "../../utils.js"

// No existe app en router, por tal se modifica por router las peticiones HTTP
let ruta = path.join(dirname,'src','data', 'usuarios.json');
console.log(ruta)

function getUsers(){
    if(fs.existsSync(ruta)
    ){
        return JSON.parse(fs.readFileSync(ruta,"utf-8"));


    }else{
        return []
    }
}

function saveUsers(users){
    fs.writeFileSync(ruta, JSON.stringify(users, null, 5))
}


export const router = Router();

router.get("/",(req,res)=>{
    let usuarios = getUsers()

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({usuarios});
})

router.get("/:id",(req,res)=>{
    const id = Number(req.params.id)

    
    if(isNaN(id)){
        return res.status(400).json({error: "Revisar la entrada"})
    }
    
    let usuarios = getUsers()
    if(id > usuarios[usuarios.length - 1].id){
        return res.status(400).json({error: "ID no encontrado"})
        
    }
        let usuarioID = usuarios.find((u)=> u.id === id);
        

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({usuarioID});
})

router.put("/:id",(req,res)=>{
    const id = Number(req.params.id)

    let usuarios = getUsers()

    if(isNaN(id)){
        return res.status(400).json({error: "Revisar la entrada, ID debe ser numerico"})
    }

    let usuarioID = usuarios.findIndex((u)=> u.id === id);
    if(usuarioID === -1){
        return res.status(400).json({error: "No se encuentra usuario con id", id})
    }
    let modifiedUsuario = usuarios[usuarioID]
    modifiedUsuario = {
        ...modifiedUsuario,
        ...req.body,
    }

    saveUsers(usuarios)


    res.setHeader('Content-Type','application/json');
    return res.status(200).json({usuarioModificado: modifiedUsuario});
})


router.post("/api/usuarios",(req,res)=>{
   if(!req.body.nombre){
    return res.status(400).json({
        error: "Complete el nombre"
    })
   }

    // validaciones
    let usuarios = getUsers();
 
    
    // asignar ID
    let id = 1
    if(usuarios.length > 0){
    // id = Math.max(...usuarios.map(d=> d.id)) +1
    id = (usuarios[usuarios.length - 1].id) + 1
    }

    let nuevoUsuario = {id, ...req.body}
    usuarios.push(nuevoUsuario);
    
    res.status(200).json(nuevoUsuario)

})

router.delete("/:id",(req,res)=>{
    const id = Number(req.params.id)

    let usuarios = getUsers()

    if(isNaN(id)){
        return res.status(400).json({error: "Revisar la entrada, ID debe ser numerico"})
    }

    let usuarioID = usuarios.findIndex((u)=> u.id === id);
    if(usuarioID === -1){
        return res.status(400).json({error: "No se encuentra usuario con id", id})
    }
    let deleteUsuario = usuarios[usuarioID]
    

    usuarios.splice(deleteUsuario, 1)
  

    saveUsers(usuarios)


    res.setHeader('Content-Type','application/json');
    return res.status(200).json({UsuarioEliminado: deleteUsuario});
})