describe("removeEveryOther", function() {

    it("Take an array and remove every second element out of that array.", function() {
        chai.expect(removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])).to.have.deep.members(['Hello', 'Hello Again']);
    });
    it("Take an array and remove every second element out of that array.", function() {
        chai.expect(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).to.have.deep.members([1, 3, 5, 7, 9]);
    });
    it("Take an array and remove every second element out of that array.", function() {
        chai.expect(removeEveryOther([[1, 2], [1, 2]])).to.have.deep.members([[1, 2]]);
    });
    it("Take an array and remove every second element out of that array.", function() {
        chai.expect(removeEveryOther([['Goodbye'], {'Great': 'Job'}])).to.have.deep.members([['Goodbye']]);
    });
    it("Take an array and remove every second element out of that array.", function() {
        chai.expect(removeEveryOther([])).to.have.deep.members([]);
    });
  
  });