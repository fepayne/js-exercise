describe("xor", function() {

    it("Exclusive 'or'", function() {
      assert.equal(xor(false, false), false);
    });
    it("Exclusive 'or'", function() {
        assert.equal(xor(true, false), true);
    });
    it("Exclusive 'or'", function() {
        assert.equal(xor(true, false), true);
    });
    it("Exclusive 'or'", function() {
        assert.equal(xor(true, true), false);
    });
  
  });