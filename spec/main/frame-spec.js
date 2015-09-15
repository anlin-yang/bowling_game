var Frame = require('../../main/frame.js');

describe("Frame", function() {

  var theFrame = new Frame(1, '3/');

  describe("Constructor", function() {
    it("should accept frameId and valueStr as prarmeters to create object.", function() {
      expect(theFrame.frameId).toBe(1);
      expect(theFrame.valueStr).toBe('3/');
    });
  });
});
