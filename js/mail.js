(function() {
  emailjs.init("QUhA5Rtm9FlJ9u1WI");

  const form = document.getElementById("contact-form");
  const submitButton = document.getElementById("submit-btn");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    submitButton.disabled = true;
    submitButton.innerHTML = '<span class="submit-spinner"></span>Sending...';

    emailjs.sendForm("service_vzwdgjy", "template_buvs3sb", this)
      .then(function(response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Your message has been sent successfully.");
        form.reset(); // Clear the form fields
      }, function(error) {
        console.log("FAILED...", error);
        alert("Sorry, there was a problem sending your message. Please try again later.");
      })
      .finally(function() {
        submitButton.disabled = false;
        submitButton.innerHTML = "Submit";
      });
  });
})();
