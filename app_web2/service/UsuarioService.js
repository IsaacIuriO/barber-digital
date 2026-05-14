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
        const dado = await this.#usuarioSchema.findOne
        ({
            where:{ id: id }
        });

        if(!dado){
            return null;
        }

        const usuario = new Usuario(dado.email, dado.password, dado.username)

        usuario.id = dado.id
        
        return usuario;
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
        const usuarios = []
        const dados = await this.#usuarioSchema.findAll();

        for(const usuario of dados)
        {
            const u = new Usuario(
                    usuario.email,
                    usuario.password,
                    usuario.username
                )

            u.id = usuario.id
            usuarios.push(u)
        }

        return usuarios
    }

    async cadastrarUsuario(username, email, senha)
    {
        const usuario = new Usuario(email, senha, username)
        
        const id = await this.#usuarioSchema.create(
            {
                email: usuario.email,
                password: usuario.senha,
                username: usuario.nome,
            }
        )

        return id;
    }

    async atualizarUsuario(id, username, email, senha)
    {
        let rows = 0;

        const usuario = await this.#usuarioSchema.buscarUsuario(id)

        if(usuario){

            const model = new Usuario(
                email || usuario.email,
                senha || usuario.password,
                username || usuario.username,
            )

            const affectedRows = await this.#usuarioSchema.update(
                {
                    username: model.nome,
                    email: model.email,
                    password: model.senha,
                }, 
                { where: { id: id } }
            )

            rows = affectedRows
        }
        
        return rows;
    }
}

module.exports = UsuarioService
