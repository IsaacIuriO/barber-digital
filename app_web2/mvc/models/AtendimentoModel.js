class Atendimento
{
    #id
    #nomeCliente
    #telefone
    #horarioAtendimento
    #dataAtendimento
    #dataNascimento
    #tipoServico
    #profissional

    constructor(nomeCliente, telefone, horarioAtendimento, dataAtendimento, dataNascimento, tipoServico, profissional)
    {
        this.#nomeCliente = nomeCliente
        this.#telefone = telefone
        this.#horarioAtendimento = horarioAtendimento
        this.#dataAtendimento = dataAtendimento
        this.#dataNascimento = dataNascimento
        this.#tipoServico = tipoServico
        this.#profissional = profissional
    }

    get id (){ return this.#id; }
    get nomeCliente (){ return this.#nomeCliente; }
    get telefone (){ return this.#telefone; }
    get horarioAtendimento (){ return this.#horarioAtendimento; }
    get dataAtendimento (){ return this.#dataAtendimento; }
    get dataNascimento (){ return this.#dataNascimento; }
    get tipoServico (){ return this.#tipoServico; }
    get profissional (){ return this.#profissional; }

    set id (valor){ this.#id = valor; }
    set nomeCliente (valor){ this.#nomeCliente = valor; }
    set telefone (valor){ this.#telefone = valor; }
    set horarioAtendimento (valor){ this.#horarioAtendimento = valor; }
    set dataAtendimento (valor){ this.#dataAtendimento = valor; }
    set tipoServico (valor){ this.#tipoServico = valor; }
    set profissional (valor){ this.#profissional = valor; }

}

module.exports = Atendimento
