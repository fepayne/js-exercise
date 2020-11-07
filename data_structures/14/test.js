describe("towerBuilder", function() {

    it("takes an array full of junk and return index of 'needle'", function() {
        chai.expect(towerBuilder(1)).to.have.deep.members(['*']);
        chai.expect(towerBuilder(2)).to.have.deep.members([' * ', 
                                                           '***']);
        chai.expect(towerBuilder(3)).to.have.deep.members(["  *  ",
                                                           " *** ",
                                                           "*****"]);
        chai.expect(towerBuilder(6)).to.have.deep.members(['     *     ',
                                                           '    ***    ',
                                                           '   *****   ',
                                                           '  *******  ',
                                                           ' ********* ',
                                                           '***********']);
    });
  
  });