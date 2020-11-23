$(document).ready(function () {
  $('#user-form').click(validateUserForm);
});

function validateUserForm() {
  let userEmail = $('#user-email').val();
  let userName = $('#user-name').val();

  if (userEmail == '' && userName == '') {
    alert('We need your name and email so that you can be part of SurfPro!');
    return;
  }

  if (userName == '') {
    alert('We found an error where you entered your name. Check it out!');
    return;
  }

  if (userEmail == '') {
    alert('We found an error where you entered your email. Check it out!');
    return;
  }

  alert("That's right! Welcome to SurfPro!");
}
