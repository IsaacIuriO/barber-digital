//const { where } = require("sequelize");
//const Usuario = require("../../mvc/models/UsuariosModel");
const UsuarioSchema = require("../schemas/UsuarioSchema");

class UsuarioService 
{

    #usuarioSchema

    constructor()
    {
        this.#usuarioSchema = UsuarioSchema;
    }

    async buscarUsuario(id)
    {
        return await this.#usuarioSchema.findAll
        ({
            where:{ id: id }
        });
    }
}

module.exports = UsuarioService
