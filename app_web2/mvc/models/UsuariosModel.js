// Entidades
// Regras de Negócio, apenas

class Usuario
{
    #email
    #senha
    #nome
    #id

    constructor(email, senha, nome)
    {
        this.#email = email
        this.#senha = senha
        this.#nome = nome
        this.#validarEmail(email)
    }

    get id(){ return this.#id }
    get email(){ return this.#email }
    get senha(){ return this.#senha }
    get nome(){ return this.#nome }

    set id(valor) { this.#id = valor } // Alteração para verificação "se número, valide"
    set email(valor){ this.#email = valor }

    #validarEmail(email)
    {
        const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

        if(!pattern.test(email))
        {
            throw new Error("Email está fora do padrão")
        }
    }
    
}

module.exports = Usuario
