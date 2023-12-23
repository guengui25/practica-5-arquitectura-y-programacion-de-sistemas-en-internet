// The GraphQL schema -> El esquema de grapgh ql es un string ; para que salgan colores -> #graphql

// Se define TODO lo que ofrece la  API

export const typeDefs = `#graphql
  
  # Cuando el tipo es obligatorio se pone -> ! ; Cuando es optativo no se pone nada

  type Usuario {
    id: ID!
    nombre: String!
    correo_e: String!
    coleccion: [Coleccion!]!
  }

  type Comic {
    id: ID!
    titulo: String!
    descripcion: String!
    formato: String!
  }

  type Coleccion {
    id: ID!
    nombre: String!
    comics: [Comic!]!
  }

  # Query -> son las funciones para las peticiones de datos

  type Query {

    usuario(id: ID!): Usuario! # Pide un usuario por id -> Devuelve un Usuario

    usuarios: [Usuario!]! # Pide todos los usuarios -> Devuelve un array [Usuario] (Usuario de graphql)

    comic(id: ID!): Comic! # Pide un comic por id -> Devuelve un Comic

    comics: [Comic!]! # Pide todos los comics -> Devuelve un array [Comic] (Comic de graphql)
  }
  
  # Mutation -> son las funciones para las peticiones de modificación de datos

  type Mutation {
    
    addUsuario(nombre: String!, correo_e: String!, coleccion: [String!]!): Usuario! # Añade un usuario -> Devuelve un Usuario

    updateUsuario(id: ID!, nombre: String!, correo_e: String!,coleccion: [String!]!): Usuario! # Actualiza un usuario -> Devuelve un Usuario

    deleteUsuario(id: ID!): Usuario! # Borra un usuario -> Devuelve un Usuario

    # ====================================================================================================

    addColeccion(nombre: String!, comics: [String!]!): Coleccion! # Añade una coleccion -> Devuelve una Coleccion

    updateColeccion(id: ID!, nombre: String!, comics: [String!]!): Coleccion! # Actualiza una coleccion -> Devuelve una Coleccion

    deleteColeccion(id: ID!): Coleccion! # Borra una coleccion -> Devuelve una Coleccion

    # ====================================================================================================

    addComic(titulo: String!, descripcion: String!, formato: String!): Comic! # Añade un comic -> Devuelve un Comic

    updateComic(id: ID!, titulo: String!, descripcion: String!, formato: String!): Comic! # Actualiza un comic -> Devuelve un Comic

    deleteComic(id: ID!): Comic! # Borra un comic -> Devuelve un Comic
  }
`;
