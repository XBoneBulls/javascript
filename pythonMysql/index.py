import mysql.connector

conexao = mysql.connector.connect(
    host='localhost',
    user='root',
    password='123456',
    database='bdyoutube',
)

cursor = conexao.cursor()

# CRUD

#CREATE

#nome_produto = "todynho"
#valor = 3

#comando = f'INSERT INTO vendas (nome_produto, valor) VALUES ("{nome_produto}", {valor})'
#cursor.execute(comando)
#conexao.commit() #editar o banco de dados, não utilizado para ler dados, só para incluir, alterar ou deletar

#READ

#comando = 'SELECT * FROM vendas'
#cursor.execute(comando)
#resultado = cursor.fetchall()
#print(resultado)

#UPDATE

#nome_produto = "todynho"
#valor = 6
#comando = f'UPDATE vendas SET valor = {valor} WHERE nome_produto = "{nome_produto}"'
#cursor.execute(comando)
#conexao.commit() #editar o banco de dados, não utilizado para ler dados, só para incluir, alterar ou deletar

#DELETE

nome_produto = "todynho"
comando = f'DELETE FROM vendas WHERE nome_produto = "{nome_produto}"'
cursor.execute(comando)
conexao.commit() #editar o banco de dados, não utilizado para ler dados, só para incluir, alterar ou deletar

cursor.close()

conexao.close()