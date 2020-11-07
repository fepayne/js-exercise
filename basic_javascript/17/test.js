describe("functionName", function() {

    it("Return function name of someFunction()", function() {
      assert.equal(functionName(function someFunction(){}), 
                   "someFunction");
    });
    it("Return function name of anotherFunction()", function() {
        assert.equal(functionName(function anotherFunction(){}), 
                     "anotherFunction");
    });
  
  });