const { password } = require('../database/database');
const Usuario = require('../mvc/models/UsuariosModel')
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
        return await this.#usuarioSchema.findOne
        ({
            where:{ id: id }
        });
    }

    async deletarUsuario(id)
    {
        const usuario = await this.#usuarioSchema.findOne
        ({
            where:{ id: id }
        });

        const affectedRows = await usuario.destroy()

        return affectedRows;
    }

    async buscarTodosUsuarios()
    {
        return await this.#usuarioSchema.findAll()
    }

    async cadastrarUsuario(email, senha, username)
    {
        const usuario = new Usuario(email, senha, username)
        
        const id = await this.#usuarioSchema.create(
            {
                username: usuario.nome,
                email: usuario.email,
                password: usuario.password
            }
        )

        return id;
    }

    async atualizarUsuario(id, email, senha, username)
    {
        let rows = 0;

        const usuario = await this.#usuarioSchema.findByPk(id)

        if(usuario){

            const model = new Usuario(
                email || usuario.email,
                senha || usuario.password,
                username || usuario.username
            )

            const affectedRows = await this.#usuarioSchema.update(
                {
                    username: model.nome,
                    email: model.email,
                    password: model.senha
                }, 
                { where: { id: id } }
            )

            rows = affectedRows
        }
        
        return id, rows;
    }
}

module.exports = UsuarioService
