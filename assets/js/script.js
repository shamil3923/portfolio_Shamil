'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// resume download functionality
const downloadResumeBtn = document.getElementById('downloadResumeBtn');

downloadResumeBtn.addEventListener('click', function() {
  // Path to your resume file (you'll need to add your resume file to this path)
  const resumePath = './assets/files/resume.pdf';

  // Create a temporary anchor element to trigger download
  const link = document.createElement('a');
  link.href = resumePath;
  link.download = 'Mohamed_Shamil_Resume.pdf'; // The name for the downloaded file

  // Append to body, click, and remove
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Optional: Show a brief feedback message
  const originalText = downloadResumeBtn.querySelector('span').textContent;
  downloadResumeBtn.querySelector('span').textContent = 'Downloaded!';

  setTimeout(() => {
    downloadResumeBtn.querySelector('span').textContent = originalText;
  }, 2000);
});











// Initialize EmailJS when the page loads
document.addEventListener('DOMContentLoaded', function() {
  // Initialize EmailJS with your public key
  emailjs.init("GIhpFyCAsRbao1dnf");
});

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");
const successMessage = document.getElementById("successMessage");
const errorMessage = document.getElementById("errorMessage");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}

// handle form submission with EmailJS
form.addEventListener("submit", function(e) {
  e.preventDefault();

  // Hide any previous messages
  successMessage.style.display = "none";
  errorMessage.style.display = "none";

  // Show loading state
  const originalText = formBtn.querySelector('span').textContent;
  const originalIcon = formBtn.querySelector('ion-icon').name;
  formBtn.querySelector('span').textContent = 'Sending...';
  formBtn.querySelector('ion-icon').name = 'hourglass-outline';
  formBtn.setAttribute('disabled', '');

  // Get form data
  const templateParams = {
    from_name: form.fullname.value,
    from_email: form.email.value,
    message: form.message.value,
    to_name: 'Mohamed Shamil', // Your name
    reply_to: form.email.value
  };

  // Send email using EmailJS
  emailjs.send('service_btu9s7g', 'template_xjj2qtc', templateParams)
    .then(function(response) {
      // Success
      console.log('SUCCESS!', response.status, response.text);
      successMessage.style.display = "flex";
      form.reset();

      // Reset button state
      formBtn.querySelector('span').textContent = 'Message Sent!';
      formBtn.querySelector('ion-icon').name = 'checkmark-outline';

      // Reset to original state after 3 seconds
      setTimeout(() => {
        formBtn.querySelector('span').textContent = originalText;
        formBtn.querySelector('ion-icon').name = originalIcon;
        formBtn.setAttribute('disabled', '');
        successMessage.style.display = "none";
      }, 3000);

    }, function(error) {
      // Error
      console.log('FAILED...', error);
      errorMessage.style.display = "flex";

      // Reset button state
      formBtn.querySelector('span').textContent = originalText;
      formBtn.querySelector('ion-icon').name = originalIcon;

      // Re-enable button if form is valid
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      }

      // Hide error message after 5 seconds
      setTimeout(() => {
        errorMessage.style.display = "none";
      }, 5000);
    });
});



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}