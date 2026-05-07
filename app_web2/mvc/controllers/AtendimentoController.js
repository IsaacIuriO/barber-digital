class AtendimentoController
{
    index(req, res)
    {
        res.render("Atendimento/AtendimentoView")
    }
}

module.exports = new AtendimentoController()
