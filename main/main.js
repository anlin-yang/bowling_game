var Match = require('./match.js');

function Main() {}

Main.prototype.mainEnter = function(matchScoreStr) {
  var match = new Match();
  var matchScore = match.scaner(matchScoreStr);
  return matchScore;
}

module.exports = Main;
