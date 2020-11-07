describe("even_or_odd", function() {

    it("takes an integer and return Eve or Odd", function() {
      assert.equal(even_or_odd(2), "Even");
    });
    it("takes an integer and return Eve or Odd", function() {
        assert.equal(even_or_odd(0), "Even");
    });
    it("takes an integer and return Eve or Odd", function() {
        assert.equal(even_or_odd(7), "Odd");
    });
    it("takes an integer and return Eve or Odd", function() {
        assert.equal(even_or_odd(1), "Odd");
    });
  
  });