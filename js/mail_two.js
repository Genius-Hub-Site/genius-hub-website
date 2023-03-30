(function() {
    emailjs.init("qexGeuo7xN7wqmIt-")
    // Add event listener to the form submit button
    document.getElementById('submit-btn-two').addEventListener('click', function(event) {
      event.preventDefault(); // prevent default form submission behavior
  
      // Display a loading spinner on the button
      document.getElementById('submit-btn-two').innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Sending...';
  
      // Get the form data
      var form = document.getElementById('contact-form-two');
      var job = form.elements['job_two'].value;
      var name = form.elements['name_two'].value;
      var email = form.elements['email_two'].value;
      var phone = form.elements['phone_two'].value;
      var bio = form.elements['bio_two'].value;
  
      // Use EmailJS to send the email
      emailjs.send('6737&$2321)(*ttr_n5znxvd', 'template_lt11uhj962@$3~', {
        job_two: job,
        name_two: name,
        email_two: email,
        phone_two: phone,
        bio_two: bio
      })
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
  
        // Reset the form
        form.reset();
  
        // Hide the custom job field if it's visible
        if (document.getElementById('custom-job-field-index').style.display !== 'none') {
          document.getElementById('custom-job-field-index').style.display = 'none';
        }
  
        // Show a success message
        document.getElementById('submit-btn_two').innerHTML = 'Submitted!';
        setTimeout(function() {
          document.getElementById('submit-btn-two').innerHTML = 'Submit';
        }, 3000);
      }, function(error) {
        console.log('FAILED...', error);
  
        // Show an error message
        document.getElementById('submit-btn-two').innerHTML = 'Failed! Try again';
        setTimeout(function() {
          document.getElementById('submit-btn-two').innerHTML = 'Submit';
        }, 3000);
      });
   
    });
    
})();