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

module.exports = Frame;
