$(document).ready(function(){

  var pulseball = new PULSEBALL();
  var initialRankingTable = [
    { "team": { "name": "Australia", "id": 32 }, "pos": 1, "pts": 54.23 },
    { "team": { "name": "New Zealand", "id": 62 }, "pos": 2, "pts": 54.00 },
    { "team": { "name": "France", "id": 2 }, "pos": 3, "pts": 52.95 },
    { "team": { "name": "England", "id": 1 }, "pos": 4, "pts": 52.32 },
    { "team": { "name": "Romania", "id": 24 }, "pos": 5, "pts": 43.50 }
  ];

  pulseball.init(initialRankingTable);
  console.log(pulseball.rankingsTable);

  $(window).on('load', renderTable(pulseball.rankingsTable));

  $('#new-match').on('submit', createNewMatch);

  function createNewMatch(e){
    e.preventDefault();

    var team1 = $('#new-match input[name="team-1"]:checked').val();
    var team2 = $('#new-match input[name="team-2"]:checked').val();
    var venue = $('#new-match input[name="venue"]:checked').val();
    var outcome = $('#new-match input[name="outcome"]:checked').val();
    console.log(team1);
    console.log(team2);
    console.log(venue);
    console.log(outcome);
  };



});
