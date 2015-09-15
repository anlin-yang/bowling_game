function Chance(chanceId, valueChar) {
  this.chanceId = chanceId;
  this.valueChar = valueChar;
  this.score = 0;
}

Chance.prototype.setScore = function(score) {
  this.score = score;
}

module.exports = Chance;
