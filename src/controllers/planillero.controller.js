import User from "../../models/User";
import Role from "../../models/Role";
var mongoose = require('mongoose');

export const createDocentes = async (req, res) => {

    try {
        // Getting the Request Body
       
        const {
          username, email,password,roles,nombres,apellidos,status,telefono,cedula,foto,typo, modalidad, fullname,
          sexo,fketnia,fknacionalidad,fkparroquia,titulo
        } = req.body;
        // Creating a new User Object
        const newUser = new User({
          username,email,nombres,apellidos,status,telefono,foto,cedula,typo,fullname,
            password: await User.encryptPassword(password),
            sexo,fketnia,fknacionalidad,fkparroquia, titulo
        });

        // checking for roles
        const role = await Role.findOne({
            name: "planillero"
        });
        newUser.roles = [role._id];
        const savedUser = await newUser.save();

        return res.status(200).json({
            savedUser
        });
    } catch (error) {
        return res.status(500).json(error);
    }
};