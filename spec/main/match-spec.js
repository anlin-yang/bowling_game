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

  describe("scaner", function() {
    it("should accept matchScoreStr as parameter to analysis score string and add attribute.", function() {
      var theMatch2 = new Match();
      var scoreStr = 'X|7/|9-|X|-8|8/|-6|X|X|X||81';
      theMatch2.scaner(scoreStr);
      expect(theMatch2.frames.length).toBe(10);
      expect(theMatch2.extraChances.length).toBe(2);

      var theMatch3 = new Match();
      scoreStr = '9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||';
      theMatch3.scaner(scoreStr);
      expect(theMatch3.frames.length).toBe(10);
      expect(theMatch3.extraChances.length).toBe(0);
    });
  });
});
