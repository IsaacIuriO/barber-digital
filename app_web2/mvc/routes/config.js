const { Router } = require("express")
const UsuarioController = require("../controllers/UsuarioController")

const router = Router()

router.get("/user/index", UsuarioController.index)

module.exports = router
