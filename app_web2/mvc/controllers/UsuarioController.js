const UsuarioService = require("../../service/UsuarioService");

class UsuarioController
{
    constructor()
    {
        this.usuarioService = new UsuarioService()
    }

    index(req, res)
    {
        res.render("Usuario/UsuarioView")
    }

    async usuarioListView(req, res)
    {
        const usuarios = await this.usuarioService.buscarTodosUsuarios()
        res.render("Usuario/ListView", { usuarios: usuarios })
    }

    usuarioCreateView(req, res)
    {
        res.render("Usuario/CreateView")
    }

    async usuarioEditView(req, res)
    {
        const usuario = await this.usuarioService.buscarUsuario(req.params.id)
        res.render("Usuario/EditView", { usuario: usuario })
    }

    async usuarioPostAsync(req, res)
    {
        const id = await this.usuarioService.cadastrarUsuario(
            req.body.username,
            req.body.email,
            req.body.senha
        )

        res.json({ id: id })
    }

    async usuarioPutAsync(req, res)
    {
        const affectedRows = await this.usuarioService.atualizarUsuario(
            req.body.id,
            req.body.username,
            req.body.email,
            req.body.senha
        )

        res.json({ affectedRows: affectedRows })
    }

    async usuarioDeleteAsync(req, res)
    {
        const affectedRows = await this.usuarioService.deletarUsuario(req.params.id)

        res.json({ affectedRows: affectedRows })
    }

}

module.exports = new UsuarioController()
