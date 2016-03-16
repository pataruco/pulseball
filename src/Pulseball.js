var PULSEBALL = function() {
  this.rankingsTable = null;
};

PULSEBALL.prototype.init = function(rankingJson){
  this.rankingsTable = rankingJson;
};

PULSEBALL.prototype.addMatch = function(match){
  var  team1Name;
  var  team2Name;
  var  venue;
  this.teams(match);
  this.whereIsPlayed(match);

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

PULSEBALL.prototype.whereIsPlayed = function (match) {
  this.addMatch.venue = match.venue.country;
};

PULSEBALL.prototype.rankingIndex = function ( team ) {

};
