class PULSEBALL {
  constructor () {
    this.rankingsTable = null;
  }

  init (rankingJson){
    this.rankingsTable = rankingJson;
  }

  addMatch(match){
    let  team1Name;
    let  team2Name;
    let  venue = match.venue.country;
    let  outcome = match.outcome;
    this.teams(match);
    let team1rankingIndex = this.rankingIndex(this.addMatch.team1Name);
    let team2rankingIndex = this.rankingIndex(this.addMatch.team2Name);
    let rankingDifference = this.rateDifference(team1rankingIndex, team2rankingIndex, venue);

    this.checkRankingDifference(rankingDifference);

    this.updateTeamScores(team1rankingIndex, team2rankingIndex, rankingDifference, outcome);

    this.sortTable();
  }

  teams(match) {
    let teams = match.teams;
    for (let i = 0; i < teams.length; i++) {
      switch (teams[i].id) {
        case 1:
          this.addMatch.team2Name = teams[i].name;
          break;
        case 2:
          this.addMatch.team1Name = teams[i].name;
          break;
      };
    };
  }

  rankingIndex(team) {
    for (let i = 0; i < this.rankingsTable.length; i++) {
      if(this.rankingsTable[i].team.name === team){
        return i;
      };
    };
  }

  rateDifference(team1Index, team2Index, venue) {
    let team1 = this.rankingsTable[team1Index];
    let team2 = this.rankingsTable[team2Index];

    if(team1.team.name === venue){
      return Math.abs(parseFloat((( this.rankingsTable[team1Index].pts + 3) - (this.rankingsTable[team2Index].pts)).toFixed(2)));

    } else if (team2.team.name === venue) {

      return Math.abs(parseFloat(((this.rankingsTable[team1Index].pts) - (this.rankingsTable[team2Index].pts + 3)).toFixed(2)));

    } else {

      return Math.abs(parseFloat(((this.rankingsTable[team1Index].pts) - (this.rankingsTable[team2Index].pts)).toFixed(2)));
    };
  }

  checkRankingDifference(rankingDifference){
    if (rankingDifference >= 10 ){
      return this.addMatch.rankingDifference = 10;

    } else if (rankingDifference <= 10) {
      return this.addMatch.rankingDifference = -10;

    } else {
      this.addMatch.rankingDifference;
    };
  }

  updateTeamScores(team1Index, team2Index, rankingDifference, outcome){
    switch (outcome) {
      case 'points A':
        var points = parseFloat((1 - ( rankingDifference / 10 )).toFixed(2));
        this.rankingsTable[team1Index].pts += points;
        this.rankingsTable[team2Index].pts -= points;
        break;

      case 'B':
        var points = parseFloat((1 + ( rankingDifference / 10 )).toFixed(2));
        this.rankingsTable[team1Index].pts -= points;
        this.rankingsTable[team2Index].pts += points;
        break;

      case 'D':
        var points = parseFloat((rankingDifference / 10).toFixed(2));
        this.rankingsTable[team1Index].pts += points;
        this.rankingsTable[team2Index].pts += points;
        break;

      case 'N':
        var points = 0;
        this.rankingsTable[team1Index].pts += points;
        this.rankingsTable[team2Index].pts += points;
        break;
    };
  }
  
  sortTable(){
    //sort by points
    this.rankingsTable.sort(function(a, b){
          return parseFloat(a.pts).toFixed(2) - parseFloat(b.pts).toFixed(2);
    }).reverse();
    //then change positions
    for (let i = 0; i < this.rankingsTable.length; i++) {
      this.rankingsTable[i].pos = i + 1;
    };
  }
}
