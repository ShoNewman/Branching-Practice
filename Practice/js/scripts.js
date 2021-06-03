$(document).ready(function() {
  const age = parseInt(prompt("How old are you?"));

  if (age > 21) {
    $('#drinks').show();
  } else if (age === 21) {
    alert("Now don't go wild!");
    $('#drinks').show();
  } else {
    $('#under-21').show();
  }
});