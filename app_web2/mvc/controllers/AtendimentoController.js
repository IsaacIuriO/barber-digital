const AtendimentoService = require("../../service/AtendimentoService");
const UsuarioService = require("../../service/UsuarioService");

class AtendimentoController
{
    constructor()
    {
        this.atendimentoService = new AtendimentoService()
        this.usuarioService = new UsuarioService()
    }

    async atendimentoListView(req, res)
    {
        const atendimentos = await this.atendimentoService.buscarTodosAtendimentos()
        res.render("Atendimento/ListView", { atendimentos: atendimentos })
    }

    async atendimentoCreateView(req, res)
    {
        const usuarios = await this.usuarioService.buscarTodosUsuarios()
        res.render("Atendimento/CreateView", { usuarios: usuarios })
    }

    async atendimentoEditView(req, res)
    {
        const atendimento = await this.atendimentoService.buscarAtendimento(req.params.id)
        const usuarios = await this.usuarioService.buscarTodosUsuarios()
        res.render("Atendimento/EditView", { atendimento: atendimento, usuarios: usuarios })
    }

    async atendimentoPostAsync(req, res)
    {
        const id = await this.atendimentoService.cadastrarAtendimento(
            req.body.nomeCliente,
            req.body.telefone,
            req.body.horarioAtendimento,
            req.body.dataAtendimento,
            req.body.dataNascimento,
            req.body.tipoServico,
            req.body.profissional
        )

        res.json({ id: id })
    }

    async atendimentoPutAsync(req, res)
    {
        const affectedRows = await this.atendimentoService.atualizarAtendimento(
            req.body.id,
            req.body.nomeCliente,
            req.body.telefone,
            req.body.horarioAtendimento,
            req.body.dataAtendimento,
            req.body.dataNascimento,
            req.body.tipoServico,
            req.body.profissional
        )

        res.json({ affectedRows: affectedRows })
    }

    async atendimentoDeleteAsync(req, res)
    {
        const affectedRows = await this.atendimentoService.deletarAtendimento(req.params.id)

        res.json({ affectedRows: affectedRows })
    }

}

module.exports = new AtendimentoController()
