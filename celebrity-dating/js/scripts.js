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
  $('form#survey').submit(function(e) {
    e.preventDefault();
    const firstAnswer = $('input:radio[name=firstQuestion]:checked').val();
    const secondAnswer = $('input:radio[name=secondQuestion]:checked').val();
    const thirdAnswer = $('input:radio[name=thirdQuestion]:checked').val();
    tally(firstAnswer);
    tally(secondAnswer);
    tally(thirdAnswer);


    if (daniel > gollum && daniel > keanu) {
      $('#gollumSelected').hide();
      $('#keanuSelected').hide();
      $('#danielSelected').fadeIn();
    } else if (gollum > daniel && gollum > keanu) {
      $('#keanuSelected').hide();
      $('#danielSelected').hide();
      $('#gollumSelected').fadeIn();
    } else if (keanu > daniel && keanu > gollum) {
      $('#gollumSelected').hide();
      $('#danielSelected').hide();
      $('#keanuSelected').fadeIn();
    }

  });
})