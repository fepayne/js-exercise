describe("xor", function() {

    it("Exclusive 'or' for false and false", function() {
      assert.equal(xor(false, false), false);
    });
    it("Exclusive 'or' for true and false", function() {
        assert.equal(xor(true, false), true);
    });
    it("Exclusive 'or' for false and true", function() {
        assert.equal(xor(false, true), true);
    });
    it("Exclusive 'or' for true and true", function() {
        assert.equal(xor(true, true), false);
    });
  
  });