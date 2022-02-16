import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const productSchema = new Schema(
  {
    //---DATA GENERAL PARA TODOS LOS USUARIOS HANDLE ADMIN
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: [
      {
        type: Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
    //--PLANILLERO
    cedula: {
      type: String,
    },
    fkparroquia: 
      {
        type: Schema.Types.ObjectId,
        ref: "Parroquia",
      },
      fkbarrio: 
      {
        type: Schema.Types.ObjectId,
        ref: "Barrio",
      },
      direccion: {
        type: String,
      },
      categoria: {
        type: String,
      },
      // USUARIOS NORMALES

  },
  {
    timestamps: true,
    versionKey: false,
  }
);

productSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

productSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword)
}

export default model("User", productSchema);
