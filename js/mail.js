$(document).ready(function() {
    $('#contact-form').submit(function(event) {
      event.preventDefault(); // Prevent form from submitting normally
  
      // Get form data
      var name = $('#name').val();
      var email = $('#email').val();
      var service = $('#service').val();
      var message = $('#message').val();
      var phone = $('#phone').val();
      var bio = $("#bio").val();

  
      // Send email via Gmail
      Email.send({
        SecureToken: "YourSecureTokenHere",
        To: "nksiha.1601@gmail.com",
        From: email,
        Subject: "" + name,
        Body: "Service Required: " + service + "<br>" + "Mobile:"+ phone +"<br>Message: " + message
      }).then(
        function(message) {
          // Show success message
          alert("Your message has been sent!");
        },
        function(error) {
          // Show error message
          alert("There was an error sending your message. Please try again later.");
        }
      );
    });
  });
  