const express = require("express")
const usuarioRouter = require("./router/usuarioRouter.js")

const app = express()
const PORT = 3000

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//app.get("/", (req, res) => {
//    res.send("Hello World")
//})

app.use("/api/usuarios", usuarioRouter)

app.listen(PORT, () => {
    console.log(`Servidor executando na porta ${PORT}`)
})