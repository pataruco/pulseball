var PULSEBALL = function() {
  this.rankingsTable = null;
};

PULSEBALL.prototype.init = function(rankingJson){
  this.rankingsTable = rankingJson;
};

PULSEBALL.prototype.addMatch = function(match){
  var  team1Name,
       team2Name;
  this.teams(match);
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
