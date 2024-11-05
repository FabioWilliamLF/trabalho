const express = require("express")
const router = express.Router();
const usuarioController = require("../controller/usuarioController.js")

router.get("/", usuarioController.listar)
router.get("/:id", usuarioController.buscarPorId)
router.post("/", usuarioController.inserir)
router.put("/:id", usuarioController.atualizar)
router.delete("/:id", usuarioController.deletar)

module.exports = router