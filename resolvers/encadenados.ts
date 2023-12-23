import { UsuarioModel,UsuarioModelType } from "../DB/usuario.ts";

import { ColeccionModel,ColeccionModelType } from "../DB/coleccion.ts";

import { GraphQLError } from "graphql"; // Importo el tipo de error de graphql

export const Usuario = {
    coleccion: async (parent: UsuarioModelType) => {

        const coleccion = await UsuarioModel.findById(parent.id).populate(
        "coleccion"
        );
        
        if (!coleccion) {
            throw new GraphQLError("No existe la coleccion");
        }

        return coleccion.coleccion;
    },
};

export const Coleccion = {
    comics: async (parent: ColeccionModelType) => {

        const comics = await ColeccionModel.findById(parent.id).populate(
        "comics"
        );
        
        if (!comics) {
            throw new GraphQLError("No existen comics");
        }

        return comics.comics;
    },
};