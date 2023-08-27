const CarroService = require('../services/CarroService')

module.exports = {

    buscarTodos: async (rep, res) => {
        let json = {error: '', result: []}

        let carros = await CarroService.buscarTodos()

        for (let i in carros){
            json.result.push({
                codigo:carros[i].codigo,
                descricao: carros[i].modelo
            })
        }
        res.json(json)
        })
    },

    buscarUm: async(req,res) => {
        let json = {error: '', result: {}}

        let codigo = req.params.codigo
        let carro = await CarroService.buscarUm(codigo)

        //se tiver algum carro ele vai ser guardado no json por meio desse comando abaixo
        if(carro){
            json.result = carro;
        }

        //se não tiver carros não vai retornar nada

        res.json(json)


    },

    inserir: async(req,res) => {
        let json = {error: '', result: {}}

        let modelo = req.body.modelo
        let placa = req.body.placa

        

        //se tiver algum carro ele vai ser guardado no json por meio desse comando abaixo
        if(modelo && placa){
            let carroCodigo = await CarroService.inserir(modelo, placa)
            json.result = {
                codigo: carroCodigoo,
                modelo,
                placa
            };
        } else {
            json.error = 'Campos não enviados'
        }

        //se não tiver carros não vai retornar nada

        res.json(json)


    },

    alterar: async(req,res) => {
        let json = {error: '', result: {}}

        //params é do que pega do link do navegador, já o body é o que pega da tela mesmo

        let codigo = req.params.codigo
        let modelo = req.body.modelo
        let placa = req.body.placa

        

        //se tiver algum carro ele vai ser guardado no json por meio desse comando abaixo
        if(modelo && placa && codigo){
            await CarroService.alterar(codigo, modelo, placa)
            json.result = {
                codigo,
                modelo,
                placa
            };
        } else {
            json.error = 'Campos não enviados'
        }

        //se não tiver carros não vai retornar nada

        res.json(json)


    },

    excluir: async(req,res) => {
        let json = {error: '', result: {}}

        //params é do que pega do link do navegador, já o body é o que pega da tela mesmo


        await CarroService.excluir(req.params.codigo)

        res.json(json)
        
    }
}