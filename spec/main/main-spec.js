var Main = require('../../main/main.js');

describe("Main", function() {
  describe("mainEnter", function() {
    it("should accept match string as parameter return all match score.", function() {
      var theMain1 = new Main();
      var matchStr1 = 'X|X|X|X|X|X|X|X|X|X||XX';
      expect(theMain1.mainEnter(matchStr1)).toBe(300);

      var theMain2 = new Main();
      var matchStr2 = '9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||';
      expect(theMain2.mainEnter(matchStr2)).toBe(90);

      var theMain3 = new Main();
      var matchStr3 = '5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5';
      expect(theMain3.mainEnter(matchStr3)).toBe(150);

      var theMain4 = new Main();
      var matchStr4 = 'X|7/|9-|X|-8|8/|-6|X|X|X||81';
      expect(theMain4.mainEnter(matchStr4)).toBe(167);
    });
  });
});
