describe("remove", function() {

    it("Remove a exclamation mark from the end of string", function() {
      assert.equal(remove("Hi!"), "Hi");
    });
    it("Remove a exclamation mark from the end of string", function() {
        assert.equal(remove("Hi!!!"), "Hi!!");
    });
    it("Remove a exclamation mark from the end of string", function() {
        assert.equal(remove("!Hi"), "!Hi");
    });
    it("Remove a exclamation mark from the end of string", function() {
        assert.equal(remove("!Hi!"), "!Hi");
    });
  
});