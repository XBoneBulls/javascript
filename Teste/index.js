const express = require("express");
const app = express();


//configuração da rota principal do backend

app.get("/",function(req,res){
    res.send("Seja bem-vindo ao app")
})

app.get("/sobre", function(req,res){
    console.log("Minha pagina sobre")
})






//configurando o servidor http na porta 8081 com uma função de callback

app.listen(8081, function(){
    console.log("Servidor rodando na porta")
})