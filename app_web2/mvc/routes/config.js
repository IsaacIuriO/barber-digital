const { Router } = require("express")
const UsuarioController = require("../controllers/UsuarioController")

const router = Router()

router.get("/user", (req, res) => UsuarioController.index(req, res))
router.post("/user/create", (req, res) => UsuarioController.usuarioPostAsync(req, res))
router.get("/user/create", (req, res) => UsuarioController.usuarioCreateView(req, res))
router.put("/user/edit", (req, res) => UsuarioController.usuarioPutAsync(req, res))
router.get("/user/edit/:id", (req, res) => UsuarioController.usuarioEditView(req, res))
router.get("/user/list", (req, res) => UsuarioController.usuarioListView(req, res))
router.delete("/user/delete/:id", (req, res) => UsuarioController.usuarioDeleteAsync(req, res))

module.exports = router
