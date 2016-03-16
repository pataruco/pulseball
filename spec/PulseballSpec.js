describe("PULSEBALL", function() {
  var pulseball;

  beforeEach(function() {
    pulseball = new PULSEBALL();
  });

  it("should have a constructor", function() {
    expect(pulseball).toEqual(new PULSEBALL());
  });

  it("should intantiate with a ranking an empty Ranking Table", function(){
    expect(pulseball.rankingsTable).toEqual(null);
  });

}); //end of describe
