var Match = require('../../main/match.js');

describe("Match", function() {
  var theMatch = new Match();

  describe("Constructor", function() {
    it("should create correct object.", function() {
      expect(theMatch.frames instanceof Array).toBe(true);
    });
  });
});
