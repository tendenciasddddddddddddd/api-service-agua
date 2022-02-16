import { Schema, model } from "mongoose";

const parroquiasSchema = new Schema(
    {
      nombre: {
        type: String,
        unique: true,
      },
      estado: String,
    },
    {
      timestamps: true,
      versionKey: false
    }
  );
  
  export default model("Parroquia", parroquiasSchema);