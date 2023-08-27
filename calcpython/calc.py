numero1 = 0
numero2 = 0
resultado = 0
operacao = ''

while True:
    numero1 = int(input("Digite o numero 1"))
    operacao = input('Digite a operacao: ')
    numero2 = int(input('Digite o numero 2')

    if operacao == '+':
        resultado = numero1 + numero2
    elif operacao == '-':
        resultado = numero1 - numero2
    elif operacao == '*':
        resultado = numero1 * numero2
    elif operacao == '/':
        resultado = numero1 / numero2
    else:
        resultado = 'Operacao inválida'


    print(str(numero1) + ' ' + str(operacao) + ' ' + str(numero2) + ' = ' + str(resultado)