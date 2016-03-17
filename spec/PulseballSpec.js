describe("PULSEBALL", function() {
  var pulseball,
      sampleMatch,
      initialRankingTable,
      finalRankingTable,
      unsortedFinalRankingTable,
      tableGreaterPlusTen;

  beforeEach(function() {
    pulseball = new PULSEBALL();
    initialRankingTable = [
      { "team": { "name": "Australia", "id": 32 }, "pos": 1, "pts": 54.23 },
      { "team": { "name": "New Zealand", "id": 62 }, "pos": 2, "pts": 54.00 },
      { "team": { "name": "France", "id": 2 }, "pos": 3, "pts": 52.95 },
      { "team": { "name": "England", "id": 1 }, "pos": 4, "pts": 52.32 },
      { "team": { "name": "Romania", "id": 24 }, "pos": 5, "pts": 43.50 }
    ];
    sampleMatch = { "matchId": 2524,
                    "description": "Match 2",
                    "venue": {
                      "id": 900,
                      "name": "Stadium",
                       "city": "Paris",
                       "country": "France"
                     },
                    "teams": [
                      {
                        "id": 2,
                        "name": "France",
                        "abbreviation": "FRA"
                      },
                      {
                        "id": 1,
                        "name": "England",
                        "abbreviation": "ENG"
                      }
                    ],
                    "scores": [
                      19,
                      23
                    ],
                    "status": "C",
                    "outcome": "B"
                  };
  }); //end of beforeEach

  it("should have a constructor", function() {
    expect(pulseball).toEqual(new PULSEBALL());
  });

  it("should intantiate with an empty Ranking Table", function(){
    expect(pulseball.rankingsTable).toEqual(null);
  });

  it("should have an init function that parse a ranking table", function(){
    pulseball.init(initialRankingTable);
    expect(pulseball.rankingsTable).toEqual(initialRankingTable);
  });

  it("should have an addMatch function", function(){
    expect(pulseball.addMatch).toBeDefined();
  });

  it("should have a teams function", function(){
    expect(pulseball.teams).toBeDefined();
  });

  it("should have a rankingIndex function to rank the index of each team", function(){
    expect(pulseball.rankingIndex).toBeDefined();
  });

  it("should have a function to know the value of the rate difference", function (){
    expect(pulseball.rateDifference).toBeDefined();
  });

  describe("PULSEBALL.addMatch", function(){

    beforeEach(function(){
      tableGreaterPlusTen = [
        { "team": { "name": "Australia", "id": 32 }, "pos": 1, "pts": 54.23 },
        { "team": { "name": "New Zealand", "id": 62 }, "pos": 2, "pts": 54.00 },
        { "team": { "name": "France", "id": 2 }, "pos": 3, "pts": 52.95 },
        { "team": { "name": "England", "id": 1 }, "pos": 4, "pts": 15.00 },
        { "team": { "name": "Romania", "id": 24 }, "pos": 5, "pts": 12.00 }
      ];

      finalRankingTable = [
        { "team": { "name": "Australia", "id": 32 }, "pos": 1, "pts": 54.23 },
        { "team": { "name": "New Zealand", "id": 62 }, "pos": 2, "pts": 54.00 },
        { "team": { "name": "England", "id": 1 }, "pos": 4, "pts": 53.68 },
        { "team": { "name": "France", "id": 2 }, "pos": 3, "pts": 51.59 },
        { "team": { "name": "Romania", "id": 24 }, "pos": 5, "pts": 43.50 }
      ];

      unsortedFinalRankingTable = [
        { team: { name: 'Australia', id: 32 }, pos: 1, pts: 54.23 },
        { team: { name: 'New Zealand', id: 62 }, pos: 2, pts: 54 },
        { team: { name: 'France', id: 2 }, pos: 3, pts: 51.59 },
        { team: { name: 'England', id: 1 }, pos: 4, pts: 53.68 },
        { team: { name: 'Romania', id: 24 }, pos: 5, pts: 43.5 }
      ];

      pulseball.init(initialRankingTable);
      pulseball.addMatch(sampleMatch);
    });

    it("should pick names of the teams playing in a match", function(){
      expect(pulseball.addMatch.team1Name).toEqual("England");
      expect(pulseball.addMatch.team2Name).toEqual("France");
      expect(pulseball.addMatch.team1Name).not.toContain("France");
      expect(pulseball.addMatch.team2Name).not.toContain("England");
    });

    it("should pick the name of the country where the match is played", function(){
      expect(pulseball.addMatch.venue).toEqual("France");
      expect(pulseball.addMatch.venue).not.toContain("England");
    });

    it("should know the rank index for each team", function(){
      var team1RankingIndex = pulseball.rankingIndex(pulseball.addMatch.team1Name);
      var team2RankingIndex = pulseball.rankingIndex(pulseball.addMatch.team2Name);
      expect(team1RankingIndex).toEqual(3);
      expect(team2RankingIndex).toEqual(2);
    });

    it("should know the rate difference", function(){
      var team1RankingIndex = pulseball.rankingIndex(pulseball.addMatch.team1Name);
      var team2RankingIndex = pulseball.rankingIndex(pulseball.addMatch.team2Name);
      var venue = "France";
      expect(pulseball.rateDifference(team1RankingIndex, team2RankingIndex, venue)).toEqual(3.63);
    });

    it("should cap to 10 when rating difference is greater than 10", function(){
      pulseball.init(tableGreaterPlusTen);
      pulseball.addMatch(sampleMatch);
      var team1RankingIndex = pulseball.rankingIndex(pulseball.addMatch.team1Name);
      var team2RankingIndex = pulseball.rankingIndex(pulseball.addMatch.team2Name);
      var venue = "France";
      pulseball.rateDifference(team1RankingIndex, team2RankingIndex, venue);
      expect(pulseball.addMatch.rankingDifference).toEqual(10);
    });
  });// end describe addMatch

  describe("PULSEBALL after a match is added", function () {

    it("should know the outcome of the match", function () {
      expect(pulseball.addMatch.outcome).toEqual("B");
    beforeEach(function () {
      pulseball.init(initialRankingTable);
      pulseball.addMatch(sampleMatch);
      finalRankingTable = [
        { team: { name: 'Australia', id: 32 }, pos: 1, pts: 54.23 },
        { team: { name: 'New Zealand', id: 62 }, pos: 2, pts: 54 },
        { team: { name: 'England', id: 1 }, pos: 3, pts: 53.68 },
        { team: { name: 'France', id: 2 }, pos: 4, pts: 51.59 },
        { team: { name: 'Romania', id: 24 }, pos: 5, pts: 43.5 }
      ];
    });

    it("should change the points of the teams after a match is added", function(){
      expect(pulseball.rankingsTable).toEqual(unsortedFinalRankingTable);
    it("It change the order of the array by pts", function () {
      expect(pulseball.rankingsTable).toEqual(finalRankingTable);
    });
  });// end describe addMatch
    
  }); //PULSEBALL after
}); //end of describe
