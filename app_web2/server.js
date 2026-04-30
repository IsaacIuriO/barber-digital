const express = require('express')

class Server
{
    app
    port

    constructor(port)
    {
        this.app = express()
        this.port = port
    }

    listen()
    {
        this.app.listen(this.port, () => {
            console.log("Servidor Online...")
        })
    }
}

// module.exports -> serve para exportar objetos de um arquivo para outros 
module.exports = new Server()
