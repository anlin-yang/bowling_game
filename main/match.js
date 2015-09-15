var Frame = require('./frame.js');
var Chance = require('./chance.js');

function Match() {
  this.frames = [];
  this.score;
  this.extraChances = [];
}

Match.prototype.addFrame = function(frameId, frameStr) {
  var frame = new Frame(frameId, frameStr);
  frame.addChance();
  frame.setChanceScore();
  this.frames.push(frame);
}

Match.prototype.scaner = function(matchScoreStr) {
  var framesAndChances = matchScoreStr.split('||');
  var allFrames = framesAndChances[0].split('|');
  var extraChances = framesAndChances[1].split('');
  var that = this;

  allFrames.forEach(function(val, index) {
    that.addFrame(index + 1, val);
  });
  extraChances.forEach(function(val, index) {
    that.extraChances.push(new Chance(index + 1, val));
  });
}
module.exports = Match;
