const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', '123456', {
    host: "localhost"
    dialect: 'mysql'
})

//o comando abaixo cria a tabela postagem
const Postagem = sequelize.define('postagens', {
    titulo:{
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
}
)

//para inserir uma nova postagem use o comando abaixo

Postagem.create({
    titulo: "novo titulo",
    conteudo: "novo conteudo"
})

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTERGER
    },
    email: {
        type: Sequelize.STRING
    }
})

Usuario.create({
    nome: "victor",
    sobrenome: "Lima"
    idade: 20,
    email: "novoemail@mail.com"
})
//mas para de fato criar a tabela forçando a sua criação, use o comando abaixo

Postagem.sync({force: true})
Usuario.sync({force: true})