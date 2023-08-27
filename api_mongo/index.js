//configuração inicial
const express = require('express') //importa a dependência
const mongoose = require('mongoose')
const app = express()  //inicializa a dependência no projeto
require('dotenv').config()


//forma de ler JSON por meio de middleware (recursos executados entre as requisições e respostas)
//esse abaixo é um middleware
app.use(
    //para ler json o express usa o comando abaixo
    express.urlencoded({
        extended: true
    })
)
//esse é um outro middleware que permitirá ler json e responder com json
app.use(express.json())

//rotas da API

const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

//rota inicial / endpoint

app.get('/', (req,res) => {

    //mostrar requisição

    res.json({message: 'Oi Express'})
})

//entregar uma porta de forma que o navegador consiga mostrar o que está rodando

mongoose.connect(
    'mongodb+srv://pedro:UsfiZjOevy6zp3fX@cluster1.jukaryu.mongodb.net/bancodaapi?retryWrites=true&w=majority'
)
.then(() => {
    console.log("Conectamos ao MongoDB!")
    app.listen(3000)
})
.catch((erro) => console.log(erro))
