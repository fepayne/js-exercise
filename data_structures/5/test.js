describe("sumDigits", function() {

    it("akes a number and returns the sum of number's decimal digits", function() {
        assert.equal(sumDigits(10), 1);
    });
    it("akes a number and returns the sum of number's decimal digits", function() {
        assert.equal(sumDigits(99), 18);
    });
    it("akes a number and returns the sum of number's decimal digits", function() {
        assert.equal(sumDigits(-32), 5);
    });
  
  });