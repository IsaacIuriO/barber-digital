const UsuarioService = require("../../service/UsuarioService");
class UsuarioController
{
    constructor()
    {
        this.usuarioService = new UsuarioService()
    }

    async index(req, res)
    {
        const usuarios = await this.usuarioService.buscarUsuario(req.params.id)
        res.render("Usuario/UsuarioView", { usuarios })
    }
}

module.exports = new UsuarioController()
