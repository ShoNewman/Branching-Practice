//business logic
let daniel = 0;
let gollum = 0;
let keanu = 0;

function tally(checked) {
  if (checked === 'daniel') {
    daniel++;
  } else if(checked === 'gollum') {
    gollum++;
  } else if (checked === 'keanu') {
    keanu++;
  }
}

//UI logic
$(document).ready(function() {
  const firstAnswer = $('input:radio[name=firstQuestion]:checked').val();
  const firstAnswer = $('input:radio[name=firstQuestion]:checked').val();
})