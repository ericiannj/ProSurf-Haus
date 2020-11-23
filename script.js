$(document).ready(function () {
  $('#user-form').click(validateUserForm);
});

function validateUserForm() {
  let userEmail = $('#user-email').val();

  if (userEmail == '') {
    alert('We found an error where you entered your email. Check it out!');
    return;
  }

  alert(
    "That's right! Welcome to SurfPro! We'll send an email with the next step into our expirience."
  );
}
