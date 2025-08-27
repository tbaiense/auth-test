const { randomBytes } = require('node:crypto')
const express = require("express")
const bodyParser = require("body-parser")
const pool = require("./db")
const PORT = 8080
const app = express()

app.use(bodyParser.json())

const { hash } = require('./hash')

app.post("/auth", async (req, res, next) => {
    const {
        email,
        telefone,
        senha
    } = req.body

    const conn = await pool.getConnection()

    // Verificando se já existe uma conta com o email ou telefone informado
    const [ result ] = await conn.execute(
        `SELECT id, hash_senha, salt FROM conta_usuario WHERE email = ? OR telefone = ? LIMIT 1`,
        [email ?? null, telefone ?? null]
    )

    conn.release()

    if (result.length == 0) {
        res.json({ autorizado: false, motivo: "conta não identificada com email ou telefone"})
        return
    }
    
    const derivedKey = await hash(senha, result[0].salt)

    if (derivedKey == result[0].hash_senha) {
        res.json({ autorizado: true })
    } else {
        console.log([derivedKey, result[0].salt])
        res.json({ autorizado: false, motivo: "senha incorreta" })
    }
})

app.post("/contas-usuario", async (req, res, next) => {
    const {
        email,
        telefone,
        senha
    } = req.body

    const salt = randomBytes(16) // necessário para gerar 32 caracteres de salt (uma vez que 1 byte = 2 hexadecimais)
    const derivedKey = await hash(senha, salt)

    const values = [derivedKey, salt.toString('hex'), email ?? null, telefone ?? null]

    console.log(values)
    const conn = await pool.getConnection()
    const [ result ] = await conn.execute(
        `INSERT INTO conta_usuario(hash_senha, salt, email, telefone) ` + 
        `VALUES (?, ? , ? , ?)`, 
        values
    )
    conn.release()
    res.json({ contaUsuario: { id: result.insertId }})
})

app.listen(PORT, () => { 
    console.log(`Servidor escutando na porta ${PORT}`) 
})
