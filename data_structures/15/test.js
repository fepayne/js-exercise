describe("likes", function() {

    it("bla bla bla", function() {
        assert.equal(likes([]), 'no one likes this');    
    });
    it("bla bla bla", function() {
        assert.equal(likes(['Peter']), 'Peter likes this');    
    });
    it("bla bla bla", function() {
        assert.equal(likes(["Jacob", "Alex"]), 'Jacob and Alex like this');    
    });
    it("bla bla bla", function() {
        assert.equal(likes(["Alex", "Jacob", "Mark", "Max"]), 'Alex, Jacob and 2 others like this');    
    });
  
  });