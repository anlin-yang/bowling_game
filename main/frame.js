var Chance = require('./chance.js');

function Frame(frameId, valueStr) {
  this.frameId = frameId;
  this.valueStr = valueStr;
  this.score = 0;
  this.chances = [];
  this.extraScore = 0;
}

Frame.prototype.addChance = function() {
  var chances = this.valueStr.split('');
  var that = this;
  chances.forEach(function(val, index) {
    that.chances.push(new Chance(index + 1, val));
  });
};

Frame.prototype.setChanceScore = function() {
  var that = this;
  this.chances.forEach(function(val) {
    val.valueChar === 'X' && val.setScore(10);
    val.valueChar === '-' && val.setScore(0);
    val.valueChar === '/' && val.setScore(10 - +that.chances[0].valueChar);
    /[1-9]/.test(val.valueChar) && val.setScore(+val.valueChar);
  });
};

module.exports = Frame;
