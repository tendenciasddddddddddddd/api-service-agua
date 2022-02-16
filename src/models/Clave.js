import { Schema, model } from "mongoose";

const clavesSchema = new Schema(
    {
      ruta: {
        type: String,
        required: true,
      },
      manzana: String,
      secuencia: String,
      piso: String,
      departamento: String,
      catastral: String,
      fkusuario: 
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    },
    {
      timestamps: true,
      versionKey: false
    }
  );
  
  export default model("Clave", clavesSchema);