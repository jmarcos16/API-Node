const express = require('express')
const moogoose = require('mongoose')
const app = express()
const port = 3000

// Habilitando JSON na aplicação
app.use(
    express.urlencoded({
        extended: true,
    })
)
app.use(express.json())

//Chamadas de rotas da API
const personRoutes = require("./routes/personRoutes")
app.use('/person', personRoutes)

//Conexão com o banco de dados

const DB_USER = 'root'
const DB_PASSWORD = 'malukete1'
moogoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.mkjflio.mongodb.net/bancoapi?retryWrites=true&w=majority`)
    .then(() => {
        console.log("Conectamos ao MongoDB");
        app.listen(port)
    })
    .catch((erro) => console.log(err))
