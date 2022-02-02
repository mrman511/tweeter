$(document).ready(() => {
  let formField = $('#tweet-text');
  const totalChars = ($('#char-counter').text());

  formField.keydown(() => {
    const currentCount = $('#tweet-text').val().length;
    const charsLeft = (parseInt(totalChars) - (currentCount)).toString();
    $('#char-counter').val(charsLeft);
    if (charsLeft <= 0) {
      $('#char-counter').css("color", "red");
    } else {
      $('#char-counter').css("color", "#545149");
    }

  });
  
});