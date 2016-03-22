$(document).ready(function(){

  let pulseball = new PULSEBALL();
  const initialRankingTable = [
    { "team": { "name": "Australia", "id": 32 }, "pos": 1, "pts": 54.23 },
    { "team": { "name": "New Zealand", "id": 62 }, "pos": 2, "pts": 54.00 },
    { "team": { "name": "France", "id": 2 }, "pos": 3, "pts": 52.95 },
    { "team": { "name": "England", "id": 1 }, "pos": 4, "pts": 52.32 },
    { "team": { "name": "Romania", "id": 24 }, "pos": 5, "pts": 43.50 }
  ];
  let match;
  let $table = $('#table');

  pulseball.init(initialRankingTable);

  $(window).on('load', renderTable(pulseball.rankingsTable));

  $('#new-match').on('submit', createNewMatch);

  function renderTable(table){
    table.forEach(function(team){
      $table.append(
        `<tr class="animated fadeIn"><td>${team.pos}</td><td>${team.team.name}</td><td>${team.pts.toFixed(2)}</td></tr>`
      );
    });
  };

  function createNewMatch(e){
    e.preventDefault();

    let team1 = $('#new-match input[name="team-1"]:checked').val();
    let team2 = $('#new-match input[name="team-2"]:checked').val();
    let venue = $('#new-match input[name="venue"]:checked').val();
    let outcome = $('#new-match input[name="outcome"]:checked').val();
    match = { "matchId": 2524,
                    "description": "Match 2",
                    "venue": {
                      "id": 900,
                      "name": "Stadium",
                       "city": "Paris",
                       "country": venue
                     },
                    "teams": [
                      {
                        "id": 2,
                        "name": team2,
                        "abbreviation": "FRA"
                      },
                      {
                        "id": 1,
                        "name": team1,
                        "abbreviation": "ENG"
                      }
                    ],
                    "scores": [
                      19,
                      23
                    ],
                    "status": "C",
                    "outcome": outcome
                  };
    pulseball.addMatch(match);
    $table.empty();
    renderTable(pulseball.rankingsTable);
  };
}); //end of document
