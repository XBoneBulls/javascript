describe("Testes do objeto Spy", function () {

    var Calculadora = {
        somar: function(n1,n2) {
            return n1 + n2
        },
        subtrair: function(n1,n2) {
            return n1 - n2;
        }
    }

    beforeAll(function() {
        spyOn (Calculadora, "somar").and.callThrough();
        spyOn(Calculador, "subtrair").toBeUndefined();
    });

    /* it ("deve possuir o método somar como não definido", function() {
        expect(Calculadora.somar(1,1)).toBeUndefined();
    })
    

    Uso toHaveBeenCalled

    it ("deve chamar o metodo somar ao menos 1 vez", function( {
        Calculadora.somar(1,1);
        expect(Calculadora.somar).toHaveBeenCalled();
    }));

    

    it ("deve chamar o metodo somar duas vezes", function () {
        Calculadora.somar(1,1);
        Calculadora.somar(1,2);
        expect(Calculadora.somar).toHaveBeenCalledTimes(2);

    });

   

    it ("deve chamar o metodo somar com parâmetros válidos", function () {
        Calculadora.somar(1,1);
        Calculadora.somar(1,2);
        expect(Calculadora.somar).toHaveBeenCalledWith(1,1);
        expect(Calculadora.somar).toHaveBeenCalledWith(1,2);

   

    });

    Uso do and.callThrough



     */


});