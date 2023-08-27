const router = require('express').Router()

const Person = require('../models/Person')


router.post('/', async (req, res) => {


    //usando destructoring para criar três variáveis que vão receber dados do corpo da requisição
    const {name, salary, approved} = req.body
    
    if(!name) {
        res.status(422).json({error: 'O nome é obrigatório'})
    }
    
    const person = {
        name,
        salary,
        approved
    }
    
    try {
        //criando dados
        await Person.create(person)
    
        res.status(201).json({message: 'Pessoa inserida no sistema com sucesso'})
    
    } catch (error) {
        res.status(500).json({error: error})
    }
    
    })
    
    //leitura de dados
     // para a api ser rest tem que responder a mesma entidade '/' variando apenas o verbo

    router.get('/', async (req, res) => {
        try {

            // esse comando .find retorna todos os dados da collection (equivale a tabela do modelo relacional)
            const people = await Person.find()
            res.status(200).json(people)

        } catch (error) {
            res.status(500).json({error: error})
        }
    })

    //leitura de dados dinâmica
   

    router.get('/:id', async (req, res) => {

        //extrair o dado da requisição, pela url = req.params

        const id = req.params.id


        try {

            const person = await Person.findOne({ _id: id})

            if(!person) {
                res.status(422).json({message: 'O usuário não foi encontrado'})
                return
            }

            res.status(200).json(person)

        } catch (error) {

            res.status(500).json({error: error})

        }
    })

    // update - atualização de dados (put, patch)
    // o put espera que mande o objeto completo para fazer a atualização
    // o patch é para atualizações parciais do objeto

    router.patch('/:id', async (req, res) => {

        const id = req.params.id

        const {name, salary, approved} = req.body

        const person = {
            name,
            salary,
            approved,
        }

        try [

           const updatedPerson = await Person.updateOne({_id: id}, person)

           if(updatedPerson.matchedCount === 0) {
            res.status(422).json({message: 'O usuário não foi encontrado'})
            return
           }

        ] catch (error) {
            res.status(500).json({error: error})
        }
    })

    // Delete - deletar dados
    router.delete('/:id', async (req, res) => {
        const id = req.params.id

        const person = await Person.findOne({ _id: id})

        if (!person) {
            res.status(422).json({message: 'O usuário não foi encontrado!'})
            return
        }

        try {

            await Person.deleteOne({_id:id})

            res.status(200)json({message: 'Usuário removido com sucesso'})

        } catch (error) {

            res.status(500).json({error: error})
        }
    })
    

    module.exports = router