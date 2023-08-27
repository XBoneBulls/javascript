describe("Teste do toBeGreaterThan", function () {
    it ("demonstrar o uso do toBeGreaterThan", function () {

        var PI = 3.1415; 

        expect(4).toBeGreaterThan(PI);
        expect(5).toBeGreaterThan(PI);
        expect(3).not.toBeGreaterThan(PI);
    })
})