emailjs.init('_sDMwEekjXEiFCce2'); 

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
      .send('service_wfb9o14', 'template_jal1dyd', templateParams) 
      .then((response) => {
        console.log('Email sent successfully!', response);

        let myPop = document.getElementById('my-pop');
        myPop.style.display = 'block';
        myPop.style.margin = '2rem auto';
        myPop.style.textTransform = 'upppercase';
        myPop.style.textAlign = 'center';

        //const formDiv = document.getElementById('form-div');
        //formDiv.appendChild(confirmationMessage);
        
        form.reset();
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  });
})();
