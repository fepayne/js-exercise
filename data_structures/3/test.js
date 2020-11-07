describe("digitize", function() {

    it("возводит в степень n", function() {
      chai.expect(digitize(348597)).to.have.deep.members([7,9,5,8,4,3]);
    });
  
  });