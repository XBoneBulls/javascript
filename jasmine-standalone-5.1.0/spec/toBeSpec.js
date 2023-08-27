describe("Comparador toBe", function() {
    it ("deve validar o uso do toBe", function() {
        var obj1 = {valor: true};
        var obj2 = {valor: false};

        expect(true).toBe(true);
        expect("Teste").toBe("Teste");
        expect(obj1).not.toBe(obj2);
    });
});