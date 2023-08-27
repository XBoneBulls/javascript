describe("Teste do toCotain", function() {
    it ("deve demonstrar o uso do toCotain", function () {
        var texto = "Meu nome é Marcio";
        var frutas = ["laranja", "banana", "pera"];

        expect(texto).toContain("Marcio");
        expect(texto).not.toContain("marcio");

        expect(frutas).toContain("laranja");
        expect(frutas).not.toContain("uva");
    })
})