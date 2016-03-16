describe("PULSEBALL", function() {
  var pulseball,
      sampleMatch,
      initialRankingTable;

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

  it("should pick names of the teams playing in a match", function(){
    pulseball.addMatch(sampleMatch);
    expect(pulseball.addMatch.team1Name).toEqual("England");
    expect(pulseball.addMatch.team2Name).toEqual("France");
    expect(pulseball.addMatch.team1Name).not.toContain("France");
    expect(pulseball.addMatch.team2Name).not.toContain("England");
  });



}); //end of describe
