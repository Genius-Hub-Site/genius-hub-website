(function() {
    emailjs.init("qexGeuo7xN7wqmIt-")
    document.getElementById('submit-btn').addEventListener('click', function(event) {
      event.preventDefault(); // prevent default form submission behavior
  
      document.getElementById('submit-btn').innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Sending...';
  
      // Get the form data
      var form = document.getElementById('contact-form');
      var job = form.elements['job'].value;
      var name = form.elements['name'].value;
      var email = form.elements['email'].value;
      var phone = form.elements['phone'].value;
      var bio = form.elements['bio'].value;
  
      // Use EmailJS to send the email
      emailjs.send('6737&$2321)(*ttr_n5znxvd', 'template_nb9b09l', {
        job: job,
        name: name,
        email: email,
        phone: phone,
        bio: bio
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
        document.getElementById('submit-btn').innerHTML = 'Submitted!';
        setTimeout(function() {
          document.getElementById('submit-btn').innerHTML = 'Submit';
        }, 3000);
      }, function(error) {
        console.log('FAILED...', error);
  
        // Show an error message
        document.getElementById('submit-btn').innerHTML = 'Failed! Try again';
        setTimeout(function() {
          document.getElementById('submit-btn').innerHTML = 'Submit';
        }, 3000);
      });
   
    });
    
})();