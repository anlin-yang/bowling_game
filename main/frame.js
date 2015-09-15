function Frame(frameId, valueStr) {
  this.frameId = frameId;
  this.valueStr = valueStr;
  this.score = 0;
  this.chances = [];
  this.extraScore = 0;
}

module.exports = Frame;
