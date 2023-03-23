
(function() {
    emailjs.init("QUhA5Rtm9FlJ9u1WI");
  
    const form = document.getElementById("contact-form-two");
    const submitButton = document.getElementById("submit-btn-two");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      submitButton.disabled = true;
      submitButton.innerHTML = '<span class="submit-spinner"></span>Sending...';
  
      // Send the form data via EmailJS
      emailjs.sendForm("service_vzwdgjy", "template_f8axbj5", this)
        .then(function(response) {
          console.log("SUCCESS!", response.status, response.text);
          alert("Your message has been sent successfully.");
          form.reset();
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
  
  