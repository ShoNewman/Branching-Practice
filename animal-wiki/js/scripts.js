$(document).ready(function() {
  // Click picture for information
  $('#monkeyPic').click(function() {
    $('#octopusPic, #hamsterPic, #peacockPic').removeClass('notSelected');
    $('#monkey').show();
    $('#octopus, #hamster, #peacock').hide();
    $('#octopusPic, #hamsterPic, #peacockPic').addClass('notSelected');
  })
  $('#octopusPic').click(function() {
    $('#monkeyPic, #hamsterPic, #peacockPic').removeClass('notSelected');
    $('#octopus').show();
    $('#monkey, #hamster, #peacock').hide();
    $('#monkeyPic, #hamsterPic, #peacockPic').addClass('notSelected');
  }) 
  $('#hamsterPic').click(function() {
    $('#monkeyPic, #hamsterPic, #peacockPic').removeClass('notSelected');
    $('#octopus').show();
    $('#monkey, #hamster, #peacock').hide();
    $('#monkeyPic, #hamsterPic, #peacockPic').addClass('notSelected');
  })
  $('#peacockPic').click(function() {
    $('#monkey').hide();
    $('#octopus').hide();
    $('#hamster').hide();
    $('#peacock').show();
    $('#monkeyPic').addClass('notSelected');
    $('#octopusPic').addClass('notSelected');
    $('#hamsterPic').addClass('notSelected');
  })

// Select from dropdown menu for information  
  $('form#dropdownForm').submit(function(event) {
    event.preventDefault();
    $('#monkeyPic').removeClass('notSelected');
    $('#hamsterPic').removeClass('notSelected');
    $('#octopusPic').removeClass('notSelected');
    $('#peacockPic').removeClass('notSelected');

    let selectedAnimal = $("select#animalDropdownSelected").val();
    
    if (selectedAnimal === 'monkey') {
      $('#monkey').show();
      // $('#octopus, #hamster, #peacock').hide();
      $('#octopusPic, #hamsterPic, #peacockPic').addClass('notSelected');
    } else if (selectedAnimal === 'octopus') {
      $('#monkey, ').hide();
      $('#octopus').show();
      $('#hamster').hide();
      $('#peacock').hide();
      $('#monkeyPic').addClass('notSelected');
      $('#hamsterPic').addClass('notSelected');
      $('#peacockPic').addClass('notSelected');
    } else if (selectedAnimal === 'hamster') {
      $('#monkey').hide();
      $('#octopus').hide();
      $('#hamster').show();
      $('#peacock').hide();
      $('#monkeyPic').addClass('notSelected');
      $('#octopusPic').addClass('notSelected');
      $('#peacockPic').addClass('notSelected');
    } else if (selectedAnimal === 'peacock') {
      $('#monkey').hide();
      $('#octopus').hide();
      $('#hamster').hide();
      $('#peacock').show();
      $('#monkeyPic').addClass('notSelected');
      $('#octopusPic').addClass('notSelected');
      $('#hamsterPic').addClass('notSelected');
    }
  })
});