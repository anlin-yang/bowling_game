var Frame = require('./frame.js');
var Chance = require('./chance.js');
var _ = require('lodash');

function Match() {
  this.frames = [];
  this.score;
  this.extraChances = [];
}

Match.prototype.addFrame = function(frameId, frameStr) {
  var status = '';

  frameStr.indexOf('X') !== -1 && (status = 'strike');
  frameStr.indexOf('/') !== -1 && (status = 'spare');
  var frame = new Frame(frameId, frameStr, status);
  frame.addChance();
  frame.setChanceScore();
  this.frames.push(frame);
}

Match.prototype.setChanceScore = function() {
  var that = this;
  this.extraChances.forEach(function(val) {
    val.valueChar === 'X' && val.setScore(10);
    val.valueChar === '-' && val.setScore(0);
    val.valueChar === '/' && val.setScore(10 - +that.extraChances[0].valueChar);
    /[1-9]/.test(val.valueChar) && val.setScore(+val.valueChar);
  });
};

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
  this.setChanceScore();
  this.frames.forEach(function(val) {
    val.extraScore = that.getExtraScore(val.frameId, val.status);
  });
  return this.getMatchScore();
}

Match.prototype.getStrikeScore = function(frameId) {
  var strikeExtraScore = 0;
  var i = 0;
  while (i < 2) {
    var nextFrameId = frameId + i + 1;
    if (nextFrameId > 10) {
      strikeExtraScore += +this.extraChances[nextFrameId % 10 - 1].score;
      i++;
    } else {
      var nextFrame = _.find(this.frames, function(val) {
        return val.frameId === nextFrameId;
      });
      nextFrame.chances.forEach(function(item) {
        strikeExtraScore += item.score;
      });
      i += nextFrame.chances.length;
    }
  }
  return strikeExtraScore;
};

Match.prototype.getSpareScore = function(frameId) {
  var spareExtraScore = 0;
  if (frameId === 10) {
    spareExtraScore += +this.extraChances[0].valueChar;
  } else {
    var nextFrame = _.find(this.frames, function(val) {
      return val.frameId === frameId + 1;
    });
    spareExtraScore += nextFrame.chances[0].score;
  }
  return spareExtraScore;
};

Match.prototype.getExtraScore = function(frameId, frameStatus) {
  var extraScore = 0;
  switch (frameStatus) {
    case 'strike':
      extraScore += this.getStrikeScore(frameId);
      break;
    case 'spare':
      extraScore += this.getSpareScore(frameId);
      break;
  }
  return extraScore;
};

Match.prototype.getMatchScore = function() {
  var matchScore = 0;
  this.frames.forEach(function(val) {
    matchScore += (val.getFrameScore() + val.extraScore);
  });
  return matchScore;
}

module.exports = Match;
