import { getDatos, saveDatos } from "../varios.js";

class PetManager {
  constructor(ruta) {
    this.ruta = ruta;
  }

  getPets() {
    return getDatos(this.ruta);
  }

  createPet(pet) {
    let pets = this.getPets();
    let id = 1;
    if (pets.length > 0) {
      id = Math.max(...pets.map((d) => d.id)) + 1;
      
    }

    let newMascot = {...pet, id}

    pets.push(newMascot);
    saveDatos(this.ruta, pets)

    return newMascot;
  }
}

export default PetManager;
