var Chance = require('../../main/chance.js');

describe("Chance", function() {
  describe("Constructor", function() {
    it("should accept chanceId and valueChar as parameters to create object.", function() {
      var theChance = new Chance(1, 'X');
      expect(theChance.chanceId).toBe(1);
      expect(theChance.valueChar).toBe('X');
    });
  });
});
