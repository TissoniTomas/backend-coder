import { Router } from "express";
import PetManager from "../managers/PetManager.js";
import path from "path";
import rutaFolder from "../utils.js";
export const Petsrouter = Router();

const ruta = path.join(rutaFolder, "files", "pets.json");
const pm = new PetManager(ruta);

Petsrouter.get("/", (req, res) => {

    let pets = pm.getPets()
  res.setHeader("Content-Type", "application/json");
  res.status(200).json({ Pets: pets });
});

Petsrouter.post('/',(req,res)=>{

    let {nombre} = req.body;

    if(!nombre){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Error en la solicitud`})
    }

    let nuevaMascota = pm.createPet(req.body)

    

    res.setHeader('Content-Type','application/json')
    res.status(201).json({Pet : nuevaMascota})
})