$(function() {
  $.validator.addMethod('strongPassword', function(value, element) {
    return this.optional(element) //checks to see if this input is required or not
      || value.length >= 6 // lenght greateror equal to 6
      && /\d/.test(value) // at least one numerical digit
      && /[a-z]/i.test(value); // at least one alpha character
  }, 'Your password must be at least 6 characters long and contain at least one number and one char\'.')

  $('#register-form').validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        strongPassword: true
      },
      password2: {
        required: true,
        equalTo: "#password"
      },
      firstName: {
        required: true,
        nowhitespace: true,
        lettersonly: true
      }
    },
    messages: {
      email: {
        required: "Please enter an email address.",
        email: "Please enter a <em>valid</em> email address."
      }
    }
  });

});
