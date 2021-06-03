$(document).ready(function() {
  // Click picture for information
  $('#monkeyPic').click(function() {
    $('#octopusPic, #hamsterPic, #peacockPic').removeClass('selected');
    $('#monkey').show();
    $('#octopus, #hamster, #peacock').hide();
    $('#monkeyPic').addClass('selected');
  })
  $('#octopusPic').click(function() {
    $('#monkeyPic, #hamsterPic, #peacockPic').removeClass('selected');
    $('#octopus').show();
    $('#monkey, #hamster, #peacock').hide();
    $('#octopusPic').addClass('selected');
  }) 
  $('#hamsterPic').click(function() {
    $('#monkeyPic, #octopusPic, #peacockPic').removeClass('selected');
    $('#hamster').show();
    $('#monkey, #octopus, #peacock').hide();
    $('#hamsterPic').addClass('selected');
  })
  $('#peacockPic').click(function() {
    $('#monkeyPic, #hamsterPic, #octopusPic').removeClass('selected');
    $('#peacock').show();
    $('#monkey, #hamster, #octopus').hide();
    $('#peacockPic').addClass('selected');
  })

// Select from dropdown menu for information  
  $('form#dropdownForm').submit(function(event) {
    event.preventDefault();
    $('#monkeyPic').removeClass('selected');
    $('#hamsterPic').removeClass('selected');
    $('#octopusPic').removeClass('selected');
    $('#peacockPic').removeClass('selected');

    let selectedAnimal = $("select#animalDropdownSelected").val();
    
    if (selectedAnimal === 'monkey') {
      $('#monkey').show();
      $('#octopus, #hamster, #peacock').hide();
      $('#octopusPic, #hamsterPic, #peacockPic').addClass('imgDefault');
      $('#monkeyPic').addClass('selected');
    } else if (selectedAnimal === 'octopus') {
      $('#octopus').show();
      $('#monkeyPic, #hamsterPic, #peacockPic').addClass('imgDefault');
      $('#octopusPic').addClass('selected');
      $('#hamster, #monkey, #peacock').hide();
    } else if (selectedAnimal === 'hamster') {
      $('#hamster').show();
      $('#monkeyPic, #octopusPic, #peacockPic').addClass('imgDefault');
      $('#hamsterPic').addClass('selected');
      $('#octopus, #monkey, #peacock').hide();
    } else if (selectedAnimal === 'peacock') {
      $('#peacock').show();
      $('#monkeyPic, #octopusPic, #hamserPic').addClass('imgDefault');
      $('#peacockPic').addClass('selected');
      $('#octopus, #monkey, #hamster').hide();
    }
  })
});