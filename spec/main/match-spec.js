var Match = require('../../main/match.js');

describe("Match", function() {
  var theMatch = new Match();

  describe("Constructor", function() {
    it("should create correct object.", function() {
      expect(theMatch.frames instanceof Array).toBe(true);
    });
  });

  describe("addFrame", function() {
    it("should accept frameId, frameStr as parameters to create object.", function() {
      theMatch.addFrame(1, '-8');
      expect(theMatch.frames.length).toBe(1);
      theMatch.addFrame(2, '3/');
      expect(theMatch.frames.length).toBe(2);
    });
  });
});
