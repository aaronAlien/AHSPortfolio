emailjs.init('_sDMwEekjXEiFCce2'); // Replace with your Public Key

(function () {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fullName = document.getElementById('dark_field_name').value;
    const email = document.getElementById('dark_field_email').value;
    const message = document.getElementById('textarea_field').value;

    const templateParams = {
      from_name: fullName,
      from_email: email,
      message: message,
    };

    emailjs
      .send('service_wfb9o14', 'template_jal1dyd', templateParams) // Replace with your Service ID and Template ID
      .then((response) => {
        console.log('Email sent successfully!', response);
        // Append a confirmation message to the DOM
        const confirmationMessage = document.createElement('div');
        confirmationMessage.classList.add('nes-container', 'is-dark', 'is-rounded');
        confirmationMessage.innerHTML = 'Thank you for  you email! I will get back to you soon.';
        confirmationMessage.style.marginTop('2rem');
        confirmationMessage.style.color('green');
        confirmationMessage.style.textTransform('upppercase');

        const formDiv = document.getElementById('form-div');
        formDiv.appendChild(confirmationMessage);

        form.reset();
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  });
})();
