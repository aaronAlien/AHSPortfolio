emailjs.init(process.env.EMAIL_JS_INIT); 

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
      .send(process.env.EMAIL_JS_SERVICE, process.env.EMAIL_JS_TEMPLATE, templateParams) 
      .then((response) => {
        console.log('Email sent successfully!', response);

        let myPop = document.getElementById('my-pop');
        myPop.style.display = 'block';
        myPop.style.margin = '2rem auto';
        myPop.style.textTransform = 'upppercase';
        myPop.style.textAlign = 'center';
        
        form.reset();
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  });
})();
