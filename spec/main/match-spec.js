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

  describe("getStrikeScore", function() {
    it("should accept frameId as parameter to get  extra score of strike status.", function() {
      var theMatch2 = new Match();
      var scoreStr = 'X|7/|9-|X|-8|8/|-6|X|X|X||81';
      theMatch2.scaner(scoreStr);
      expect(theMatch2.getStrikeScore(8)).toBe(20);
      expect(theMatch2.getStrikeScore(9)).toBe(18);
      expect(theMatch2.getStrikeScore(10)).toBe(9);
    });
  });

  describe("getSpareScore", function() {
    it("should accept frameId as parameter to get extra score of spare status.", function() {
      var theMatch2 = new Match();
      var scoreStr = 'X|7/|9-|X|-8|8/|-6|X|X|X||81';
      theMatch2.scaner(scoreStr);
      expect(theMatch2.getSpareScore(2)).toBe(9);
      expect(theMatch2.getSpareScore(6)).toBe(0);

      var theMatch3 = new Match();
      var scoreStr = '5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5';
      theMatch3.scaner(scoreStr);
      expect(theMatch3.getSpareScore(2)).toBe(5);
      expect(theMatch3.getSpareScore(10)).toBe(5);
    });
  });

  describe("getExtraScore", function() {
    it("should accept frameId, frameStatus as parameters to get extra score.", function() {
      var theMatch2 = new Match();
      var scoreStr = 'X|7/|9-|X|-8|8/|-6|X|X|X||81';
      theMatch2.scaner(scoreStr);
      expect(theMatch2.getExtraScore(1, 'strike')).toBe(10);
      expect(theMatch2.getExtraScore(6, 'spare')).toBe(0);
      expect(theMatch2.getExtraScore(10, 'strike')).toBe(9);
      expect(theMatch2.getExtraScore(9, 'strike')).toBe(18);
    });
  });

  describe("getMatchScore", function() {
    it("should return correct match score.", function() {
      var theMatch2 = new Match();
      var scoreStr = 'X|7/|9-|X|-8|8/|-6|X|X|X||81';
      theMatch2.scaner(scoreStr);
      expect(theMatch2.getMatchScore()).toBe(167);

      var theMatch3 = new Match();
      scoreStr = '9-|9-|9-|9-|9-|9-|9-|9-|9-|9-|| ';
      theMatch3.scaner(scoreStr);
      expect(theMatch3.getMatchScore()).toBe(90);

      var theMatch4 = new Match();
      scoreStr = 'X|X|X|X|X|X|X|X|X|X||XX';
      theMatch4.scaner(scoreStr);
      expect(2).toBe(2)
      expect(theMatch4.getMatchScore()).toBe(300);
    });
  });

});
