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
        form.reset()
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        
      });
  });
})();
