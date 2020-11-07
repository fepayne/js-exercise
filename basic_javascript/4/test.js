describe("switchItUp", function() {

    it("return number beetwen 0-9 in word", function() {
      assert.equal(switchItUp(1), 'One');
    });
    it("return number beetwen 0-9 in word", function() {
        assert.equal(switchItUp(3), 'Three');
    });
    it("return number beetwen 0-9 in word", function() {
        assert.equal(switchItUp(5), 'Five');
    });
  
  });