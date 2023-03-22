// // Initialize EmailJS with your user ID and service ID
// emailjs.init("QUhA5Rtm9FlJ9u1WI");

// // Define the function to handle form submission
// function sendEmail(e) {
//   e.preventDefault();

//   // Get the form data
//   let name = document.getElementById("name").value;
//   let email = document.getElementById("email").value;
//   let phone = document.getElementById("phone").value;
//   let bio = document.getElementById("bio").value;
//   let cv = document.getElementById("cv").files[0];
//   let job = document.getElementById("job").value;

//   // Check if a CV file is selected and validate its type
//   if (cv) {
//     let allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png"];
//     if (!allowedTypes.includes(cv.type)) {
//       alert("Invalid CV file type. Allowed types: pdf, doc, docx, jpeg, png.");
//       return;
//     }
//   }

//   // Prepare the email parameters
//   let params = {
//     name: name,
//     email: email,
//     phone: phone,
//     bio: bio,
//     job: job
//   };
//   let attachment = null;
//   if (cv) {
//     attachment = {
//       name: cv.name,
//       data: cv
//     };
//   }

//   // Send the email using EmailJS
//   emailjs.send("service_vzwdgjy", "template_buvs3sb>", params, attachment)
//     .then(function(response) {
//       console.log("Email sent successfully: ", response);
//       alert("Thank you for your submission. We will contact you shortly.");
//     }, function(error) {
//       console.log("Email sending failed: ", error);
//       alert("Sorry, there was an error submitting your form. Please try again later.");
//     });
// }

// // Add event listener to the form submit button
// document.getElementById("submit-btn").addEventListener("click", sendEmail);

// (function() {
//   emailjs.init("QUhA5Rtm9FlJ9u1WI");

//   const form = document.getElementById("contact-form");
//   form.addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent the form from submitting normally

//     // Send the form data via EmailJS
//     emailjs.sendForm("service_vzwdgjy", "template_buvs3sb", this)
//       .then(function(response) {
//         console.log("SUCCESS!", response.status, response.text);
//         alert("Your message has been sent successfully.");
//         form.reset(); // Clear the form fields
//       }, function(error) {
//         console.log("FAILED...", error);
//         alert("Sorry, there was a problem sending your message. Please try again later.");
//       });
//   });
// })();

(function() {
  emailjs.init("QUhA5Rtm9FlJ9u1WI");

  const form = document.getElementById("contact-form");
  const submitButton = document.getElementById("submit-btn");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Display a loading spinner on the submit button
    submitButton.disabled = true;
    submitButton.innerHTML = '<span class="submit-spinner"></span>Sending...';

    // Send the form data via EmailJS
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
        // Hide the loading spinner on the submit button
        submitButton.disabled = false;
        submitButton.innerHTML = "Submit";
      });
  });
})();
