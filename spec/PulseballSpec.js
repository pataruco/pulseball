describe("PULSEBALL", function() {
  var pulseball,
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

}); //end of describe
