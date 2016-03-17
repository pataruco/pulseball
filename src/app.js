$(document).ready(function(){
  console.log('hola');
  var pulseball = new PULSEBALL();
  console.log(pulseball);

  $('#new-match').on('submit', createNewMatch);

  function createNewMatch(e){
    e.preventDefault();
    console.log('hello submit');
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
