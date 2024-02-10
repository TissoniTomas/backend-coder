// Registrador de ticket y eventos

class TicketManager {
  static ganancia = 0.15;
  // Variable estatica que me permite acceder a ella sin tener que pasar por el constructor
  constructor() {
    this.eventos = [];
  }

  getEventos() {
    return this.eventos;
  }

  addEventos(nombre, lugar, fecha = new Date(), capacidad = 50, costo = 0) {
    // Validaciones - Formateo de datos - etc

    if (nombre === "" || lugar === "") {
      console.log("Complete nombre y lugar");
      return;
    }

    let existe = this.eventos.find(
      (evento) => evento.nombre === nombre && evento.lugar === lugar
    );

    if (existe) {
      console.log(`El evento con nombre ${nombre} ya existe`);
      return;
    }

    let id = 1;
    if (this.eventos.length > 0) {
      id = this.eventos[this.eventos.length - 1].id + 1;
    }

    let nuevoEvento = {
      id,
      nombre,
      lugar,
      fecha,
      capacidad,
      costo: costo + costo * TicketManager.ganancia,
      asistentes: [],
    };
    this.eventos.push(nuevoEvento);
  }

  addUsuario(id, nombre, email) {
    let indiceEvento = this.eventos.findIndex((ev) => ev.id === id);

    if (indiceEvento === -1) {
      console.log("El evento no existe");
      return;
    }

    let existe = this.eventos[indiceEvento].asistentes.find(
      (asistente) => asistente.email === email
    );
    if (existe) {
      console.log("El usuario ya es asistente del evento");
      return;
    }
    this.eventos[indiceEvento].asistentes.push(nombre, email);
  }

  ponerEnGira(){

    let indiceEvento = this.eventos.findIndex((ev) => ev.id === id);

    if (indiceEvento === -1) {
      console.log("El evento no existe");
      return;
    }

    let nuevoEvento= {
        ...this.eventos[indiceEvento],
        lugar,
        fecha,
        asistentes:[]

    }

    this.eventos.push(nuevoEvento)
  }
}

let tm01 = new TicketManager();

tm01.addEventos(
  "velez-independiente",
  "Jose Amalfitani",
  new Date(2024, 1, 14),
  100,
  500
);
tm01.addEventos(
  "velez-gimnasia",
  "Jose Amalfitani",
  new Date(2024, 1, 14),
  100,
  500
);
tm01.addEventos(
  "velez-river",
  "Jose Amalfitani",
  new Date(2024, 1, 14),
  100,
  500
);
tm01.addEventos(
  "velez-independiente",
  "Jose Amalfitani",
  new Date(2024, 1, 14),
  100,
  500
);
console.log(tm01.getEventos());

// CLASE 03 


