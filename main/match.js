var Frame = require('./frame.js');

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

module.exports = Match;
