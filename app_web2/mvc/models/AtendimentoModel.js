class Atendimento
{
    nomeCliente
    telefone
    dataHora
    servico
    profissional

    constructor(nomeCliente, telefone, dataHora, servico, profissional)
    {
        this.nomeCliente = nomeCliente
        this.telefone = telefone
        this.dataHora = dataHora
        this.servico = servico
        this.profissional = profissional
    }
}

module.exports = Atendimento
