export const typeDefs = `
  type Usuario {
    id: String
    nombre: String
    correoElectronico: String
    coleccion_comics: Coleccion_de_comics
  }

  type Comic {
    id: String
    titulo: String
    descripcion: String
    formato: String
  }

  type Coleccion_de_comics {
    id: String
    nombre: String
    comics: [Comic]
  }

  type Query {
    dinosaurs: [Dinosaur]
        dinosaur(name: String): Dinosaur
  }
`;