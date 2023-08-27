const express = require('express');
const router = express.Router();

const CarroController = require('./controllers/CarroController')

//para pegar todos os carros
router.get('/carros', CarroController.buscarTodos)

//para pegar apenas 1 carro
router.get('/carro/:codigo', CarroController.buscarUm)

//para inserir um novo registro no banco
router.post('/carro', CarroController.inserir)

//para alterar dados do banco

router.put('/carro/:codigo', CarroController.alterar)

//para deletar dados do banco

router.delete('/carro/:codigo', CarroController.excluir)

module.exports = router;