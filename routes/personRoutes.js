const router = require("express").Router()

const { route } = require("express/lib/application")
const { json } = require("express/lib/response")
const Person = require('../models/Person')

//Create - Criação de dados
router.post('/', async (req, res) => {

    const { name, email, office, salary, approved } = req.body
    if (!name) {
        res.status(422).json({ error: "O nome é Obrigatório!" })
        return
    }
    const person = {
        name,
        email,
        office,
        salary,
        approved
    }
    try {
        await Person.create(person)

        res.status(201).json({ message: "Pessoa inserida com sucesso" })
    } catch (error) {
        res.status(500).json({ error: error });
    }

})


//Read - Leitura de dados

router.get('/', async (req, res) => {
    try {
        const people = await Person.find()
        res.status(200).json(people)

    } catch (error) {
        res.status(500).json({ error: error });
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id

    try {
        const person = await Person.findOne({ _id: id })

        if (!person) {
            res.status(422).json({ message: "Usuário não encontrado" })
            return
        }

        res.status(200).json(person)


    } catch (error) {
        res.status(500).json({ error: error });
    }
})

module.exports = router