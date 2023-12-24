import mongoose from "mongoose";
import { Coleccion } from "../types.ts";
import { ComicModel } from "./comic.ts";
import { UsuarioModel } from "./usuario.ts";

const Schema = mongoose.Schema; // Esquema de la base de datos

const ColeccionSchema = new Schema( // Esquema de la colección
  {
    // El id se genera automáticamente
    nombre: { type: String, required: true },
    id_comics: [{ type: Schema.Types.ObjectId, required: true, ref: "Comic" }]
  },
  { timestamps: true }
);


export type ColeccionModelType = mongoose.Document & Omit<Coleccion,"id">; // Tipo de la colección


// Validación de que existan los comics
ColeccionSchema.path("id_comics").validate(async function (id_comics: mongoose.Types.ObjectId[]) {
  try {
    // No hace falta que se compruebe si son de tipo ObjectId porque ya se hace en la mutation
    
    const comics = await ComicModel.find({ _id: { $in: id_comics } }); // Busco los cómics que tengan los IDs que se han pasado

    return comics.length === id_comics.length;
    
  } catch (e) {
      return false;
  }
});

ColeccionSchema.post('findOneAndDelete', async function (doc: ColeccionModelType) {
  try {
    await UsuarioModel.updateMany( // Actualizo todas las colecciones
      { id_coleccion: doc._id },           // Que tengan la coleccion que se ha borrado
      { $pull: { id_coleccion: doc._id } } // Y que se borre del usuario
    );
  } catch (e) {
    console.log(e);
  }
});

export const ColeccionModel = mongoose.model<ColeccionModelType>( // Modelo de la colección
  "Coleccion", // Nombre de la colección
  ColeccionSchema // Esquema de la colección
);


