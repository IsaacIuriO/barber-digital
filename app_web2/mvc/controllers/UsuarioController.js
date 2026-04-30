class UsuarioController
{

    index(req, res)
    {
        res.render("Usuario/UsuarioView")
    }

}

module.exports = new UsuarioController()
