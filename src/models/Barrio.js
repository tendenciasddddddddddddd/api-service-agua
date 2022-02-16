import { Schema, model } from "mongoose";

const barriosSchema = new Schema(
    {
      nombre: {
        type: String,
        unique: true,
      },
      estado: String,
      fkparroquia: 
      {
        type: Schema.Types.ObjectId,
        ref: "Parroquia",
      },
    },
    {
      timestamps: true,
      versionKey: false
    }
  );
  
  export default model("Barrio", barriosSchema);