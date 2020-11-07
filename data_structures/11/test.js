describe("arrayDiff", function() {

    it("takes an array full of junk and return index of 'needle'", function() {
        chai.expect(arrayDiff([1,2],[1])).to.have.deep.members([2]);
        chai.expect(arrayDiff([1,2],[1,2])).to.have.deep.members([]);
        chai.expect(arrayDiff([1,2,2,2,3],[2])).to.have.deep.members([1,3]);
    });
  
  });