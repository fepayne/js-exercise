describe("countBy", function() {

    it("ist of length (n) with multiples of (x)", function() {
        chai.expect(countBy(1,10)).to.have.deep.members([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
    it("ist of length (n) with multiples of (x)", function() {
        chai.expect(countBy(2,5)).to.have.deep.members([2, 4, 6, 8, 10]);
    });
  
  });