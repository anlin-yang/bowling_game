var Frame = require('../../main/frame.js');

describe("Frame", function() {

  var theFrame = new Frame(1, '3/');

  describe("Constructor", function() {
    it("should accept frameId and valueStr as prarmeters to create object.", function() {
      expect(theFrame.frameId).toBe(1);
      expect(theFrame.valueStr).toBe('3/');
    });
  });

  describe("addChance", function() {
    it("should add object Chance to Frame attribute chances.", function() {
      theFrame.addChance();
      expect(theFrame.chances.length).toBe(2);
    });
  });

  describe("setChanceScore", function() {
    it("according to valueChar to set correct chance score.", function() {
      theFrame.setChanceScore();
      expect(theFrame.chances[0].score).toBe(3);
      expect(theFrame.chances[1].score).toBe(7);
    });
  });

  describe("getFrameScore", function() {
    it("should get correct frame score include all chances of frame.", function() {
      expect(theFrame.getFrameScore()).toBe(10);

      var theFrame2 = new Frame(2, '-7');
      theFrame2.addChance();
      theFrame2.setChanceScore();
      expect(theFrame2.getFrameScore()).toBe(7);
    });
  });

});
