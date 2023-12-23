import { Usuario,Comic } from "../types.ts";

import { GraphQLError } from "graphql"; // Importo el tipo de error de graphql

import { UsuarioModel, UsuarioModelType } from "../DB/usuario.ts";

import { ComicModel, ComicModelType } from "../DB/comic.ts";

export const Query = {

    // Consultas de Usuario
    
    usuario: async (_:unknown, args: {id:string}): Promise<UsuarioModelType>  => {

        const { id } = args;

        const usuario = await UsuarioModel.findById(id);

        if (!usuario) {
            throw new GraphQLError("No existe el usuario");
        }

        return usuario;
    },
    
    usuarios: async (): Promise<UsuarioModelType[]>  => {

        const usuarios = await UsuarioModel.find();

        return usuarios;
    },
    
    // Consultas de Comic
    
    comic: async (_:unknown, args: {id:string}): Promise<ComicModelType>  => {

        const { id } = args;

        const comic = await ComicModel.findById(id);

        if (!comic) {
            throw new GraphQLError("No existe el comic");
        }

        return comic;
    },
    
    comics: async (): Promise<ComicModelType[]>  => {

        const comics = await ComicModel.find();

        return comics;
    },

}