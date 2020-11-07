describe("gimme", function() {

    it("returns the index of the numerical element that lies between the other two elements", function() {
      assert.equal(gimme([2, 3, 1]), 0);
    });
    it("returns the index of the numerical element that lies between the other two elements", function() {
        assert.equal(gimme([5, 10, 14]), 1);
    });
  
  });