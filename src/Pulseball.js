var PULSEBALL = function() {
  this.rankingsTable = null;
};

PULSEBALL.prototype.init = function(rankingJson){
  this.rankingsTable = rankingJson;
};

PULSEBALL.prototype.addMatch = function(match){
  var  team1Name;
  var  team2Name;
  var  venue = match.venue.country;
  this.teams(match);
  var team1rankingIndex = this.rankingIndex(this.addMatch.team1Name);
  var team2rankingIndex = this.rankingIndex(this.addMatch.team2Name);
  var rankingDifference = this.rateDifference(team1rankingIndex, team2rankingIndex, venue);

  this.checkRankingDifference(rankingDifference);

  var outcome = this.matchOutcome(match);
};

PULSEBALL.prototype.teams = function(match){
    var teams = match.teams;
    for (var i = 0; i < teams.length; i++) {
      switch (teams[i].id) {
        case 1:
          this.addMatch.team1Name = teams[i].name;
          break;
        case 2:
          this.addMatch.team2Name = teams[i].name;
          break;
      };
    };
};

PULSEBALL.prototype.rankingIndex = function ( team ) {
  for (var i = 0; i < this.rankingsTable.length; i++) {
    if(this.rankingsTable[i].team.name === team){
      return i;
    };
  };
};

PULSEBALL.prototype.rateDifference = function(team1Index, team2Index, venue){
  var team1 = this.rankingsTable[team1Index];
  var team2 = this.rankingsTable[team2Index];

  if(team1.team.name === venue){
    return Math.abs(parseFloat((( this.rankingsTable[team1Index].pts + 3) - (this.rankingsTable[team2Index].pts)).toFixed(2)));

  } else if (team2.team.name === venue) {
    return Math.abs(parseFloat(((this.rankingsTable[team1Index].pts) - (this.rankingsTable[team2Index].pts + 3)).toFixed(2)));

  } else {
    return Math.abs(parseFloat(((this.rankingsTable[team1Index].pts) - (this.rankingsTable[team2Index].pts)).toFixed(2)));
  };
};

PULSEBALL.prototype.checkRankingDifference = function (RankingDifference) {
  if (RankingDifference >= 10 ){
    return this.addMatch.rankingDifference = 10;
  } else {
    this.addMatch.rankingDifference;
  };
};

PULSEBALL.prototype.matchOutcome = function (match) {
  this.addMatch.outcome = match.outcome;
};
