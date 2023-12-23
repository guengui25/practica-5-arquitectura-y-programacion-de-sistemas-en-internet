import mongoose from "mongoose";
import { Usuario,Coleccion } from "../types.ts";
import { ColeccionModel } from "./coleccion.ts";

const Schema = mongoose.Schema; // Esquema de la base de datos

const UsuarioSchema = new Schema( // Esquema de la colección
  {
    // El id se genera automáticamente
    nombre: { type: String, required: true },
    correo_e: { type: String, required: true },
    id_coleccion: [{ type: Schema.Types.ObjectId, required: true, ref: "Coleccion" }]
  },
  { timestamps: true }
);

export type UsuarioModelType = mongoose.Document & Omit<Usuario,"id">; // Tipo de la colección


// Validación de que existan los comics
UsuarioSchema.path("id_coleccion").validate(async function (id_coleccion: mongoose.Types.ObjectId[]) {
  try {
    // No hace falta que se compruebe si son de tipo ObjectId porque ya se hace en la mutation
    
    const Coleccion = await ColeccionModel.find({ _id: { $in: id_coleccion } }); // Busco las colecciones que tengan los IDs que se han pasado

    return Coleccion.length === id_coleccion.length;
    
  } catch (e) {
      return false;
  }
});

// Validación del correo electrónico
UsuarioSchema.path("correo_e").validate(async function (correo_e: string) {

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Expresión regular para validar el correo electrónico
  
  return emailRegex.test(correo_e);

});

export const UsuarioModel = mongoose.model<UsuarioModelType>( // Modelo de la colección
  "Usuario", // Nombre de la colección
  UsuarioSchema // Esquema de la colección
);
