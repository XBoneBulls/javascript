require('dotenv').config({path:'variaveis.env'}) 
const express = require('express')
const cors = require('cors'); //permite usar APIs
const bodyParser = require('body-parser');  //converte o body para vários outros formatos

const routes = require('./routes')
const server = express();
server.use(cors())
server.use(bodyParser.urlencoded({extended:false}));

server.use('/api', routes); //faz com que todas as rotas tenham o prefixo /api

server.listen(process.env.PORT, ()=>{
    console.log(`Servidor rodando em: http://localhost: ${process.env.PORT}`);
})