describe("sortByLength", function() {

    it("returns a sorted array", function() {
      chai.expect(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"])).to.have.deep.members(["Eyes", "Glasses", "Monocles", "Telescopes"]);
    });
  
  });